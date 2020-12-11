import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { AUTHENTICATED } from "config/localStorageKeys";

export interface Auth {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
const useAuth = (): Auth => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem(AUTHENTICATED, "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTHENTICATED);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
