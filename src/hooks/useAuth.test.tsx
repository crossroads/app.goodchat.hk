import React from "react";
import useAuth, { Auth } from "hooks/useAuth";
import { render, cleanup } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";

const setup = (Wrapper: React.FC) => {
  let auth: Auth | undefined;
  const TestComponent: React.FC = () => {
    auth = useAuth();
    return null;
  };

  render(<TestComponent />, { wrapper: Wrapper });

  return auth as Auth;
};

test("should return the correct authentication state", () => {
  let auth = setup(AuthProvider);

  expect(auth.isAuthenticated).toBe(false);

  cleanup();

  const AuthenticatedAuthProvider: React.FC = ({ children }) => (
    <AuthProvider initialAuthState={true}>{children}</AuthProvider>
  );
  auth = setup(AuthenticatedAuthProvider);

  expect(auth.isAuthenticated).toBe(true);
});

test("returns a state updater function", () => {
  const mockSetIsAuthenticated = jest.fn();
  const mockUseContext = jest.spyOn(React, "useContext").mockReturnValue({
    isAuthenticated: false,
    setIsAuthenticated: mockSetIsAuthenticated,
  });

  const auth = setup(AuthProvider);

  expect(auth.setIsAuthenticated).toBe(mockSetIsAuthenticated);

  mockUseContext.mockRestore();
});
