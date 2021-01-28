import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { GC_API_TOKEN } from "config/localStorageKeys";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

export interface Auth {
  isAuthenticated: boolean;
  login: (pin: string) => void;
  logout: () => void;
}
const useAuth = (): Auth => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const login = async (pin: string) => {
    await AuthenticationService.authenticate(pin);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(GC_API_TOKEN);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
