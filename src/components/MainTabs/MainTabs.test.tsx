import React from "react";
import { render } from "@testing-library/react";
import MainTabs from "components/MainTabs/MainTabs";
import { expectToBeOnPage } from "test-utils/matchers";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

const renderComponent = (initialPath = "/home") => {
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
  const { container } = renderComponent();
  expect(container).toBeInTheDocument();
});

test("renders a navbar", () => {
  const { container } = renderComponent();
  expect(container.querySelector("ion-tab-bar")).toBeInTheDocument();
});

test("renders navbar at the bottom of the page", () => {
  const { container } = renderComponent();
  expect(container.querySelector("ion-tab-bar")).toHaveAttribute(
    "slot",
    "bottom"
  );
});

[
  { tabName: "home", expectedLink: "/home" },
  { tabName: "offers", expectedLink: "/offers" },
].forEach(({ tabName, expectedLink }) => {
  describe(`${tabName} tab`, () => {
    test("should be rendered", () => {
      const { container } = renderComponent();
      expect(
        container.querySelector(`ion-tab-button[tab=${tabName}]`)
      ).toBeInTheDocument();
    });

    test(`should have the appropriate label`, () => {
      const { container } = renderComponent();
      expect(
        container.querySelector(`ion-tab-button[tab=${tabName}] ion-label`)
      ).toHaveTextContent(new RegExp(tabName, "i"));
    });

    test(`should have an icon`, () => {
      const { container } = renderComponent();
      expect(
        container.querySelector(`ion-tab-button[tab=${tabName}] ion-icon`)
      ).toBeInTheDocument();
    });

    test(`should contain a link to ${expectedLink}`, () => {
      const { container } = renderComponent();
      expect(
        container.querySelector(`ion-tab-button[tab=${tabName}]`)
      ).toHaveAttribute("href", expectedLink);
    });
  });
});

test("renders footer correctly", () => {
  const { container } = renderComponent();
  expect(container.querySelector("ion-tab-bar")).toMatchSnapshot();
});

test("visiting /home takes user to Home", () => {
  const { container, history } = renderComponent();
  expectToBeOnPage(container, history.location.pathname, "home");
});

test("visiting /offers takes user to Offers", () => {
  const { container, history } = renderComponent("/offers");
  expectToBeOnPage(container, history.location.pathname, "offers");
});
