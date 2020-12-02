import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Login: React.FC = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

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
