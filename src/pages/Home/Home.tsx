import {
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import useAuth from "hooks/useAuth/useAuth";

const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <IonPage title="home">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logout}>Log out</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
