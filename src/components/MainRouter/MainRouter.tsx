import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "pages/Login/Login";
import useAuth from "hooks/useAuth/useAuth";
import PrivateRoute from "components/PrivateRoute";
import MainTabs from "components/MainTabs/MainTabs";

const MainRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path={["/home", "/offers"]}>
        <MainTabs />
      </PrivateRoute>
      <Redirect to={isAuthenticated ? "/home" : "/login"} />
    </Switch>
  );
};

export default MainRouter;
