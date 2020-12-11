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
import { AUTHENTICATED } from "config/localStorageKeys";

const Login: React.FC = () => {
  const { setIsAuthenticated } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    setIsAuthenticated(true);
    history.replace("/home");
    window.localStorage.setItem(AUTHENTICATED, "true");
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
