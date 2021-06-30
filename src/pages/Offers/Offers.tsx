import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("offers.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Offers;
