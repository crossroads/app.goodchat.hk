import React from "react";
import useAuth, { Auth } from "hooks/useAuth/useAuth";
import { render, cleanup, act } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { ApiError } from "lib/errors";
import client from "lib/client/client";

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
  let mockPost: jest.SpyInstance;
  beforeEach(() => {
    mockPost = jest.spyOn(client, "post").mockResolvedValue({
      jwt_token: "fdsafadfafs",
    });
  });
  afterEach(() => mockPost.mockRestore());

  it("should call auth/verify correctly", async () => {
    const auth = setup(AuthProvider);

    const pin = "1234";
    await act(() => auth.login(pin));

    expect(mockPost).toHaveBeenCalledTimes(1);
    expect(mockPost).toHaveBeenCalledWith("auth/verify", {
      pin,
      otp_auth_key: expect.any(String),
    });
  });

  describe("on successful response", () => {
    it("should set auth state to true", async () => {
      const auth = setup(AuthProvider);
      await act(() => auth.login("1234"));
      expect(auth.isAuthenticated).toBe(true);
    });
  });

  describe("on unsuccessful response", () => {
    const error = new ApiError({
      httpStatus: 401,
      type: "InvalidPinError",
      message: "Invalid SMS code.",
    });
    beforeEach(() => mockPost.mockRejectedValue(error));

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
  it("should set auth state to false", () => {
    const auth = setup(AuthenticatedAuthProvider);

    act(() => auth.logout());

    expect(auth.isAuthenticated).toBe(false);
  });
});
