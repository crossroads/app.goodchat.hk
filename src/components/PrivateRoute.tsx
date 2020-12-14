import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "hooks/useAuth/useAuth";

interface RestProps {
  exact: boolean;
  path: string;
}
const PrivateRoute: React.FC<RestProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
