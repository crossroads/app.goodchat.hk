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

  describe("visits /home", () => {
    it("should redirect user to Login page with /login as the URL", () => {
      const { container, history } = renderUnauthenticatedComponent("/home");
      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });

  describe("visits /login", () => {
    it("should take user to Login page with /login as the URL", () => {
      const { container, history } = renderUnauthenticatedComponent("/login");
      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });

  describe("visits /", () => {
    it("should take user to Login page with /login as the URL", () => {
      const { container, history } = renderUnauthenticatedComponent("/");
      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });
});

describe("Authenticated User", () => {
  const renderAuthenticatedComponent = renderComponent(true);

  describe("visits /home", () => {
    it("should take user to Home page with /home as the URL", () => {
      const { container, history } = renderAuthenticatedComponent("/home");
      expectToBeOnPage(container, history.location.pathname, "home");
    });
  });

  describe("visits /login", () => {
    it("should take user to Login page with /login as the URL", () => {
      const { container, history } = renderAuthenticatedComponent("/login");
      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });

  describe("visits /", () => {
    it("should take user to Home page with /home as the URL", () => {
      const { container, history } = renderAuthenticatedComponent("/");
      expectToBeOnPage(container, history.location.pathname, "home");
    });
  });
});
