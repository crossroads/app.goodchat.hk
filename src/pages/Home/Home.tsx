import {
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage title="home">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <IonButton>Log out</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
