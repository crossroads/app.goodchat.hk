import React from "react";
import { render, screen, wait } from "@testing-library/react";
import { expectToBeOnPage } from "test-utils/matchers";
import userEvent, { TargetElement } from "@testing-library/user-event";
import { IonApp } from "@ionic/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import MainRouter from "components/MainRouter/MainRouter";
import { GC_API_TOKEN } from "test-utils/config/localStorageKeys";
import { ionFireEvent } from "@ionic/react-test-utils";
import { mockServer } from "mockServer";
import { rest } from "msw";

beforeAll(() => {
  mockServer.use(
    rest.post(
      `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
      (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ otp_auth_key: "fdsafasaf" }));
      }
    ),
    rest.post(
      `${process.env.REACT_APP_API_V2_URL}/auth/verify`,
      (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ jwt_token: "ejhksfdsfafds" }));
      }
    )
  );
  mockServer.listen({ onUnhandledRequest: "error" });
});

afterAll(() => mockServer.close());

test("User is able to login and logout with correct routing", async () => {
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

  await wait(() =>
    expectToBeOnPage(container, history.location.pathname, "authenticate")
  );

  const inputVal = "1234";
  const input = container.querySelector("ion-input");
  const loginButton = container.querySelector("ion-button");
  ionFireEvent.ionChange(input!, inputVal);
  userEvent.click(loginButton as TargetElement);

  await wait(() =>
    expectToBeOnPage(container, history.location.pathname, "home")
  );

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton as TargetElement);

  expectToBeOnPage(container, history.location.pathname, "login");
});

test("Unauthenticated user redirected to login is redirected back to that page after login", async () => {
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

  await wait(() =>
    expectToBeOnPage(container, history.location.pathname, "authenticate")
  );

  const loginButton = container.querySelector("ion-button");
  userEvent.click(loginButton as TargetElement);

  await wait(() =>
    expectToBeOnPage(container, history.location.pathname, "offers")
  );

  // cleanup
  localStorage.removeItem(GC_API_TOKEN);
});
