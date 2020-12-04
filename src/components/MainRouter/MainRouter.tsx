import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login/Login";
import useAuth from "../../hooks/useAuth";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/home">
        {isAuthenticated ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Redirect to={isAuthenticated ? "/home" : "/login"} />
    </Switch>
  );
};

export default MainRouter;
