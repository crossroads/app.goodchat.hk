import React from "react";
import { render, screen, wait } from "@testing-library/react";
import { expectToBeOnPage } from "test-utils/matchers";
import userEvent, { TargetElement } from "@testing-library/user-event";
import { IonApp } from "@ionic/react";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import MainRouter from "components/MainRouter/MainRouter";
import { ionFireEvent } from "@ionic/react-test-utils";
import { mockServer } from "mockServer";
import { rest } from "msw";
import GoodChatProvider from "components/GoodChatProvider/GoodChatProvider";

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

const setup = ({ initialEntries }: { initialEntries: string[] }) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    history,
    ...render(
      <IonApp>
        <AuthProvider>
          <GoodChatProvider>
            <Router history={history}>
              <MainRouter />
            </Router>
          </GoodChatProvider>
        </AuthProvider>
      </IonApp>
    ),
  };
};

test("User is able to login and logout with correct routing", async () => {
  const { history, container } = setup({ initialEntries: ["/login"] });

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

[
  { initialPath: "/home", expectedPage: "home" },
  { initialPath: "/offers", expectedPage: "offers" },
  { initialPath: "/chats", expectedPage: "chats" },
  { initialPath: "/chats/1", expectedPage: "chat", expectedPath: "/chats/1" },
  {
    initialPath: "/chats/bad-route",
    expectedPage: "chat",
    expectedPath: "/chats/bad-route",
  },
].map(({ initialPath, expectedPage, expectedPath }) => {
  test(`Unauthenticated user visiting private route ${initialPath} is redirected to ${expectedPage} after login`, async () => {
    const { history, container } = setup({ initialEntries: [initialPath] });

    expectToBeOnPage(container, history.location.pathname, "login");

    const goToAuthenticateButton = container.querySelector("ion-button");
    userEvent.click(goToAuthenticateButton as TargetElement);

    await wait(() =>
      expectToBeOnPage(container, history.location.pathname, "authenticate")
    );

    const loginButton = container.querySelector("ion-button");
    userEvent.click(loginButton as TargetElement);

    await wait(() =>
      expectToBeOnPage(
        container,
        history.location.pathname,
        expectedPage,
        expectedPath
      )
    );
  });
});
