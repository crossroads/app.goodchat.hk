import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("home.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
