import React from "react";
import { render } from "@testing-library/react";
import MainRouter from ".";
import { IonReactMemoryRouter } from "@ionic/react-router";
import { createMemoryHistory } from "history";

describe("User visits /home", () => {
  it("should take user to the appropriate URL", () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });
    render(
      <IonReactMemoryRouter history={history}>
        <MainRouter />
      </IonReactMemoryRouter>
    );

    expect(history.location.pathname).toEqual("/home");
  });
});
