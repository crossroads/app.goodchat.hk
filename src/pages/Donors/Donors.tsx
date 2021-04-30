import {
  IonButton,
  IonButtons,
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
  CustomerConversationsListQuery,
  Maybe,
  Message,
  useCustomerConversationsListQuery,
} from "generated/graphql";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";

interface LatestMessagePreviewProps {
  messages: Array<Maybe<{ __typename?: "Message" } & Pick<Message, "content">>>;
}
const LatestMessagePreview: React.FC<LatestMessagePreviewProps> = ({
  messages,
}) => {
  const latestMessage = messages[0];

  if (latestMessage) {
    const contentType = latestMessage.content.type;
    if (contentType === "text") {
      return <p>{latestMessage.content.text}</p>;
    }

    return <p>{`Sent ${contentType}`}</p>;
  }
  return null;
};

interface ConversationItemProps {
  conversation: Pick<
    CustomerConversationsListQuery["conversations"][0],
    "customer" | "messages"
  >;
}
const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
}) => {
  return (
    <IonItem>
      <IonLabel>
        <h2>{conversation.customer!.displayName}</h2>
        <LatestMessagePreview messages={conversation.messages} />
      </IonLabel>
    </IonItem>
  );
};

const Donors: React.FC = () => {
  const { logout } = useAuth();
  const { data } = useCustomerConversationsListQuery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Donors</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logout}>Log out</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data && (
          <IonList>
            {data.conversations.map((conversation) => (
              <ConversationItem conversation={conversation} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Donors;
