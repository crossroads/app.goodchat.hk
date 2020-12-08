import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { expectToBeOnPage } from "../../test-utils/matchers";
import userEvent, { TargetElement } from "@testing-library/user-event";

test("User is able to login and logout with correct routing", () => {
  const { container } = render(<App />);

  expectToBeOnPage(container, window.location.pathname, "login");

  const loginButton = container.querySelector("ion-button");
  userEvent.click(loginButton as TargetElement);

  expectToBeOnPage(container, window.location.pathname, "home");

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton as TargetElement);

  expectToBeOnPage(container, window.location.pathname, "login");
});
