import React, { useEffect, useRef, useState } from "react"
import { AuthorType, ConversationType } from "typings/goodchat"
import { MessageFooter } from 'components/Chat/MessageFooter'
import { MessageBody } from 'components/Chat/MessageBody'
import { Message } from 'components/Chat/Message'
import { timeString } from "lib/utils/strings"
import { useParams } from "react-router"
import useAuth from "hooks/useAuth/useAuth"
import uniqBy from 'lodash/sortedUniqBy'
import sortBy from 'lodash/sortBy'
import {
  ConversationMessagesQuery,
  ConversationDetailsQuery,
  useConversationMessagesQuery,
  useConversationDetailsQuery } from "../../generated/graphql";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonList,
  IonItem,
  IonTitle,
  IonToolbar,
  IonContent
} from "@ionic/react";

// ---------------------------------
// ~ TYPES
// ---------------------------------

type Definite<T> = Exclude<T, null | undefined>

type ChatPageParams = {
  conversationId: string
}

type MessageRecord = Definite<ConversationMessagesQuery['conversation']>['messages'][0]

// ---------------------------------
// ~ UTILS
// ---------------------------------

const getChatTitle = (details? : ConversationDetailsQuery) => {
  const conversation = details?.conversation

  if (!conversation) return '';

  if (conversation?.type === ConversationType.Customer) {
    return `${conversation.customer?.displayName || 'Anonymous'}`
  }

  return `${conversation?.staffs.length} members`
}

const getMessageTime = (message: MessageRecord) => {
  return timeString(new Date(message.createdAt));
}


// ---------------------------------
// ~ CHAT
// ---------------------------------

const PAGE_SIZE = 25;

const Chat: React.FC = () => {
  const { logout }              = useAuth();
  const { conversationId }      = useParams<ChatPageParams>();
  const [page, setPage]         = useState(0);
  const ionContent              = useRef<HTMLIonContentElement>(null);
  const [messages, setMessages] = useState<MessageRecord[]>([]);

  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);

  // --- Helpers

  const variables = (pageNumber : number) => ({
    conversationId: Number(conversationId),
    limit: PAGE_SIZE,
    offset: pageNumber * PAGE_SIZE
  })

  const addMessages = (newMessages?: MessageRecord[]) => {
    if (!newMessages || newMessages.length === 0) return;

    setMessages(
      uniqBy(
        sortBy([
          ...messages,
          ...(newMessages || [])
        ],
        ['createdAt'],
        ['desc']),
        'id'
      )
    );
  }

  const onPageLoaded = (pageData: ConversationMessagesQuery, ...rest : any[]) => {
    addMessages(pageData?.conversation?.messages);
    setPage(page + 1)
  }

  // --- Data Fetching

  const { fetchMore, error } = useConversationMessagesQuery({
    variables: {
      offset: 0,
      limit: PAGE_SIZE,
      conversationId: Number(conversationId),
    },
    onCompleted: onPageLoaded,
  })

  const { data : details } = useConversationDetailsQuery({
    variables: {
      conversationId: Number(conversationId)
    }
  })

  const nextPage = ($event: CustomEvent<void>) => {
    fetchMore({
      variables: variables(page),
      updateQuery(prev, { fetchMoreResult }) {

        if (!fetchMoreResult?.conversation?.messages.length) {
          //
          // We've reached the end, disable the scroll
          //
          setDisableInfiniteScroll(true)
          return prev;
        }

        onPageLoaded(fetchMoreResult);

        // Toggle the spinner off
        ($event.target as HTMLIonInfiniteScrollElement).complete();

        return fetchMoreResult;
      }
    })
  }

  useEffect(() => {
    if (page <= 1) {
      // On the first page load, we start at the bottom of the list
      if (ionContent.current?.scrollToBottom) {
        ionContent.current.scrollToBottom();
      }
    }
  }, [page])

  // @TODO: Error messages

  return (
    <IonPage>

      {/* Page Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/chats" />
          </IonButtons>
          <IonTitle>
            { getChatTitle(details) }
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Main Content */}
      <IonContent ref={ionContent}>

        {/* Infinite Scroll Spinner  */}
        <IonInfiniteScroll threshold="100px" position="top"
          disabled={disableInfiniteScroll}
          onIonInfinite={nextPage}>
          <IonInfiniteScrollContent loadingSpinner="circles"></IonInfiniteScrollContent>
        </IonInfiniteScroll>

        {/* List of messages */}
        <IonList>
          {
            messages.map(m => (
              <IonItem key={m.id} lines={'none'}>
                <Message slot={m.authorType === AuthorType.CUSTOMER ? 'start' : 'end'}>
                  <MessageBody content={m.content}></MessageBody>
                  <MessageFooter text={getMessageTime(m)} ></MessageFooter>
                </Message>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
