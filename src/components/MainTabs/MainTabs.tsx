import React from "react";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import { Route } from "react-router";
import {
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";

const MainTabs = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/offers">
        <Offers />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="offers" href="/offers">
        <IonLabel>Offers</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default MainTabs;
