import { useContext } from "react";
import AuthContext from "context/AuthContext";

export interface Auth {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: () => void;
  logout: () => void;
}
const useAuth = (): Auth => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
