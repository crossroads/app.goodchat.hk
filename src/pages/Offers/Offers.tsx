import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useAuth from "hooks/useAuth/useAuth";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("offers.title")}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={logout}>{t("header.logout")}</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Offers;
