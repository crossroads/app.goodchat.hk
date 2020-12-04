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

describe("Unauthenticated User", () => {
  describe("visits /home", () => {
    it("should redirect user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/home"] });
      const { container } = renderComponent(false, history);

      expect(history.location.pathname).toEqual("/login");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "login"
      );
    });
  });

  describe("visits /login", () => {
    it("should take user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/login"] });
      const { container } = renderComponent(false, history);

      expect(history.location.pathname).toEqual("/login");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "login"
      );
    });
  });

  describe("visits /", () => {
    it("should take user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      const { container } = renderComponent(false, history);

      expect(history.location.pathname).toEqual("/login");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "login"
      );
    });
  });
});

describe("Authenticated User", () => {
  describe("visits /home", () => {
    it("should take user to Home page with /home as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/home"] });
      const { container } = renderComponent(true, history);

      expect(history.location.pathname).toEqual("/home");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "home"
      );
    });
  });

  describe("visits /login", () => {
    it("should take user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/login"] });
      const { container } = renderComponent(true, history);

      expect(history.location.pathname).toEqual("/login");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "login"
      );
    });
  });

  describe("visits /", () => {
    it("should take user to Home page with /home as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/"] });
      const { container } = renderComponent(true, history);

      expect(history.location.pathname).toEqual("/home");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "home"
      );
    });
  });
});
