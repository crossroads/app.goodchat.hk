import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useAsync from "hooks/useAsync";
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
  const [twoFaInput, setTwoFaInput] = useState("");
  const [, error, , loginAndNavigate] = useAsync(async () => {
    await login(twoFaInput);
    if (location.state) {
      history.replace(location.state.from);
    } else {
      history.replace("/home");
    }
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Authenticate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Please input your 2fa code</IonLabel>
          <IonInput
            placeholder="XXXX"
            value={twoFaInput}
            maxlength={4}
            onIonChange={(e) => setTwoFaInput(e.detail.value ?? "")}
          />
        </IonItem>
        {error && (
          <div role="alert" style={{ color: "var(--ion-color-danger)" }}>
            {error.message}
          </div>
        )}
        <IonButton disabled={twoFaInput.length < 4} onClick={loginAndNavigate}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Authenticate;
