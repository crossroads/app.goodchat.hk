import React from "react";
import { render } from "@testing-library/react";
import MainTabs from "components/MainTabs/MainTabs";
import { IonReactRouter } from "@ionic/react-router";
import { expectToBeOnPage } from "test-utils/matchers";
import { createMemoryHistory } from "history";

const renderComponent = (initialPath: string) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return {
    history,
    ...render(
      <IonReactRouter history={history}>
        <MainTabs />
      </IonReactRouter>
    ),
  };
};

test("renders without crashing", () => {
  const { container } = renderComponent("/home");
  expect(container).toBeInTheDocument();
});

test("visiting /home takes user to Home", () => {
  const { container, history } = renderComponent("/home");
  expectToBeOnPage(container, history.location.pathname, "home");
});

test("visiting /offers takes user to Offers", () => {
  const { container, history } = renderComponent("/offers");
  expectToBeOnPage(container, history.location.pathname, "offers");
});
