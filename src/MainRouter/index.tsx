import { IonRouterOutlet } from "@ionic/react";
import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import AuthContext from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <IonRouterOutlet data-testid="ion-router-outlet">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        {isAuthenticated ? <Home /> : <Redirect to="/login" />}
      </Route>
    </IonRouterOutlet>
  );
};

export default MainRouter;
