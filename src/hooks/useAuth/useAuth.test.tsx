import React from "react";
import useAuth, { Auth } from "hooks/useAuth/useAuth";
import { render, cleanup, act } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";

const AUTHENTICATED = "authenticated";

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

describe("login", () => {
  afterEach(() => window.localStorage.removeItem(AUTHENTICATED));

  it("should set auth state to true", () => {
    const auth = setup(AuthProvider);

    act(() => auth.login());

    expect(auth.isAuthenticated).toBe(true);
  });

  it("should set auth state in localStorage", () => {
    const auth = setup(AuthProvider);

    act(() => auth.login());

    expect(window.localStorage.getItem(AUTHENTICATED)).toBeTruthy();
  });
});

describe("logout", () => {
  afterEach(() => window.localStorage.removeItem(AUTHENTICATED));

  it("should set auth state to false", () => {
    const auth = setup(AuthenticatedAuthProvider);

    act(() => auth.logout());

    expect(auth.isAuthenticated).toBe(false);
  });

  it("should remove auth key from localStorage", () => {
    const auth = setup(AuthProvider);

    act(() => auth.login());

    expect(window.localStorage.getItem(AUTHENTICATED)).toBeTruthy();

    act(() => auth.logout());

    expect(window.localStorage.getItem(AUTHENTICATED)).toBeNull();
  });
});
