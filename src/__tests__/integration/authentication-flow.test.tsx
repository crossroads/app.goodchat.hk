import userEvent, { TargetElement } from "@testing-library/user-event";
import { render, screen, wait } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { ionFireEvent } from "@ionic/react-test-utils";
import { mockServer } from "mockServer";
import GoodChatProvider from "components/GoodChatProvider/GoodChatProvider";
import setupMockIntegrationServer from "test-utils/setupMockIntegrationServer";
import AuthProvider from "components/AuthProvider/AuthProvider";
import MainRouter from "components/MainRouter/MainRouter";
import { IonApp } from "@ionic/react";
import { Router } from "react-router";
import { rest } from "msw";

const expectToBeOnPage = (
  myPath: string,
  expectedPage: string,
  expectedPath?: string
) => {
  expect(myPath).toEqual(expectedPath ?? `/${expectedPage}`);
};

beforeAll(() => {
  setupMockIntegrationServer(mockServer);
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

  expectToBeOnPage(history.location.pathname, "login");

  const mobileInput = container.querySelector("ion-input");
  ionFireEvent.ionChange(mobileInput!, "91111111");

  const goToAuthenticateButton = container.querySelector("ion-button");
  userEvent.click(goToAuthenticateButton as TargetElement);

  await wait(() =>
    expectToBeOnPage(history.location.pathname, "authenticate")
  );

  const inputVal = "1234";
  const input = container.querySelector("ion-input");
  const loginButton = container.querySelector("ion-button");
  ionFireEvent.ionChange(input!, inputVal);
  userEvent.click(loginButton as TargetElement);

  await wait(() =>
    expectToBeOnPage(history.location.pathname, "home")
  );

  const logoutButton = screen.getByText(/log out/i);
  userEvent.click(logoutButton as TargetElement);

  expectToBeOnPage(history.location.pathname, "login");
});

[
  { initialPath: "/home", expectedPage: "home" },
  { initialPath: "/offers", expectedPage: "offers" },
  { initialPath: "/chats", expectedPage: "chats" },
  { initialPath: "/chats/1", expectedPage: "chat", expectedPath: "/chats/1" }
].map(({ initialPath, expectedPage, expectedPath }) => {
  test(`Unauthenticated user visiting private route ${initialPath} is redirected to ${expectedPage} after login`, async () => {
    const { history, container } = setup({ initialEntries: [initialPath] });

    expectToBeOnPage(history.location.pathname, "login");

    const mobileInput = container.querySelector("ion-input");
    ionFireEvent.ionChange(mobileInput!, "91111111");

    const goToAuthenticateButton = container.querySelector("ion-button");
    userEvent.click(goToAuthenticateButton as TargetElement);

    await wait(() =>
      expectToBeOnPage(history.location.pathname, "authenticate")
    );

    const inputVal = "1234";
    const input = container.querySelector("ion-input");
    const loginButton = container.querySelector("ion-button");
    ionFireEvent.ionChange(input!, inputVal);
    userEvent.click(loginButton as TargetElement);

    await wait(() =>
      expectToBeOnPage(
        history.location.pathname,
        expectedPage,
        expectedPath
      )
    );
  });
});
