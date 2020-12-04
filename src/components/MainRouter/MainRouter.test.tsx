import React from "react";
import { render } from "@testing-library/react";
import MainRouter from "./MainRouter";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router";
import AuthProvider from "../../components/AuthProvider";

const renderComponent = (initialAuthState: boolean, history: MemoryHistory) => {
  return render(
    <AuthProvider initialAuthState={initialAuthState}>
      <Router history={history}>
        <MainRouter />
      </Router>
    </AuthProvider>
  );
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
  describe("visits /home", () => {
    it("should redirect user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/home"] });
      const { container } = renderComponent(false, history);

      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });

  describe("visits /login", () => {
    it("should take user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/login"] });
      const { container } = renderComponent(false, history);

      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });

  describe("visits /", () => {
    it("should take user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      const { container } = renderComponent(false, history);

      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });
});

describe("Authenticated User", () => {
  describe("visits /home", () => {
    it("should take user to Home page with /home as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/home"] });
      const { container } = renderComponent(true, history);

      expectToBeOnPage(container, history.location.pathname, "home");
    });
  });

  describe("visits /login", () => {
    it("should take user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/login"] });
      const { container } = renderComponent(true, history);

      expectToBeOnPage(container, history.location.pathname, "login");
    });
  });

  describe("visits /", () => {
    it("should take user to Home page with /home as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      const { container } = renderComponent(true, history);

      expectToBeOnPage(container, history.location.pathname, "home");
    });
  });
});
