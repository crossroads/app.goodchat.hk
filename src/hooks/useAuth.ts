import { useContext } from "react";
import AuthContext from "context/AuthContext";

export interface Auth {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const useAuth = (): Auth => useContext(AuthContext);

export default useAuth;
