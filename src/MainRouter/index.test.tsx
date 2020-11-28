import React from "react";
import { render, screen } from "@testing-library/react";
import MainRouter from ".";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router";

test("should render an IonRouterOutlet", () => {
  render(<MainRouter />, { wrapper: MemoryRouter });

  expect(screen.getByTestId("ion-router-outlet")).toBeInTheDocument();
});

describe("User visits /home", () => {
  it("should take user to Home page with /home as the URL", () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });
    render(
      <Router history={history}>
        <MainRouter />
      </Router>
    );

    expect(history.location.pathname).toEqual("/home");
    expect(screen.getByTestId(/home/i)).toBeInTheDocument();
  });
});

describe("User visits /login", () => {
  it("should take user to Login page with /login as the URL", () => {
    const history = createMemoryHistory({ initialEntries: ["/login"] });
    render(
      <Router history={history}>
        <MainRouter />
      </Router>
    );

    expect(history.location.pathname).toEqual("/login");
    expect(screen.getByTestId(/login/i)).toBeInTheDocument();
  });
});
