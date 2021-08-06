import userEvent, { TargetElement } from "@testing-library/user-event";
import { wait } from "@testing-library/react";
import { ionFireEvent } from "@ionic/react-test-utils";
import { mockServer } from "mockServer";
import setupMockIntegrationServer from "test-utils/setupMockIntegrationServer";
import { renderPage } from "test-utils/renderers";
import * as factories from 'test-utils/factories'
import { ConversationType } from "generated/graphql"

const expectToBeOnPage = (
  myPath: string,
  expectedPath: string
) => {
  expect(myPath).toEqual(expectedPath);
};

beforeAll(() => {
  setupMockIntegrationServer(mockServer);
  mockServer.listen({ onUnhandledRequest: "error" });
});

afterAll(() => mockServer.close());

test("User is able to login with correct routing", async () => {
  const { history, container } = await renderPage("/login");

  expectToBeOnPage(history.location.pathname, "/login");

  const mobileInput = container.querySelector("ion-input");
  ionFireEvent.ionChange(mobileInput!, "91111111");

  const goToAuthenticateButton = container.querySelector("ion-button");
  userEvent.click(goToAuthenticateButton as TargetElement);

  await wait(() =>
    expectToBeOnPage(history.location.pathname, "/authenticate")
  );

  const inputVal = "1234";
  const input = container.querySelector("ion-input");
  const loginButton = container.querySelector("ion-button");
  ionFireEvent.ionChange(input!, inputVal);
  userEvent.click(loginButton as TargetElement);

  await wait(() =>
    expectToBeOnPage(history.location.pathname, "/home")
  );
});

[
  { initialPath: "/home",      expectedPath: "/home" },
  { initialPath: "/chats",     expectedPath: "/chats" },
  { initialPath: "/chats/1",   expectedPath: "/chats/1" },
  { initialPath: "/menu",      expectedPath: "/menu" }
].map(({ initialPath, expectedPath }) => {
  test(`Unauthenticated user visiting private route ${initialPath} is redirected to ${expectedPath} after login`, async () => {
    const { history, container } = await renderPage(initialPath, {
      authenticated: false,
      mocks: {
        Query: {
          conversation: () => factories.conversationFactory.build({
            type: ConversationType.Customer
          })
        }
      }
    })

    expectToBeOnPage(history.location.pathname, "/login");

    const mobileInput = container.querySelector("ion-input");
    ionFireEvent.ionChange(mobileInput!, "91111111");

    const goToAuthenticateButton = container.querySelector("ion-button");
    userEvent.click(goToAuthenticateButton as TargetElement);

    await wait(() =>
      expectToBeOnPage(history.location.pathname, "/authenticate")
    );

    const inputVal = "1234";
    const input = container.querySelector("ion-input");
    const loginButton = container.querySelector("ion-button");
    ionFireEvent.ionChange(input!, inputVal);
    userEvent.click(loginButton as TargetElement);

    await wait(() =>
      expectToBeOnPage(
        history.location.pathname,
        expectedPath
      )
    );
  });
});
