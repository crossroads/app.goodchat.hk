import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "pages/Login/Login";
import Authenticate from "pages/Authenticate/Authenticate";
import useAuth from "hooks/useAuth/useAuth";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import MainTabs from "components/MainTabs/MainTabs";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/authenticate">
        <Authenticate />
      </Route>
      <PrivateRoute exact path={["/home", "/offers", "/donors"]}>
        <MainTabs />
      </PrivateRoute>
      <Redirect to={isAuthenticated ? "/home" : "/login"} />
    </Switch>
  );
};

export default MainRouter;
