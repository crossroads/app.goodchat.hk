import React from "react";
import { render } from "@testing-library/react";
import MainTabs from "components/MainTabs/MainTabs";
import { expectToBeOnPage } from "test-utils/matchers";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

const renderComponent = (initialPath: string) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return {
    history,
    ...render(
      <Router history={history}>
        <MainTabs />
      </Router>
    ),
  };
};

test("renders without crashing", () => {
  const { container } = renderComponent("/home");
  expect(container).toBeInTheDocument();
});

test("renders footer correctly", () => {
  const { container } = renderComponent("/home");
  expect(container.querySelector("ion-tab-bar")).toMatchSnapshot();
});

test("visiting /home takes user to Home", () => {
  const { container, history } = renderComponent("/home");
  expectToBeOnPage(container, history.location.pathname, "home");
});

test("visiting /offers takes user to Offers", () => {
  const { container, history } = renderComponent("/offers");
  expectToBeOnPage(container, history.location.pathname, "offers");
});
