import React, { useState } from "react";
import AuthContext from "context/AuthContext";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

export const computeAuthState = (initialAuthState: boolean) => {
  return Boolean(AuthenticationService.isAuthenticated() ?? initialAuthState);
};
interface Props {
  initialAuthState?: boolean;
}
const AuthProvider: React.FC<Props> = ({
  children,
  initialAuthState = false,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    computeAuthState(initialAuthState)
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
