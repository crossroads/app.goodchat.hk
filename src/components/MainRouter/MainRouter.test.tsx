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
    { initialPath: "/home", expectedPage: "login" },
    { initialPath: "/chats", expectedPage: "login" },
    { initialPath: "/chats/1", expectedPage: "login" },
    { initialPath: "/offers", expectedPage: "login" },
    { initialPath: "/login", expectedPage: "login" },
    { initialPath: "/authenticate", expectedPage: "authenticate" },
    { initialPath: "/", expectedPage: "login" },
    { initialPath: "/bad-route", expectedPage: "login" },
    { initialPath: "/home/bad-route", expectedPage: "login" },
    { initialPath: "/chats/bad-route", expectedPage: "login" },
    { initialPath: "/chats/1", expectedPage: "login" },
    { initialPath: "/offers/bad-route", expectedPage: "login" },
    { initialPath: "/login/bad-route", expectedPage: "login" },
    { initialPath: "/authenticate/bad-route", expectedPage: "login" },
  ].map(({ initialPath, expectedPage }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, async () => {
      const { history } = await renderUnauthenticatedComponent(initialPath);
      expect(history.location.pathname).toEqual(`/${expectedPage}`);
    });
  });
});

describe("Authenticated User", () => {
  const renderAuthenticatedComponent = renderComponent(true);

  [
    { initialPath: "/home", expectedPage: "home" },
    { initialPath: "/chats", expectedPage: "chats" },
    { initialPath: "/chats/1", expectedPage: "chat", expectedPath: "/chats/1" },
    { initialPath: "/offers", expectedPage: "offers" },
    { initialPath: "/login", expectedPage: "login" },
    { initialPath: "/authenticate", expectedPage: "authenticate" },
    { initialPath: "/", expectedPage: "home" },
    { initialPath: "/bad-route", expectedPage: "home" },
    { initialPath: "/home/bad-route", expectedPage: "home" },
    { initialPath: "/offers/bad-route", expectedPage: "home" },
    { initialPath: "/login/bad-route", expectedPage: "home" },
    { initialPath: "/authenticate/bad-route", expectedPage: "home" },
  ].map(({ initialPath, expectedPage, expectedPath }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, async () => {
      const { history } = await renderAuthenticatedComponent(initialPath);
      expect(history.location.pathname).toEqual(expectedPath ?? `/${expectedPage}`);
    });
  });
});
