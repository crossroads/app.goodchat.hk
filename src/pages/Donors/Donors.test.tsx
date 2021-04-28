import { ApolloProvider } from "@apollo/client";
import { render, screen, wait } from "@testing-library/react";
import { ConversationsListQuery } from "generated/graphql";
import createGoodChatClient from "lib/GoodChatClient/createGoodChatClient";
import { mockServer } from "mockServer";
import { graphql } from "msw";
import Donors from "pages/Donors/Donors";
import { pageHeader } from "test-utils/matchers";

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

test("should render without crashing", () => {
  const { container } = render(
    <ApolloProvider client={createGoodChatClient()}>
      <Donors />
    </ApolloProvider>
  );
  expect(container).toBeInTheDocument();
});

describe(
  "Donors page header",
  pageHeader({
    title: "Donors",
    privatePage: true,
    withBackButton: false,
    element: (
      <ApolloProvider client={createGoodChatClient()}>
        <Donors />
      </ApolloProvider>
    ),
  })
);

test("should show a list of conversations", async () => {
  render(
    <ApolloProvider client={createGoodChatClient()}>
      <Donors />
    </ApolloProvider>
  );

  await wait(() => expect(screen.getByText("1")).toBeInTheDocument());
  expect(screen.getByText("2")).toBeInTheDocument();
});
