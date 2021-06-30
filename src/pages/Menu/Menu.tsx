import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from "@ionic/react";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";
import { useTranslation } from "react-i18next";

const Menu: React.FC = () => {
  const { t } = useTranslation()
  const { logout } = useAuth()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("menu.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={logout}>
          {t("menu.logout")}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Menu;