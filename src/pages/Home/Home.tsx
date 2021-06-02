import {
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import useAuth from "hooks/useAuth/useAuth";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("home.title")}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logout}>{t("header.logout")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
