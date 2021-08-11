import React, { useState } from "react";
import AuthContext from "context/AuthContext";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
interface Props {
  initialAuthState?: boolean;
}
const AuthProvider: React.FC<Props> = ({ children, initialAuthState }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => initialAuthState ?? AuthenticationService.isAuthenticated()
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
