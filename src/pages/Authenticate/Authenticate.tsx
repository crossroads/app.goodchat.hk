import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Authenticate: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Authenticate</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Authenticate;
