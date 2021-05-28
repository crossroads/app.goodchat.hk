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
import mockApiResponses from "test-utils/fixtures/mockApiResponses";

interface SendPinBody {
  mobile: string;
}

interface VerifyBody {
  otp_auth_key: string;
  pin: string;
}

beforeAll(() => {
  const VALID_PHONE = "+85291111111";
  const VALID_PIN = "1234";
  const VALID_OTP_AUTH_KEY = "123dsfdasf";

  mockServer.use(
    rest.post<SendPinBody>(
      `${process.env.REACT_APP_API_V2_URL}/auth/send_pin`,
      (req, res, ctx) => {
        if (req.body.mobile === VALID_PHONE) {
          return res(
            ctx.status(200),
            ctx.json(mockApiResponses["auth/send_pin"].success)
          );
        } else {
          return res(
            ctx.status(422),
            ctx.json(mockApiResponses["auth/send_pin"][422].errorResponse)
          );
        }
      }
    ),
    rest.post<VerifyBody>(
      `${process.env.REACT_APP_API_V2_URL}/auth/verify`,
      (req, res, ctx) => {
        if (
          req.body.pin === VALID_PIN &&
          req.body.otp_auth_key === VALID_OTP_AUTH_KEY
        ) {
          return res(
            ctx.status(200),
            ctx.json(mockApiResponses["auth/verify"].success)
          );
        } else {
          return res(
            ctx.status(401),
            ctx.json(mockApiResponses["auth/verify"][401].errorResponse)
          );
        }
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

  const mobileInput = container.querySelector("ion-input");
  ionFireEvent.ionChange(mobileInput!, "91111111");

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

    const mobileInput = container.querySelector("ion-input");
    ionFireEvent.ionChange(mobileInput!, "91111111");

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
      expectToBeOnPage(
        container,
        history.location.pathname,
        expectedPage,
        expectedPath
      )
    );
  });
});
