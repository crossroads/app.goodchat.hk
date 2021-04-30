import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
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
  displayName: string;
  messages: Array<Maybe<{ __typename?: "Message" } & Pick<Message, "content">>>;
}
const ConversationItem: React.FC<ConversationItemProps> = ({
  displayName,
  messages,
}) => {
  return (
    <IonItem>
      <IonLabel>
        <h2>{displayName}</h2>
        <LatestMessagePreview messages={messages} />
      </IonLabel>
    </IonItem>
  );
};

const SkeletonBody: React.FC = () => (
  <>
    <IonList>
      <IonItem>
        <IonLabel>
          <h2>
            <IonSkeletonText animated={true} style={{ width: "40%" }} />
          </h2>
          <p>
            <IonSkeletonText animated={true} style={{ width: "60%" }} />
          </p>
        </IonLabel>
      </IonItem>
    </IonList>
    <IonList>
      <IonItem>
        <IonLabel>
          <h2>
            <IonSkeletonText animated={true} style={{ width: "40%" }} />
          </h2>
          <p>
            <IonSkeletonText animated={true} style={{ width: "60%" }} />
          </p>
        </IonLabel>
      </IonItem>
    </IonList>
  </>
);

const Donors: React.FC = () => {
  const { logout } = useAuth();
  const { data, loading } = useCustomerConversationsListQuery();

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
        {loading ? (
          <SkeletonBody />
        ) : data ? (
          <IonList>
            {data.conversations.map((conversation) => (
              <ConversationItem
                key={conversation.id}
                displayName={conversation.customer!.displayName}
                messages={conversation.messages}
              />
            ))}
          </IonList>
        ) : null}
      </IonContent>
    </IonPage>
  );
};

export default Donors;
