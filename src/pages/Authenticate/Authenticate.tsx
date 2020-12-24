import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";
import { useHistory } from "react-router";

const Authenticate: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();

  const handleClick = () => {
    login();
    history.replace("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Authenticate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleClick}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Authenticate;
