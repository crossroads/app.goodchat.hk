import React, { useEffect } from "react";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import { Route } from "react-router";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { home, listOutline } from "ionicons/icons";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import useAsync from "hooks/useAsync";

const MainTabs = () => {
  const [, , , connectToHasura] = useAsync(
    AuthenticationService.connectToHasura
  );

  useEffect(() => {
    connectToHasura();
  }, []);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/:tab(offers)">
          <Offers />
        </Route>
        <Route exact path="/:tab(home)">
          <Home />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="offers" href="/offers">
          <IonIcon icon={listOutline} />
          <IonLabel>Offers</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
