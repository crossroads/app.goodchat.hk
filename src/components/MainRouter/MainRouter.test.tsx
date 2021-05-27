import React from "react";
import { render } from "@testing-library/react";
import MainRouter from "components/MainRouter/MainRouter";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { expectToBeOnPage } from "test-utils/matchers";
import GoodChatMockedProvider from "components/GoodChatMockedProvider/GoodChatMockedProvider";

const renderComponent = (initialAuthState: boolean) => (
  initialPath: string
) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return {
    history,
    ...render(
      <AuthProvider initialAuthState={initialAuthState}>
        <GoodChatMockedProvider>
          <Router history={history}>
            <MainRouter />
          </Router>
        </GoodChatMockedProvider>
      </AuthProvider>
    ),
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
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, () => {
      const { container, history } = renderUnauthenticatedComponent(
        initialPath
      );
      expectToBeOnPage(container, history.location.pathname, expectedPage);
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
    {
      initialPath: "/chats/bad-route",
      expectedPage: "chat",
      expectedPath: "/chats/bad-route",
    },
    { initialPath: "/offers/bad-route", expectedPage: "home" },
    { initialPath: "/login/bad-route", expectedPage: "home" },
    { initialPath: "/authenticate/bad-route", expectedPage: "home" },
  ].map(({ initialPath, expectedPage, expectedPath }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, () => {
      const { container, history } = renderAuthenticatedComponent(initialPath);
      expectToBeOnPage(
        container,
        history.location.pathname,
        expectedPage,
        expectedPath
      );
    });
  });
});
