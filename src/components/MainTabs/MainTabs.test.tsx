import React from "react";
import { render } from "@testing-library/react";
import MainTabs from "components/MainTabs/MainTabs";
import { IonReactRouter } from "@ionic/react-router";
import { expectToBeOnPage } from "test-utils/matchers";

test("renders without crashing", () => {
  const { container } = render(<MainTabs />, { wrapper: IonReactRouter });
  expect(container).toBeInTheDocument();
});

test("visiting /home takes user to Home", () => {
  window.history.pushState({}, "", "/home");
  const { container } = render(<MainTabs />, { wrapper: IonReactRouter });
  expectToBeOnPage(container, window.location.pathname, "home");
});

test("visiting /offers takes user to Offers", () => {
  window.history.pushState({}, "", "/offers");
  const { container } = render(<MainTabs />, { wrapper: IonReactRouter });
  expectToBeOnPage(container, window.location.pathname, "offers");
});
