import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

const MainRouter: React.FC = () => (
  <IonRouterOutlet data-testid="ion-router-outlet">
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
  </IonRouterOutlet>
);

export default MainRouter;
