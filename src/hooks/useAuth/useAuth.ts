import { useContext } from "react";
import AuthContext from "context/AuthContext";

export interface Auth {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  login: () => void;
}
const useAuth = (): Auth => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const login = () => {
    setIsAuthenticated(true);
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
    login,
  };
};

export default useAuth;
