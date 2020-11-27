import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import Home from "../pages/Home";

const MainRouter: React.FC = () => (
  <IonRouterOutlet data-testid="main-router-outlet">
    <Home />
  </IonRouterOutlet>
);

export default MainRouter;
