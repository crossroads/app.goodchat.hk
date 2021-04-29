import { ApolloProvider } from "@apollo/client";
import { render, wait } from "@testing-library/react";
import { CustomerConversationsListQuery } from "generated/graphql";
import createGoodChatClient from "lib/GoodChatClient/createGoodChatClient";
import { mockServer } from "mockServer";
import { graphql } from "msw";
import Donors from "pages/Donors/Donors";
import { pageHeader } from "test-utils/matchers";
import mockGqlResponse from "test-utils/mocks/mockGqlResponse";

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "error" });
  mockServer.use(
    graphql.query<CustomerConversationsListQuery>(
      "ConversationsList",
      (_, res, ctx) => {
        return res(ctx.data(mockGqlResponse.ConversationsList));
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
  const { container } = render(
    <ApolloProvider client={createGoodChatClient()}>
      <Donors />
    </ApolloProvider>
  );

  await wait(() =>
    expect(container.querySelector("ion-item")).toBeInTheDocument()
  );
  expect(container.querySelectorAll("ion-item")).toHaveLength(2);
});

describe("conversation", () => {
  it("should display customer displayName", async () => {
    const { container } = render(
      <ApolloProvider client={createGoodChatClient()}>
        <Donors />
      </ApolloProvider>
    );

    await wait(() =>
      expect(container.querySelector("ion-item")).toHaveTextContent(/jane doe/i)
    );
    expect(container.querySelectorAll("ion-item")[1]).toHaveTextContent(
      /chan tai man/i
    );
  });
});
