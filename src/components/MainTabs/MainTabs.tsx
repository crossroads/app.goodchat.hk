import React from "react";
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
import { home, listOutline, chatbubbleOutline } from "ionicons/icons";
import Donors from "pages/Donors/Donors";

const MainTabs = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/:tab(offers)">
        <Offers />
      </Route>
      <Route exact path="/:tab(home)">
        <Home />
      </Route>
      <Route exact path="/:tab(donors)">
        <Donors />
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
      <IonTabButton tab="donors" href="/donors">
        <IonIcon icon={chatbubbleOutline} />
        <IonLabel>Donors</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default MainTabs;
