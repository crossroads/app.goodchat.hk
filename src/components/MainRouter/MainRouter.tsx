import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import useAuth from "hooks/useAuth";
import PrivateRoute from "components/PrivateRoute";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path="/home">
        <Home />
      </PrivateRoute>
      <Redirect to={isAuthenticated ? "/home" : "/login"} />
    </Switch>
  );
};

export default MainRouter;
