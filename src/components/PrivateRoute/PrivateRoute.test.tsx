import React from "react";
import { cleanup, render } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { Router, Redirect as MockRedirect } from "react-router";
import { createMemoryHistory } from "history";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  Redirect: jest.fn(() => null),
}));

afterEach(() => jest.clearAllMocks());

test("redirects unauthenticated user to /login", () => {
  render(
    <AuthProvider>
      <Router history={createMemoryHistory({ initialEntries: ["/home"] })}>
        <PrivateRoute path={["/home"]} />
      </Router>
    </AuthProvider>
  );

  expect(MockRedirect).toHaveBeenCalledWith(
    { to: expect.objectContaining({ pathname: "/login" }) },
    {}
  );
  expect(MockRedirect).toHaveBeenCalledTimes(1);
});

test("passes origin of redirection in location state on redirection", () => {
  render(
    <AuthProvider>
      <Router history={createMemoryHistory({ initialEntries: ["/home"] })}>
        <PrivateRoute path={["/home"]} />
      </Router>
    </AuthProvider>
  );
  expect(MockRedirect).toHaveBeenCalledWith(
    { to: expect.objectContaining({ state: { from: "/home" } }) },
    {}
  );

  cleanup();
  jest.clearAllMocks();

  render(
    <AuthProvider>
      <Router history={createMemoryHistory({ initialEntries: ["/offers"] })}>
        <PrivateRoute path={["/offers"]} />
      </Router>
    </AuthProvider>
  );
  expect(MockRedirect).toHaveBeenCalledWith(
    { to: expect.objectContaining({ state: { from: "/offers" } }) },
    {}
  );
  expect(MockRedirect).toHaveBeenCalledTimes(1);
});

test("allows authenticated user to proceed to page", () => {
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  render(
    <AuthProvider initialAuthState={true}>
      <Router history={history}>
        <PrivateRoute path={["/home"]} />
      </Router>
    </AuthProvider>
  );

  expect(history.location.pathname).toBe("/home");
});
