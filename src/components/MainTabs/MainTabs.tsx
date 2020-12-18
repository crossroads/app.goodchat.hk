import React from "react";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import { Route } from "react-router";

import { IonRouterOutlet, IonTabBar, IonTabs } from "@ionic/react";

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
    <IonTabBar></IonTabBar>
  </IonTabs>
);

export default MainTabs;
