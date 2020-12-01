import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  return (
    <IonPage data-testid="login">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Login;
