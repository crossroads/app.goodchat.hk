import { useEffect, useState } from "react"
import { useAsync } from './useAsync'
import uniqBy from 'lodash/sortedUniqBy'
import {
  ConversationType,
  CustomerConversationsListQuery,
  useConversationsSubscription,
  useCustomerConversationsListQuery
} from "../generated/graphql";

// --------------------------------
// ~ HOOK TYPES
// --------------------------------

const DEFAULT_PAGE_SIZE = 25;

type Callback<T = void> = (arg: T) => any

export type ConversationRecord = CustomerConversationsListQuery["conversations"][0]

export type UseConversationsProps = {
  pageSize?: number
  lazy?: boolean
  onComplete?: Callback
  type?: ConversationType
}

// --------------------------------
// ~ HELPERS
// --------------------------------

const noop = () => {}

// --------------------------------
// ~ HOOK IMPLEMENTATION
// --------------------------------

export const useConversations = (props: UseConversationsProps) => {
  const {
    pageSize = DEFAULT_PAGE_SIZE,
    onComplete = noop,
    lazy = false,
    type
  } = props;

  // ---------------------------------
  // ~ STATE MANAGEMENT
  // ---------------------------------

  const [conversations, setConversations] = useState<ConversationRecord[]>([]);
  const [complete, setComplete] = useState(false);

  const addConversations = (newConversations?: ConversationRecord[]) => {
    if (!newConversations || newConversations.length === 0) return;

    setConversations((cvs) => {
      const localConversations = cvs.filter(({ id }) => {
        return newConversations.findIndex((c) => c.id === id) < 0;
      })

      return uniqBy(
        [
          ...localConversations,
          ...newConversations
        ].sort((m1, m2) => {
          return (
            new Date(m2.updatedAt).getTime() - new Date(m1.updatedAt).getTime()
          )
        }),
        "id"
      )
    })
  };

  // ---------------------------------
  // ~ DATA READ/WRITE
  // ---------------------------------

  const { refetch } = useCustomerConversationsListQuery({ skip: true });

  const { error: subscriptionError } = useConversationsSubscription({
    variables: { type },
    onSubscriptionData: ({ subscriptionData }) => {
      const conversation = subscriptionData.data?.conversationEvent?.conversation
      if (!conversation) return;
      addConversations([conversation]);
    }
  });

  // ---------------------------------
  // ~ HOOK API
  // ---------------------------------

  //
  // We expose a loadMore method allowing the caller to fetch another page of data
  //
  const [, error, loading, loadMore] = useAsync(async () => {
    const oldest = conversations.slice(-1)[0];
    const cursor = oldest?.id || 0;

    const { data } = await refetch({
      type: type,
      limit: pageSize,
      after: cursor,
    })

    const records = data?.conversations;

    if (Array.isArray(records)) {
      addConversations(records);

      // Notify last page was loaded
      if (!complete && records.length < pageSize) {
        setComplete(true);
        onComplete();
      }
    }
  })


  // ---------------------------------
  // ~ LIFECYCLE
  // ---------------------------------

  useEffect(() => {
    // Auto-trigger the first page load
    if (!lazy) { loadMore(); }
  }, [])

  return {
    loading,
    conversations,
    loadMore,
    complete,
    error: error || subscriptionError || null
  }
}

export default useConversations;
