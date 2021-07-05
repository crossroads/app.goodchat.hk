import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  Conversation,
  Customer,
  Message,
  useCustomerConversationsListQuery,
} from "../../generated/graphql";
import React from "react";
import { useTranslation } from "react-i18next";

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
  conversation: {
    id: Conversation["id"];
    customer: Pick<Customer, "displayName">;
    messages: Pick<Message, "content">[];
  };
}
const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
}) => {
  return (
    <IonItem
      className="conversation-item"
      button
      routerLink={`/chats/${conversation.id}`}
    >
      <IonLabel>
        <h2>{conversation.customer.displayName}</h2>
        <MessagePreview message={conversation.messages[0]} />
      </IonLabel>
    </IonItem>
  );
};

const Chats: React.FC = () => {
  const { data } = useCustomerConversationsListQuery();
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("chats.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data && (
          <IonList>
            {data.conversations.map((conversation) => (
              <ConversationItem
                key={conversation.id}
                conversation={{
                  // We know customer exists because we queried
                  // by conversation type customer in the first place
                  id: conversation.id,
                  customer: conversation.customer!,
                  messages: conversation.messages,
                }}
              />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Chats;
