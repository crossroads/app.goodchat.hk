import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/authenticate");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleClick}>Go to authenticate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
