import React from "react";

interface ContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = React.createContext<ContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export default AuthContext;
