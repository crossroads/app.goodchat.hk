import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import useAuth from "../../hooks/useAuth";

const Login: React.FC = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <IonPage title="login">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={handleLogin}>Log in</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
