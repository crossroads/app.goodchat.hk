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
import useAsync from "hooks/useAsync";
import { useHistory, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

interface LocationState {
  from: string;
}

const Login: React.FC = () => {
  const { t } = useTranslation();

  const history = useHistory();
  const location = useLocation<LocationState | undefined>();
  const [phoneInput, setPhoneInput] = useState("");
  const [, error, , execute] = useAsync(request2faAndNavigate);

  async function request2faAndNavigate(mobile: string) {
    await AuthenticationService.sendPin(mobile);
    if (location.state) {
      history.push("/authenticate", { from: location.state.from });
    } else {
      history.push("/authenticate");
    }
  }

  const handleClick = () => {
    const mobile = `+852${phoneInput}`;
    execute(mobile);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("login.title")}</IonTitle>
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
            {error.message}
          </div>
        )}
        <IonButton disabled={phoneInput.length < 8} onClick={handleClick}>
          {t("login.pinButton")}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
