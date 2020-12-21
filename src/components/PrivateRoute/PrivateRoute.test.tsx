import React from "react";
import { render } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { Router, Redirect as MockRedirect } from "react-router";
import { createMemoryHistory } from "history";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  Redirect: jest.fn(() => null),
}));

test("redirects unauthenticated user to /login", () => {
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  render(
    <AuthProvider>
      <Router history={history}>
        <PrivateRoute path={["/home"]} />
      </Router>
    </AuthProvider>
  );

  expect(MockRedirect).toHaveBeenCalledWith({ to: "/login" }, {});
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
