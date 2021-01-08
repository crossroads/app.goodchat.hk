import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

interface LocationState {
  from: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState | undefined>();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    if (location.state) {
      history.push("/authenticate", { from: location.state.from });
    } else {
      history.push("/authenticate");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>+852</IonLabel>
          <IonInput
            value={phoneNumber}
            onIonChange={(e) => setPhoneNumber(e.detail.value ?? "")}
            maxlength={8}
          />
        </IonItem>
        <IonButton onClick={handleClick}>Get 4-digit SMS code</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
