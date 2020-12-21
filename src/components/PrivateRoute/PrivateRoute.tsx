import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import useAuth from "hooks/useAuth/useAuth";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to={{ pathname: "/login" }} />}
    </Route>
  );
};

export default PrivateRoute;
