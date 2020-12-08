import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { expectToBeOnPage } from "../../test-utils/matchers";

test("User is able to login and logout with correct routing", () => {
  const { container } = render(<App />);

  expectToBeOnPage(container, window.location.pathname, "login");

  const loginButton = container.querySelector("ion-button");
  loginButton.click();

  expectToBeOnPage(container, window.location.pathname, "home");

  const logoutButton = screen.getByText(/log out/i);
  logoutButton.click();

  expectToBeOnPage(container, window.location.pathname, "login");
});
