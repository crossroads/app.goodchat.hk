import { ApolloProvider } from "@apollo/client";
import { render, screen, wait } from "@testing-library/react";
import { CustomerConversationsListQuery } from "generated/graphql";
import createGoodChatClient from "lib/GoodChatClient/createGoodChatClient";
import { mockServer } from "mockServer";
import { graphql } from "msw";
import Donors from "pages/Donors/Donors";
import { pageHeader } from "test-utils/matchers";
import mockGraphQLQueryResponse from "test-utils/mockGraphQLQueryResponse";

const mockConversations = (
  conversationsList: CustomerConversationsListQuery["conversations"]
) => {
  mockGraphQLQueryResponse<
    Pick<CustomerConversationsListQuery, "conversations">
  >(mockServer, "CustomerConversationsList", {
    conversations: conversationsList,
  });
};

const defaultConversations: CustomerConversationsListQuery["conversations"] = [
  {
    id: 1,
    customer: {
      displayName: "Jane Doe",
      __typename: "Customer",
    },
    messages: [
      {
        content: {
          text: "world",
          type: "text",
        },
        __typename: "Message",
      },
    ],
    __typename: "Conversation",
  },
];

beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));

afterEach(() => mockServer.resetHandlers());

afterAll(() => mockServer.close());

test("should render without crashing", () => {
  mockConversations(defaultConversations);

  const { container } = render(
    <ApolloProvider client={createGoodChatClient()}>
      <Donors />
    </ApolloProvider>
  );
  expect(container).toBeInTheDocument();
});

describe("Donors page header", () => {
  beforeEach(() => mockConversations(defaultConversations));

  pageHeader({
    title: "Donors",
    privatePage: true,
    withBackButton: false,
    element: (
      <ApolloProvider client={createGoodChatClient()}>
        <Donors />
      </ApolloProvider>
    ),
  })();
});

test("should show a list of conversations", async () => {
  mockConversations([
    ...defaultConversations,
    {
      id: 2,
      customer: {
        displayName: "Chan Tai Man",
        __typename: "Customer",
      },
      messages: [
        {
          content: {
            text: "Can I donate this?",
            type: "text",
          },
          __typename: "Message",
        },
      ],
      __typename: "Conversation",
    },
  ]);

  const { container } = render(
    <ApolloProvider client={createGoodChatClient()}>
      <Donors />
    </ApolloProvider>
  );

  await wait(() =>
    expect(
      container.querySelector(".conversation-item:first-child")
    ).toHaveTextContent("Jane Doe")
  );
  expect(
    container.querySelector(".conversation-item:nth-child(2)")
  ).toHaveTextContent("Chan Tai Man");
});

describe("conversation", () => {
  describe("last message preview", () => {
    describe("last message is text", () => {
      it("should display the text content", async () => {
        mockConversations(defaultConversations);

        const { container } = render(
          <ApolloProvider client={createGoodChatClient()}>
            <Donors />
          </ApolloProvider>
        );

        await wait(() =>
          expect(
            container.querySelector(".conversation-item:first-child")
          ).toHaveTextContent("world")
        );
      });
    });

    describe("last message is an image", () => {
      it('should display "Sent image"', async () => {
        mockConversations([
          {
            id: 1,
            customer: {
              displayName: "Jane Doe",
              __typename: "Customer",
            },
            messages: [
              {
                content: {
                  type: "image",
                  altText: "fNp8q3k.jpg",
                  mediaUrl: "http://i.imgur.com/fNp8q3k.jpg",
                  mediaType: "image/jpeg",
                },
              },
            ],
            __typename: "Conversation",
          },
        ]);

        const { container } = render(
          <ApolloProvider client={createGoodChatClient()}>
            <Donors />
          </ApolloProvider>
        );

        await wait(() =>
          expect(
            container.querySelector(".conversation-item:first-child")
          ).toHaveTextContent("Sent image")
        );
      });
    });
  });
});

describe("Network error", () => {
  it("should show error message about network error", async () => {
    mockServer.use(
      graphql.query("CustomerConversationsList", (_, res) => {
        return res.networkError("Failed to connect");
      })
    );

    render(
      <ApolloProvider client={createGoodChatClient()}>
        <Donors />
      </ApolloProvider>
    );

    await wait(() =>
      expect(screen.getByRole("alert")).toMatchInlineSnapshot(`
        <div
          role="alert"
        >
          Failed to fetch
        </div>
      `)
    );
  });
});
