import { gql, useQuery } from "@apollo/client";
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
  Customer,
  Message,
  useCustomerConversationsListQuery,
} from "generated/graphql";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";

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
    customer: Pick<Customer, "displayName">;
    messages: Pick<Message, "content">[];
  };
}
const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
}) => {
  return (
    <IonItem className="conversation-item">
      <IonLabel>
        <h2>{conversation.customer!.displayName}</h2>
        <MessagePreview message={conversation.messages[0]} />
      </IonLabel>
    </IonItem>
  );
};

const invalidQuery = gql`
  query CustomerConversationsList {
    conversations(type: CUSTOMER) {
      id
      customer {
        displayName
      }
      messages(limit: 1) {
        content
      }
    }
  }
`;

const Donors: React.FC = () => {
  const { logout } = useAuth();
  const { data, error } = useCustomerConversationsListQuery();

  // const { data, error } = useQuery(invalidQuery);

  console.dir(error);
  console.dir("network Error?", error?.networkError);

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
              <ConversationItem
                key={conversation.id}
                conversation={{
                  // We know customer exists because we queried
                  // by conversation type customer in the first place
                  customer: conversation.customer!,
                  messages: conversation.messages,
                }}
              />
            ))}
          </IonList>
        )}

        {error && error.networkError && (
          <div role="alert" style={{ color: "var(--ion-color-danger)" }}>
            Failed to fetch
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Donors;
