import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { GC_API_TOKEN } from "config/localStorageKeys";

export interface Auth {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
const useAuth = (): Auth => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem(GC_API_TOKEN, "true");
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
