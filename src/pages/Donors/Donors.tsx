import {
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";

const Donors: React.FC = () => {
  const { logout } = useAuth();

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
    </IonPage>
  );
};

export default Donors;
