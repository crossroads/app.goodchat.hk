import { renderPage } from "test-utils/renderers";
import * as factories from 'test-utils/factories'
import { ConversationType } from "generated/graphql";
import * as Chat from "pages/Chat/Chat";

// prevents not wrapped in act warning
jest.spyOn(Chat, 'default').mockImplementation(() => null);

describe("Unauthenticated User", () => {
  [
    { initialPath: "/home",                    expectedPath: "/login" },
    { initialPath: "/chats",                   expectedPath: "/login" },
    { initialPath: "/chats/1",                 expectedPath: "/login" },
    { initialPath: "/menu",                    expectedPath: "/login" },
    { initialPath: "/login",                   expectedPath: "/login" },
    { initialPath: "/authenticate",            expectedPath: "/authenticate" },
    { initialPath: "/",                        expectedPath: "/login" },
    { initialPath: "/bad-route",               expectedPath: "/login" },
    { initialPath: "/home/bad-route",          expectedPath: "/login" },
    { initialPath: "/chats/bad-route",         expectedPath: "/login" },
    { initialPath: "/chats/1",                 expectedPath: "/login" },
    { initialPath: "/menu/bad-route",          expectedPath: "/login" },
    { initialPath: "/login/bad-route",         expectedPath: "/login" },
    { initialPath: "/authenticate/bad-route",  expectedPath: "/login" },
  ].map(({ initialPath, expectedPath }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPath}`, async () => {
      const { history } = await renderPage(initialPath, {authenticated: false})
      expect(history.location.pathname).toEqual(expectedPath);
    });
  });
});

describe("Authenticated User", () => {
  [
    { initialPath: "/home",                    expectedPath: "/home" },
    { initialPath: "/chats",                   expectedPath: "/chats" },
    { initialPath: "/chats/1",                 expectedPath: "/chats/1"},
    { initialPath: "/menu",                    expectedPath: "/menu" },
    { initialPath: "/login",                   expectedPath: "/login" },
    { initialPath: "/authenticate",            expectedPath: "/authenticate" },
    { initialPath: "/",                        expectedPath: "/home" },
    { initialPath: "/bad-route",               expectedPath: "/home" },
    { initialPath: "/home/bad-route",          expectedPath: "/home" },
    { initialPath: "/menu/bad-route",          expectedPath: "/home" },
    { initialPath: "/login/bad-route",         expectedPath: "/home" },
    { initialPath: "/authenticate/bad-route",  expectedPath: "/home" },
  ].map(({ initialPath, expectedPath }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPath}`, async () => {
      const { history } = await renderPage(initialPath, {
        mocks: {
          Query: {
            conversation: () => factories.conversationFactory.build({
              type: ConversationType.Customer
            })
          }
        }
      })
      expect(history.location.pathname).toEqual(expectedPath);
    });
  });
});
