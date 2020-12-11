import React from "react";
import useAuth, { Auth } from "hooks/useAuth/useAuth";
import { render, cleanup, act } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";

const setup = (Wrapper: React.FC) => {
  let auth: Auth | {} = {};
  const TestComponent: React.FC = () => {
    Object.assign(auth, useAuth());
    return null;
  };

  render(<TestComponent />, { wrapper: Wrapper });

  return auth as Auth;
};

const AuthenticatedAuthProvider: React.FC = ({ children }) => (
  <AuthProvider initialAuthState={true}>{children}</AuthProvider>
);

test("should return the correct authentication state", () => {
  let auth = setup(AuthProvider);

  expect(auth.isAuthenticated).toBe(false);

  cleanup();

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

describe("login", () => {
  it("should set auth state to true", () => {
    const auth = setup(AuthProvider);

    act(() => auth.login());

    expect(auth.isAuthenticated).toBe(true);
  });
});

describe("logout", () => {
  it("should set auth state to false", () => {
    const auth = setup(AuthenticatedAuthProvider);

    act(() => auth.logout());

    expect(auth.isAuthenticated).toBe(false);
  });
});
