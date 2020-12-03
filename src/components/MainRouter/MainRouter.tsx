import { IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login/Login";
import useAuth from "../../hooks/useAuth";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <IonRouterOutlet>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        {isAuthenticated ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/">
        <Redirect to={isAuthenticated ? "/home" : "/login"} />
      </Route>
    </IonRouterOutlet>
  );
};

export default MainRouter;
