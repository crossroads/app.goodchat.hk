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
import useAuth from "hooks/useAuth/useAuth";

const Login: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    login();
    history.replace("/home");
  };

  return (
    <IonPage title="login">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
