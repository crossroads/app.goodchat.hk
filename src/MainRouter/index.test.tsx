import React from "react";
import { render } from "@testing-library/react";
import MainRouter from ".";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

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
});
