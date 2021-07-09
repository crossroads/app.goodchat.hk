import { useEffect, useState } from "react";
import { useSafeSetState } from "./useSafeSetState"
import { MessageContent } from "../typings/goodchat"
import { GraphQLError } from "graphql";
import { useAsync } from './useAsync'
import uniqueId from 'lodash/uniqueId'
import uniqBy from 'lodash/sortedUniqBy'
import update from 'immutability-helper'
import {
  ConversationMessagesQuery,
  SendMessageMutation,
  useConversationMessagesQuery,
  useMarkAsReadMutation,
  useNewMessagesSubSubscription,
  useSendMessageMutation,
} from "../generated/graphql";

// --------------------------------
// ~ HOOK TYPES
// --------------------------------

const DEFAULT_PAGE_SIZE = 25;

type Definite<T> = Exclude<T, null | undefined>

type Callback<T = void> = (arg: T) => any

export type ConversationRecord = ConversationMessagesQuery["conversation"]

export type MessageRecord = Definite<ConversationRecord>["messages"][0];

export interface WrappedMessage {
  uid: string
  type: "localMessage" | "savedMessage"
  status: "unsent" | "pending" | "failed" | "saved"
  content: MessageContent
  error: Error | null
  timestamp: Date
  record?: MessageRecord
}

export interface SavedMessage extends WrappedMessage {
  status: 'saved',
  record: MessageRecord
}

export type UseMessagesProps = {
  pageSize?: number
  lazy?: boolean
  conversationId: number
  onComplete?: Callback
  onNewMessage?: Callback<WrappedMessage>
}

// --------------------------------
// ~ HELPERS
// --------------------------------

const noop = () => {}

// --------------------------------
// ~ HOOK IMPLEMENTATION
// --------------------------------

export const useMessages = (props: UseMessagesProps) => {
  const {
    pageSize = DEFAULT_PAGE_SIZE,
    onNewMessage = noop,
    onComplete = noop,
    lazy = false,
    conversationId
  } = props;

  // ---------------------------------
  // ~ STATE MANAGEMENT
  // ---------------------------------

  const [messages, setMessages] = useState<WrappedMessage[]>([]);
  const [complete, setComplete] = useState(false);
  const safeSetState = useSafeSetState();

  const [markAsRead] =  useMarkAsReadMutation({
    variables: {
      conversationId: Number(conversationId)
    }
  })

  useEffect(() => {
    markAsRead()
  }, [])

  const addMessages = (newMessages?: WrappedMessage[]) => {
    if (!newMessages || newMessages.length === 0) return;

    setMessages((msgs) => {
      return uniqBy(
        [
          ...msgs,
          ...(newMessages || [])
        ].sort((m1, m2) => {
          return m1.timestamp.getTime() - m2.timestamp.getTime();
        }),
        "uid"
      )
    })
  };

  const updateMessage = (uid: string, data: Partial<WrappedMessage>) => {
    setMessages((messages) => {
      const index = messages.findIndex((om) => om.uid === uid);
      if (index >= 0) {
        const wrappedMessage = messages[index];
        const updatedMessage : WrappedMessage = {
          ...wrappedMessage,
          ...data
        }
        return update(messages, { $splice: [[index, 1, updatedMessage]] });
      }
      return messages;
    })
  }

  const removeMessage = (uid: string) => {
    setMessages((messages) => {
      const index = messages.findIndex((om) => om.uid === uid);
      if (index >= 0) {
        return update(messages, { $splice: [[index, 1]] });
      }
      return messages;
    });
  }

  const wrapMessage = (message: MessageRecord) : SavedMessage => {
    return {
      uid: `saved-${message.id}`,
      type: 'savedMessage',
      status: "saved",
      content: message?.content,
      error: null,
      timestamp: new Date(message.createdAt),
      record: message
    }
  }

  // ---------------------------------
  // ~ DATA READ/WRITE
  // ---------------------------------

  const [postMessage] = useSendMessageMutation();

  const { refetch } = useConversationMessagesQuery({ skip: true });

  const { error: subscriptionError } = useNewMessagesSubSubscription({
    variables: { conversationId: Number(conversationId) },
    onSubscriptionData: ({ subscriptionData }) => {
      const message = subscriptionData.data?.messageEvent?.message

      if (!message) return;

      const wrapper = wrapMessage(message);

      addMessages([wrapper]);
      onNewMessage(wrapper)
      markAsRead()
    }
  });

  // ---------------------------------
  // ~ HOOK API
  // ---------------------------------

  //
  // We expose a loadMore method allowing the caller to fetch another page of data
  //
  const [, error, loading, loadMore] = useAsync(async () => {
    const oldestMessage = messages[0];
    const cursor = oldestMessage?.record?.id || 0

    const { data } = await refetch({
      conversationId: Number(conversationId),
      limit: pageSize,
      after: cursor,
    })

    const records = data?.conversation?.messages;

    if (Array.isArray(records)) {
      addMessages(records.map(wrapMessage));

      // Notify last page was loaded
      if (!complete && records.length < pageSize) {
        setComplete(true);
        onComplete();
      }
    }
  })

  /**
   * Tries to send an unsent or failed outbox message
   *
   * @param {WrappedMessage} wrappedMessage
   * @returns
   */
  const pushMessage = async (wrappedMessage: WrappedMessage) => {
    const { status, uid } = wrappedMessage;

    if (status === "pending") return;

    if (wrappedMessage.content.type !== 'text') return; // @TODO support other content types

    // 1. Update the state to pending
    updateMessage(uid, { status: "pending" })

    let error : GraphQLError;
    let data  : SendMessageMutation

    try {
      // 2. Trigger the mutation
      const result = await postMessage({
        variables: {
          timestamp: new Date(wrappedMessage.timestamp),
          conversationId: Number(conversationId),
          text: wrappedMessage.content.text
        }
      })

      if (result?.errors?.length) {
        error = result.errors[0];
      }

      if (result.data) {
        data = result.data
      }
    } catch (e) {
      error = e;
    }

    // 3. Update the state upon completion of request
    safeSetState(() => {
      if (error || !data?.sendMessage) {
        // 3.1: Mark the local message as 'failed' if an error occurs
        return updateMessage(uid, {
          status: 'failed',
          error: error
        })
      }

      // 3.1: Remove the local message and add the real one to the list
      removeMessage(uid);
      addMessages([wrapMessage(data.sendMessage)]);
    })
  }

  /**
   * Adds a new message to the list and tries to send it
   *
   * @param {string} text
   */
  const createMessage = (text: string) => {
    // 1: Create a local offline message
    const uid = `local-${uniqueId()}`;
    const outboxMessage : WrappedMessage = {
      uid: uid,
      type: "localMessage",
      status: "unsent",
      error: null,
      timestamp: new Date(),
      content: {
        type: "text",
        text: text
      }
    }

    // 2: Add it to the list of messages (it'll appear as unsent at first)
    addMessages([outboxMessage])
    onNewMessage(outboxMessage)

    // 3: Send it to the server
    pushMessage(outboxMessage);
  }

  // ---------------------------------
  // ~ LIFECYCLE
  // ---------------------------------

  useEffect(() => {
    // Auto-trigger the first page load
    if (!lazy) { loadMore(); }
  }, [])

  return {
    loading,
    messages,
    loadMore,
    complete,
    createMessage,
    retry: pushMessage,
    error: error || subscriptionError || null
  }
}

export default useMessages;
