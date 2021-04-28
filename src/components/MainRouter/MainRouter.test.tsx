import React from "react";
import { render } from "@testing-library/react";
import MainRouter from "components/MainRouter/MainRouter";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { expectToBeOnPage } from "test-utils/matchers";
import { ApolloProvider } from "@apollo/client";
import createGoodChatClient from "lib/GoodChatClient/createGoodChatClient";
import { ConversationsListQuery } from "generated/graphql";
import { mockServer } from "mockServer";
import { graphql } from "msw";

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "error" });
  mockServer.use(
    graphql.query<ConversationsListQuery>(
      "ConversationsList",
      (_, res, ctx) => {
        return res(
          ctx.data({
            conversations: [
              {
                id: 1,
                __typename: "Conversation",
              },
              {
                id: 2,
                __typename: "Conversation",
              },
            ],
          })
        );
      }
    )
  );
});

afterAll(() => mockServer.close());

const renderComponent = (initialAuthState: boolean) => (
  initialPath: string
) => {
  const history = createMemoryHistory({ initialEntries: [initialPath] });
  return {
    history,
    ...render(
      <AuthProvider initialAuthState={initialAuthState}>
        <ApolloProvider client={createGoodChatClient()}>
          <Router history={history}>
            <MainRouter />
          </Router>
        </ApolloProvider>
      </AuthProvider>
    ),
  };
};

describe("Unauthenticated User", () => {
  const renderUnauthenticatedComponent = renderComponent(false);

  [
    { initialPath: "/home", expectedPage: "login" },
    { initialPath: "/donors", expectedPage: "login" },
    { initialPath: "/offers", expectedPage: "login" },
    { initialPath: "/login", expectedPage: "login" },
    { initialPath: "/authenticate", expectedPage: "authenticate" },
    { initialPath: "/", expectedPage: "login" },
    { initialPath: "/bad-route", expectedPage: "login" },
    { initialPath: "/home/bad-route", expectedPage: "login" },
    { initialPath: "/donors/bad-route", expectedPage: "login" },
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
    { initialPath: "/donors", expectedPage: "donors" },
    { initialPath: "/offers", expectedPage: "offers" },
    { initialPath: "/login", expectedPage: "login" },
    { initialPath: "/authenticate", expectedPage: "authenticate" },
    { initialPath: "/", expectedPage: "home" },
    { initialPath: "/bad-route", expectedPage: "home" },
    { initialPath: "/home/bad-route", expectedPage: "home" },
    { initialPath: "/donors/bad-route", expectedPage: "home" },
    { initialPath: "/offers/bad-route", expectedPage: "home" },
    { initialPath: "/login/bad-route", expectedPage: "home" },
    { initialPath: "/authenticate/bad-route", expectedPage: "home" },
  ].map(({ initialPath, expectedPage }) => {
    it(`visiting ${initialPath} should be taken to ${expectedPage}`, () => {
      const { container, history } = renderAuthenticatedComponent(initialPath);
      expectToBeOnPage(container, history.location.pathname, expectedPage);
    });
  });
});
