import { renderPage } from "test-utils/renderers";

describe("Unauthenticated User", () => {
  [
    { initialPath: "/home",                    expectedPath: "/login" },
    { initialPath: "/chats",                   expectedPath: "/login" },
    { initialPath: "/chats/1",                 expectedPath: "/login" },
    { initialPath: "/offers",                  expectedPath: "/login" },
    { initialPath: "/login",                   expectedPath: "/login" },
    { initialPath: "/authenticate",            expectedPath: "/authenticate" },
    { initialPath: "/",                        expectedPath: "/login" },
    { initialPath: "/bad-route",               expectedPath: "/login" },
    { initialPath: "/home/bad-route",          expectedPath: "/login" },
    { initialPath: "/chats/bad-route",         expectedPath: "/login" },
    { initialPath: "/chats/1",                 expectedPath: "/login" },
    { initialPath: "/offers/bad-route",        expectedPath: "/login" },
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
    { initialPath: "/offers",                  expectedPath: "/offers" },
    { initialPath: "/login",                   expectedPath: "/login" },
    { initialPath: "/authenticate",            expectedPath: "/authenticate" },
    { initialPath: "/",                        expectedPath: "/home" },
    { initialPath: "/bad-route",               expectedPath: "/home" },
    { initialPath: "/home/bad-route",          expectedPath: "/home" },
    { initialPath: "/offers/bad-route",        expectedPath: "/home" },
    { initialPath: "/login/bad-route",         expectedPath: "/home" },
    { initialPath: "/authenticate/bad-route",  expectedPath: "/home" },
  ].map(({ initialPath, expectedPath }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPath}`, async () => {
      const { history } = await renderPage(initialPath)
      expect(history.location.pathname).toEqual(expectedPath);
    });
  });
});
