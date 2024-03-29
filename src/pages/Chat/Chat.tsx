import { MessageInput, MessageInputCallback } from 'components/Chat/MessageInput'
import { AuthorType, ConversationType } from "typings/goodchat"
import { WrappedMessage, useMessages } from "hooks/useMessages"
import React, { useRef, useState } from "react"
import { useLayoutTrigger } from 'hooks/useLayoutTrigger'
import { useOnceContentRendered } from "hooks/useMutation"
import { useTranslation } from "react-i18next"
import useTypingActivity from 'hooks/useTypingActivity'
import { MessageFooter } from 'components/Chat/MessageFooter'
import { MessageBody } from 'components/Chat/MessageBody'
import { timeString } from "lib/utils/strings"
import { TFunction } from "i18next";
import { useParams } from "react-router"
import { Message } from 'components/Chat/Message'
import { Sticky } from 'components/Layout/Sticky'
import { style } from 'typestyle'
import {
  ConversationDetailsQuery,
  useConversationDetailsQuery,
} from "../../generated/graphql";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";

// ---------------------------------
// ~ TYPES
// ---------------------------------


type ChatPageParams = {
  conversationId: string;
};


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

const getMessageTime = (message: WrappedMessage) => {
  return timeString(new Date(message.timestamp));
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

const Chat: React.FC = () => {
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);
  const { conversationId } = useParams<ChatPageParams>();
  const ionContent = useRef<HTMLIonContentElement>(null);
  const ionList = useRef<HTMLIonListElement>(null);
  const { t } = useTranslation();

  // ---------------------------------
  // ~ LAYOUT EFFECTS
  // ---------------------------------

  const [triggerScroll] = useLayoutTrigger(() => {
    if (ionContent.current?.scrollToBottom) {
      ionContent.current.scrollToBottom(250);
    }
  })

  useOnceContentRendered(ionList, triggerScroll);

  // ---------------------------------
  // ~ DATA
  // ---------------------------------

  const {
    messages,
    createMessage,
    loadMore,
    error
  } = useMessages({
    conversationId: Number(conversationId),
    onComplete: () => setDisableInfiniteScroll(true),
    onNewMessage: () => triggerScroll()
  })

  const { data: details } = useConversationDetailsQuery({
    variables: {
      conversationId: Number(conversationId),
    },
  });

  // ---------------------------------
  // ~ PAGINATION
  // ---------------------------------

  const nextPage = async ($event: CustomEvent<void>) => {
    try {
      await loadMore();
    } finally {
      ($event.target as HTMLIonInfiniteScrollElement).complete();
    }
  };

  // ---------------------------------
  // ~ EVENT HANDLERS
  // ---------------------------------

  const onInputSubmit : MessageInputCallback = async ({ content, clear }) => {
    clear();
    createMessage(content);
  }

  const type = useTypingActivity(Number(conversationId))

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

      {
        /* Error Banner */
        error && (
          <IonItem color="danger">
            <span className="ion-margin"> { t('error.generic') }</span>
            <IonButton
              fill="outline"
              color="dark"
              onClick={() => window.location.reload()}
            >{ t('error.actions.reload') }</IonButton>
          </IonItem>
        )
      }

      {/* Main Content */}
      <IonContent ref={ionContent}>

        {/* Infinite Scroll Spinner  */}
        <IonInfiniteScroll threshold="50%" position="top"
          disabled={disableInfiniteScroll}
          onIonInfinite={nextPage}
        >
          <IonInfiniteScrollContent loadingSpinner="circles"></IonInfiniteScrollContent>
        </IonInfiniteScroll>

        <IonList ref={ionList}>

          {/* List of messages */}
          {messages.map((m) => {
            const side = m.record?.authorType === AuthorType.CUSTOMER ? "start" : "end"
            const footer = m.status === 'saved' ? getMessageTime(m) : t(`chat.message.status.${m.status}`)
            const failed = m.status === 'failed';

            return (
              <IonItem key={m.uid} lines={"none"}>
                <Message slot={side}>
                  <MessageBody content={m.content}></MessageBody>
                  <MessageFooter text={footer} color={failed ? 'danger' : 'light'}></MessageFooter>
                </Message>
              </IonItem>
            )
          })}
        </IonList>

        {/* Input Message Box */}
        <Sticky position="bottom" zIndex={9999}>
          <MessageInput
            onSubmit={onInputSubmit}
            submitOnEnter={true}
            onChange={type}
          />
        </Sticky>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
