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
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

interface LocationState {
  from: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState | undefined>();
  const [phoneInput, setPhoneInput] = useState("");
  const [error, setError] = useState(null);

  const handleClick = async () => {
    const mobile = `+852${phoneInput}`;
    try {
      await AuthenticationService.sendPin({ mobile });
      if (location.state) {
        history.push("/authenticate", { from: location.state.from });
      } else {
        history.push("/authenticate");
      }
    } catch (e) {
      setError(e);
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
            value={phoneInput}
            onIonChange={(e) => setPhoneInput(e.detail.value ?? "")}
            maxlength={8}
          />
        </IonItem>
        {error && (
          <div role="alert" style={{ color: "var(--ion-color-danger)" }}>
            Something went wrong
          </div>
        )}
        <IonButton disabled={phoneInput.length < 8} onClick={handleClick}>
          Get 4-digit SMS code
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
