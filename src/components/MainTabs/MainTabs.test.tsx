import React from "react";
import { render } from "@testing-library/react";
import MainTabs from "components/MainTabs/MainTabs";
import { IonReactRouter } from "@ionic/react-router";
import { expectToBeOnPage } from "test-utils/matchers";
import { createMemoryHistory } from "history";

test("renders without crashing", () => {
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  const { container } = render(
    <IonReactRouter history={history}>
      <MainTabs />
    </IonReactRouter>
  );
  expect(container).toBeInTheDocument();
});

test("visiting /home takes user to Home", () => {
  const history = createMemoryHistory({ initialEntries: ["/home"] });
  const { container } = render(
    <IonReactRouter history={history}>
      <MainTabs />
    </IonReactRouter>
  );
  expectToBeOnPage(container, history.location.pathname, "home");
});

test("visiting /offers takes user to Offers", () => {
  const history = createMemoryHistory({ initialEntries: ["/offers"] });
  const { container } = render(
    <IonReactRouter
      history={createMemoryHistory({ initialEntries: ["/offers"] })}
    >
      <MainTabs />
    </IonReactRouter>
  );
  expectToBeOnPage(container, history.location.pathname, "offers");
});
