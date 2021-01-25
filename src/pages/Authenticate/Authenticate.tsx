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
import useAuth from "hooks/useAuth/useAuth";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

interface LocationState {
  from: string;
}

const Authenticate: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();
  const location = useLocation<LocationState | undefined>();
  const [twoFaCode, setTwoFaCode] = useState("");

  const handleClick = () => {
    login();
    if (location.state) {
      history.replace(location.state.from);
    } else {
      history.replace("/home");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Authenticate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Please input your 2fa code</IonLabel>
          <IonInput
            placeholder="XXXX"
            value={twoFaCode}
            onIonChange={(e) => setTwoFaCode(e.detail.value ?? "")}
          />
        </IonItem>
        <IonButton onClick={handleClick}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Authenticate;
