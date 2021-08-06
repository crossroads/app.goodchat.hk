import React from "react";
import { useTranslation } from "react-i18next";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBadge
} from "@ionic/react";
import {
  ConversationType,
  Message
} from "../../generated/graphql";
import { useConversations, ConversationRecord } from '../../hooks/useConversations'

interface MessagePreview {
  message: Pick<Message, "content"> | undefined;
}
const MessagePreview: React.FC<MessagePreview> = ({ message }) => {
  if (message) {
    const contentType = message.content.type;
    if (contentType === "text") {
      return <p>{message.content.text}</p>;
    }

    return <p>{`Sent ${contentType}`}</p>;
  }
  return null;
};

interface ConversationItemProps {
  conversation: ConversationRecord
}
const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
}) => {
  const unreadCount = conversation._computed.unreadMessageCount;

  return (
    <IonItem
      className="conversation-item"
      button
      routerLink={`/chats/${conversation.id}`}
    >
      <IonLabel>
        <h2>{conversation.customer?.displayName}</h2>
        <MessagePreview message={conversation.messages[0]} />
      </IonLabel>
      {
        unreadCount > 0 && <IonBadge slot="end" color="danger">{unreadCount}</IonBadge>
      }
    </IonItem>
  );
};

const Chats: React.FC = () => {
  const { conversations } = useConversations({
    type: ConversationType.Customer,
    pageSize: 100
  });
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("chats.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {
          <IonList>
            {conversations.map((conversation) => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
              />
            ))}
          </IonList>
        }
      </IonContent>
    </IonPage>
  );
};

export default Chats;
