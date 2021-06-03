import React, { useEffect, useRef, useState } from "react";
import { AuthorType, ConversationType } from "typings/goodchat";
import { MessageFooter } from "components/Chat/MessageFooter";
import { MessageBody } from "components/Chat/MessageBody";
import { Message } from "components/Chat/Message";
import { timeString } from "lib/utils/strings";
import { useParams } from "react-router";
import uniqBy from "lodash/sortedUniqBy";
import sortBy from "lodash/sortBy";
import {
  ConversationMessagesQuery,
  ConversationDetailsQuery,
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
};

// ---------------------------------
// ~ CHAT
// ---------------------------------

const PAGE_SIZE = 25;

const Chat: React.FC = () => {
  const { conversationId } = useParams<ChatPageParams>();
  const [page, setPage] = useState(0);
  const ionContent = useRef<HTMLIonContentElement>(null);
  const [requireScroll, setRequireScroll] = useState(false);
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);
  const [messages, setMessages] = useState<MessageRecord[]>([]);
  const { t } = useTranslation();

  // --- Helpers

  const variables = (pageNumber: number) => ({
    conversationId: Number(conversationId),
    limit: PAGE_SIZE,
    offset: pageNumber * PAGE_SIZE,
  });

  const scrollToBottom = () => {
    if (ionContent.current?.scrollToBottom) {
      ionContent.current.scrollToBottom();
    }
  };

  const addMessages = (newMessages?: MessageRecord[]) => {
    if (!newMessages || newMessages.length === 0) return;

    //
    // @todo: improve to avoid flickering
    //

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

  // --- Data Fetching

  const { fetchMore, error } = useConversationMessagesQuery({
    variables: {
      offset: 0,
      limit: PAGE_SIZE,
      conversationId: Number(conversationId),
    },
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

  const nextPage = ($event: CustomEvent<void>) => {
    fetchMore({
      variables: variables(page),
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

  // @TODO: Error messages
  return (
    <IonPage>
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
        <IonInfiniteScroll
          threshold="100%"
          position="top"
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
      </IonContent>
    </IonPage>
  );
};

export default Chat;
