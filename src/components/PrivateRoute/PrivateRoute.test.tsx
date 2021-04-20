import React from "react";
import { cleanup, render } from "@testing-library/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { Router, Redirect as MockRedirect } from "react-router";
import { createMemoryHistory } from "history";
import { ApolloProvider } from "@apollo/client";
import createHasuraClient from "lib/HasuraClient/createHasuraClient";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  Redirect: jest.fn(() => null),
}));

const renderComponent = (initialPath: string, initialAuthState = false) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return {
    history,
    ...render(
      <AuthProvider initialAuthState={initialAuthState}>
        <ApolloProvider client={createHasuraClient()}>
          <Router history={history}>
            <PrivateRoute path={["/home", "/offers"]} />
          </Router>
        </ApolloProvider>
      </AuthProvider>
    ),
  };
};

afterEach(() => jest.clearAllMocks());

test("redirects unauthenticated user to /login", () => {
  renderComponent("/home");

  expect(MockRedirect).toHaveBeenCalledWith(
    { to: expect.objectContaining({ pathname: "/login" }) },
    {}
  );
  expect(MockRedirect).toHaveBeenCalledTimes(1);
});

test("passes origin of redirection in location state on redirection", () => {
  renderComponent("/home");

  expect(MockRedirect).toHaveBeenCalledWith(
    { to: expect.objectContaining({ state: { from: "/home" } }) },
    {}
  );

  cleanup();
  jest.clearAllMocks();

  renderComponent("/offers");

  expect(MockRedirect).toHaveBeenCalledWith(
    { to: expect.objectContaining({ state: { from: "/offers" } }) },
    {}
  );
  expect(MockRedirect).toHaveBeenCalledTimes(1);
});

test("allows authenticated user to proceed to page", () => {
  const { history } = renderComponent("/home", true);
  expect(history.location.pathname).toBe("/home");
});
