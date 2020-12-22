import React from "react";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import { Route } from "react-router";
import { IonRouterOutlet } from "@ionic/react";

const MainTabs = () => (
  <IonRouterOutlet>
    <Route exact path="/offers">
      <Offers />
    </Route>
    <Route exact path="/home">
      <Home />
    </Route>
  </IonRouterOutlet>
);

export default MainTabs;
