import {
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import useAuth from "hooks/useAuth";

const Home: React.FC = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <IonPage title="home">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleLogout}>Log out</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
