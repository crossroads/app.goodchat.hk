import { 
  IonPage, 
  IonHeader, IonToolbar, 
  IonTitle, 
  IonButton, 
  IonContent, 
  IonSelect, 
  IonSelectOption,
  IonItem,
  IonLabel
} from "@ionic/react";
import useAuth from "hooks/useAuth/useAuth";
import React from "react";
import { useTranslation } from "react-i18next";

const Menu: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { logout } = useAuth()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("menu.title")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>{t("menu.selectLang")}</IonLabel>
          <IonSelect 
            value={i18n.language}
            onIonChange={(e) => i18n.changeLanguage(e.detail.value)}
          >
            <IonSelectOption value='en'>English</IonSelectOption>
            <IonSelectOption value='tc'>中文</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton onClick={logout}>
          {t("menu.logout")}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Menu;