import React from "react";
import useAuth, { Auth } from "hooks/useAuth/useAuth";
import { render, cleanup, act } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

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
  let mockAuthenticate: jest.SpyInstance;
  beforeAll(() => {
    mockAuthenticate = jest
      .spyOn(AuthenticationService, "authenticate")
      .mockImplementation(async () => Promise.resolve());
  });
  afterAll(() => mockAuthenticate.mockRestore());

  it("should call AuthenticationService authenticate correctly", async () => {
    const auth = setup(AuthProvider);

    const pin = "1234";
    await act(() => auth.login(pin));

    expect(mockAuthenticate).toHaveBeenCalledTimes(1);
    expect(mockAuthenticate).toHaveBeenCalledWith(pin);
  });

  describe("on successful response", () => {
    it("should set auth state to true", async () => {
      const auth = setup(AuthProvider);
      await act(() => auth.login("1234"));
      expect(auth.isAuthenticated).toBe(true);
    });
  });

  describe("on unsuccessful response", () => {
    const error = new Error();
    beforeAll(() => {
      mockAuthenticate.mockRejectedValue(error);
    });
    afterAll(() => mockAuthenticate.mockReset());

    it("should just throw the error", async () => {
      const auth = setup(AuthProvider);
      return expect(auth.login("1234")).rejects.toThrow(error);
    });

    it("should NOT set auth state to true", async () => {
      const auth = setup(AuthProvider);

      expect.assertions(2);
      expect(auth.isAuthenticated).toBe(false);
      try {
        await act(() => auth.login("1234"));
      } catch (e) {
        expect(auth.isAuthenticated).toBe(false);
      }
    });
  });
});

describe("logout", () => {
  it("should call AuthService logout correctly", () => {
    const mockLogout = jest
      .spyOn(AuthenticationService, "logout")
      .mockImplementation(jest.fn());
    const auth = setup(AuthenticatedAuthProvider);

    act(() => auth.logout());

    expect(mockLogout).toHaveBeenCalledTimes(1);

    mockLogout.mockRestore();
  });

  it("should set auth state to false", () => {
    const auth = setup(AuthenticatedAuthProvider);

    act(() => auth.logout());

    expect(auth.isAuthenticated).toBe(false);
  });
});
