import { useContext } from "react";
import AuthContext from "context/AuthContext";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import { useApolloClient } from "@apollo/client";

const useAuth = () => {
  const client = useApolloClient();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const login = async (pin: string) => {
    await AuthenticationService.authenticate(pin);
    setIsAuthenticated(true);
  };

  const logout = () => {
    AuthenticationService.logout(client);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export type Auth = ReturnType<typeof useAuth>;
export default useAuth;
