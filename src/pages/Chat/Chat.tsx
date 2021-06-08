import React, { useEffect, useRef, useState } from "react"
import { MessageInput, MessageInputCallback } from 'components/Chat/MessageInput'
import { AuthorType, ConversationType } from "typings/goodchat"
import { useSafeSetState } from "hooks/useSafeSetState"
import { MessageFooter } from 'components/Chat/MessageFooter'
import { MessageBody } from 'components/Chat/MessageBody'
import { timeString } from "lib/utils/strings"
import { useParams } from "react-router"
import { Message } from 'components/Chat/Message'
import { Sticky } from 'components/Layout/Sticky'
import { style } from 'typestyle'
import uniqBy from 'lodash/sortedUniqBy'
import sortBy from 'lodash/sortBy'
import {
  ConversationMessagesQuery,
  ConversationDetailsQuery,
  useSendMessageMutation,
  useConversationMessagesQuery,
  useNewMessagesSubSubscription,
  useConversationDetailsQuery,
} from "../../generated/graphql";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonList,
  IonItem,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

// ---------------------------------
// ~ TYPES
// ---------------------------------

type Definite<T> = Exclude<T, null | undefined>;

type ChatPageParams = {
  conversationId: string;
};

type MessageRecord = Definite<
  ConversationMessagesQuery["conversation"]
>["messages"][0];

// ---------------------------------
// ~ UTILS
// ---------------------------------

const getChatTitle = (t: TFunction, details?: ConversationDetailsQuery) => {
  const conversation = details?.conversation;

  if (!conversation) return "";

  if (conversation?.type === ConversationType.Customer) {
    return `${conversation.customer?.displayName || t("chat.title.anonymous")}`;
  }

  const memberCount = conversation?.staffs.length ?? 0;
  return t("chat.title.memberCount", {
    memberCount,
    count: memberCount,
  });
};

const getMessageTime = (message: MessageRecord) => {
  return timeString(new Date(message.createdAt));
}

// ---------------------------------
// ~ STYLE
// ---------------------------------

const chatStyle = style({
  '$nest': {
    'ion-list': {
      minHeight: '100%'
    }
  }
})

// ---------------------------------
// ~ CHAT
// ---------------------------------

const PAGE_SIZE = 25;

const Chat: React.FC = () => {
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);
  const [requireScroll, setRequireScroll] = useState(false);
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const { conversationId } = useParams<ChatPageParams>();
  const [page, setPage] = useState(0);
  const [sendMessage] = useSendMessageMutation();
  const safeSetState = useSafeSetState();
  const ionContent = useRef<HTMLIonContentElement>(null);
  const { t } = useTranslation();

  // ---------------------------------
  // ~ HELPERS
  // ---------------------------------

  const getCursor = () => {
    // Oldest message is a the top
    return messages[0]?.id || 0;
  }

  const variables = (cursor = 0) => {
    return {
      conversationId: Number(conversationId),
      limit: PAGE_SIZE,
      after: cursor
    }
};

  const scrollToBottom = (opts : { animate?: boolean } = {}) => {
    if (ionContent.current?.scrollToBottom) {
      ionContent.current.scrollToBottom(opts.animate ? 500 : 0);
    }
  };

  const addMessages = (newMessages?: MessageRecord[]) => {
    if (!newMessages || newMessages.length === 0) return;

    // @todo: improve to avoid flickering
    setMessages(
      uniqBy(
        sortBy([...messages, ...(newMessages || [])], ["createdAt"], ["desc"]),
        "id"
      )
    );
  };

  const onPageLoaded = (pageData: ConversationMessagesQuery) => {
    addMessages(pageData?.conversation?.messages);
    setPage(page + 1);
  };

  // ---------------------------------
  // ~ QUERIES
  // ---------------------------------

  const { fetchMore } = useConversationMessagesQuery({
    variables: variables(0),
    onCompleted: onPageLoaded,
  });

  const { data: details } = useConversationDetailsQuery({
    variables: {
      conversationId: Number(conversationId),
    },
  });

  const { error: subError } = useNewMessagesSubSubscription({
    variables: { conversationId: Number(conversationId) },
    onSubscriptionData: ({ subscriptionData }) => {
      if (subscriptionData.data?.messageEvent) {
        addMessages([subscriptionData.data?.messageEvent.message]);
        setRequireScroll(true);
      }
    },
  });

  // ---------------------------------
  // ~ PAGINATION
  // ---------------------------------

  const nextPage = ($event: CustomEvent<void>) => {
    fetchMore({
      variables: variables(getCursor()),
      updateQuery(originalResult, { fetchMoreResult }) {
        if (!fetchMoreResult?.conversation?.messages.length) {
          //
          // We've reached the end, disable the scroll
          //
          setDisableInfiniteScroll(true);
          return originalResult;
        }

        onPageLoaded(fetchMoreResult);

        // Toggle the spinner off
        ($event.target as HTMLIonInfiniteScrollElement).complete();

        return originalResult;
      },
    });
  };

  useEffect(() => {
    if (requireScroll || page <= 1) {
      // On the first page load, we start at the bottom of the list
      scrollToBottom();
      setRequireScroll(false);
    }
  }, [page, requireScroll]);

  // ---------------------------------
  // ~ EVENT HANDLERS
  // ---------------------------------

  const onInputSubmit : MessageInputCallback = async ({ content, clear }) => {
    const { data, errors } = await sendMessage({
      variables: {
        conversationId: Number(conversationId),
        text: content
      }
    })

    if (!errors?.length && data?.sendMessage) {
      clear();
      safeSetState(() => {
        addMessages([data.sendMessage])
      })
    }
  }

  // ---------------------------------
  // ~ TEMPLATE
  // ---------------------------------

  return (
    <IonPage className={chatStyle}>

      {/* Page Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/chats" />
          </IonButtons>
          <IonTitle>{getChatTitle(t, details)}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Main Content */}
      <IonContent ref={ionContent}>
        {/* Infinite Scroll Spinner  */}
        <IonInfiniteScroll threshold="50%" position="top"
          disabled={disableInfiniteScroll}
          onIonInfinite={nextPage}
        >
          <IonInfiniteScrollContent loadingSpinner="circles"></IonInfiniteScrollContent>
        </IonInfiniteScroll>

        {/* List of messages */}
        <IonList>
          {messages.map((m) => (
            <IonItem key={m.id} lines={"none"}>
              <Message
                slot={m.authorType === AuthorType.CUSTOMER ? "start" : "end"}
              >
                <MessageBody content={m.content}></MessageBody>
                <MessageFooter text={getMessageTime(m)}></MessageFooter>
              </Message>
            </IonItem>
          ))}
        </IonList>

        {/* Input Message Box */}
        <Sticky position="bottom">
          <MessageInput onSubmit={onInputSubmit} submitOnEnter={true}></MessageInput>
        </Sticky>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
