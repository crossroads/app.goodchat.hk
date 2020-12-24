import React from "react";
import { render, screen } from "@testing-library/react";
import { expectToBeOnPage } from "test-utils/matchers";
import userEvent, { TargetElement } from "@testing-library/user-event";
import { IonApp } from "@ionic/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import MainRouter from "components/MainRouter/MainRouter";

test("User is able to login and logout with correct routing", () => {
  const history = createMemoryHistory({ initialEntries: ["/login"] });
  const { container } = render(
    <IonApp>
      <AuthProvider>
        <Router history={history}>
          <MainRouter />
        </Router>
      </AuthProvider>
    </IonApp>
  );

  expectToBeOnPage(container, history.location.pathname, "login");

  const goToAuthenticateButton = container.querySelector("ion-button");
  userEvent.click(goToAuthenticateButton as TargetElement);

  expectToBeOnPage(container, history.location.pathname, "authenticate");

  const loginButton = container.querySelector("ion-button");
  userEvent.click(loginButton as TargetElement);

  expectToBeOnPage(container, history.location.pathname, "home");

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton as TargetElement);

  expectToBeOnPage(container, history.location.pathname, "login");
});

test("Unauthenticated user redirected to login is redirected back to that page after login", () => {
  const history = createMemoryHistory({ initialEntries: ["/offers"] });
  const { container } = render(
    <IonApp>
      <AuthProvider>
        <Router history={history}>
          <MainRouter />
        </Router>
      </AuthProvider>
    </IonApp>
  );

  expectToBeOnPage(container, history.location.pathname, "login");

  const goToAuthenticateButton = container.querySelector("ion-button");
  userEvent.click(goToAuthenticateButton as TargetElement);

  expectToBeOnPage(container, history.location.pathname, "authenticate");

  const loginButton = container.querySelector("ion-button");
  userEvent.click(loginButton as TargetElement);

  expectToBeOnPage(container, history.location.pathname, "offers");
});
