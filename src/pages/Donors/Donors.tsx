import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useConversationsListQuery } from "generated/graphql";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";

const Donors: React.FC = () => {
  const { logout } = useAuth();
  const { data } = useConversationsListQuery();

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
        {(data?.conversations ?? []).map((conversation) => (
          <IonItem key={conversation?.id}>
            {conversation?.customer?.displayName}
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Donors;
