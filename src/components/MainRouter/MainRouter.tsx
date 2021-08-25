import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import Login from "pages/Login/Login";
import Authenticate from "pages/Authenticate/Authenticate";
import useAuth from "hooks/useAuth/useAuth";
import useMediator from "hooks/useMediator";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import MainTabs from "components/MainTabs/MainTabs";

const MainRouter: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  const history = useHistory();

  useMediator("graphQLError", (err) => {
    if (err?.extensions?.code === "UNAUTHENTICATED") {
      logout();
      history.push("/login");
    }
  });

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/authenticate">
        <Authenticate />
      </Route>
      <PrivateRoute exact path={["/home", "/menu"]}>
        <MainTabs />
      </PrivateRoute>
      <PrivateRoute path={["/chats"]}>
        <MainTabs />
      </PrivateRoute>
      <Redirect to={isAuthenticated ? "/home" : "/login"} />
    </Switch>
  );
};

export default MainRouter;
