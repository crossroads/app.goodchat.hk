import React, { useState } from "react";
import AuthContext from "context/AuthContext";
import { AUTHENTICATED } from "config/localStorageKeys";

export const computeAuthState = (initialAuthState: boolean) => {
  return Boolean(localStorage.getItem(AUTHENTICATED) ?? initialAuthState);
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
