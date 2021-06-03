import React from "react";
import MainRouter from "components/MainRouter/MainRouter";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import AuthProvider from "components/AuthProvider/AuthProvider";
import GoodChatMockedProvider from "test-utils/components/GoodChatMockedProvider/GoodChatMockedProvider";
import { renderWithAct } from "test-utils/renderers";

const renderComponent = (initialAuthState: boolean) => async (
  initialPath: string
) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  const renderResult = await renderWithAct(
    <AuthProvider initialAuthState={initialAuthState}>
      <GoodChatMockedProvider>
        <Router history={history}>
          <MainRouter />
        </Router>
      </GoodChatMockedProvider>
    </AuthProvider>
  );

  return {
    history,
    ...renderResult,
  };
};

describe("Unauthenticated User", () => {
  const renderUnauthenticatedComponent = renderComponent(false);

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
      const { history } = await renderUnauthenticatedComponent(initialPath);
      expect(history.location.pathname).toEqual(expectedPath);
    });
  });
});

describe("Authenticated User", () => {
  const renderAuthenticatedComponent = renderComponent(true);

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
      const { history } = await renderAuthenticatedComponent(initialPath);
      expect(history.location.pathname).toEqual(expectedPath);
    });
  });
});
