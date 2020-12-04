import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login/Login";
import useAuth from "../../hooks/useAuth";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        {isAuthenticated ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/">
        <Redirect to={isAuthenticated ? "/home" : "/login"} />
      </Route>
      <Redirect to={isAuthenticated ? "/home" : "/login"} />
    </Switch>
  );
};

export default MainRouter;
