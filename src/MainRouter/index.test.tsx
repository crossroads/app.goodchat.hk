import React from "react";
import { render, screen } from "@testing-library/react";
import MainRouter from ".";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

describe("User visits /home", () => {
  it("should take user to Home page with /home as the URL", () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });
    render(
      <Router history={history}>
        <MainRouter />
      </Router>
    );

    expect(history.location.pathname).toEqual("/home");
    expect(screen.getByTestId(/home/i));
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
    expect(screen.getByTestId(/login/i));
  });
});
