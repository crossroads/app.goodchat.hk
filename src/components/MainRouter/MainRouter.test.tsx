import React from "react";
import { render, screen } from "@testing-library/react";
import MainRouter from "./MainRouter";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router";
import AuthContext from "../../context/AuthContext";

test("should render an IonRouterOutlet", () => {
  render(<MainRouter />, { wrapper: MemoryRouter });

  expect(screen.getByTestId("ion-router-outlet")).toBeInTheDocument();
});

describe("Unauthenticated User", () => {
  describe("visits /home", () => {
    it("should redirect user to Login page with /login as the URL", () => {
      const history = createMemoryHistory({ initialEntries: ["/home"] });
      const { container } = render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </AuthContext.Provider>
      );

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
      const { container } = render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </AuthContext.Provider>
      );

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
      const { container } = render(
        <AuthContext.Provider value={{ isAuthenticated: false }}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </AuthContext.Provider>
      );

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
      const { container } = render(
        <AuthContext.Provider value={{ isAuthenticated: true }}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </AuthContext.Provider>
      );

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
      const { container } = render(
        <AuthContext.Provider value={{ isAuthenticated: true }}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </AuthContext.Provider>
      );

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
      const { container } = render(
        <AuthContext.Provider value={{ isAuthenticated: true }}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </AuthContext.Provider>
      );

      expect(history.location.pathname).toEqual("/home");
      expect(container.querySelector(".ion-page")).toHaveAttribute(
        "title",
        "home"
      );
    });
  });
});
