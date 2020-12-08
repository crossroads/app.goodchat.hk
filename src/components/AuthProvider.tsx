import React, { useState } from "react";
import AuthContext from "context/AuthContext";

interface Props {
  initialAuthState?: boolean;
}
const AuthProvider: React.FC<Props> = ({
  children,
  initialAuthState = false,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
