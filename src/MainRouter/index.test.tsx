import React from "react";
import { render, screen } from "@testing-library/react";
import MainRouter from ".";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router";

describe("User visits /home", () => {
  it("should take user to the appropriate URL", () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });
    render(
      <Router history={history}>
        <MainRouter />
      </Router>
    );

    expect(history.location.pathname).toEqual("/home");
  });

  it("should show the Home page", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <MainRouter />
      </MemoryRouter>
    );

    expect(screen.getByTestId(/home/i));
  });
});

describe("User visits /login", () => {
  it("should take user to the appropriate URL", () => {
    const history = createMemoryHistory({ initialEntries: ["/login"] });
    render(
      <Router history={history}>
        <MainRouter />
      </Router>
    );

    expect(history.location.pathname).toEqual("/login");
  });

  it("should show the Login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainRouter />
      </MemoryRouter>
    );

    expect(screen.getByTestId(/login/i));
  });
});
