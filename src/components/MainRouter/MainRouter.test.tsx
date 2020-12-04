import React from "react";
import { render } from "@testing-library/react";
import MainRouter from "./MainRouter";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import AuthProvider from "../../components/AuthProvider";

const renderComponent = (initialAuthState: boolean) => (
  initialPath: string
) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return {
    history,
    ...render(
      <AuthProvider initialAuthState={initialAuthState}>
        <Router history={history}>
          <MainRouter />
        </Router>
      </AuthProvider>
    ),
  };
};

// TODO extend jest matchers instead
const expectToBeOnPage = (
  container: HTMLElement,
  myPath: string,
  expectedPage: string
) => {
  const expectedPath = `/${expectedPage}`;
  expect(myPath).toEqual(expectedPath);
  expect(container.querySelector(".ion-page")).toHaveAttribute(
    "title",
    expectedPage
  );
};

describe("Unauthenticated User", () => {
  const renderUnauthenticatedComponent = renderComponent(false);

  [
    { initialPath: "/home", expectedPage: "login" },
    { initialPath: "/login", expectedPage: "login" },
    { initialPath: "/", expectedPage: "login" },
    { initialPath: "/bad-route", expectedPage: "login" },
  ].map(({ initialPath, expectedPage }) => {
    // TODO message to distinguish between normal routing and redirection
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, () => {
      const { container, history } = renderUnauthenticatedComponent(
        initialPath
      );
      expectToBeOnPage(container, history.location.pathname, expectedPage);
    });
  });
});

describe("Authenticated User", () => {
  const renderAuthenticatedComponent = renderComponent(true);

  [
    { initialPath: "/home", expectedPage: "home" },
    { initialPath: "/login", expectedPage: "login" },
    { initialPath: "/", expectedPage: "home" },
  ].map(({ initialPath, expectedPage }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, () => {
      const { container, history } = renderAuthenticatedComponent(initialPath);
      expectToBeOnPage(container, history.location.pathname, expectedPage);
    });
  });
});
