import { render, wait } from "@testing-library/react";
import Chats from "pages/Chats/Chats";
import { testPageHeader } from "test-utils/matchers";
import GoodChatMockedProvider from "components/GoodChatMockedProvider/GoodChatMockedProvider";

test("should render without crashing", async () => {
  const { container } = render(
    <GoodChatMockedProvider>
      <Chats />
    </GoodChatMockedProvider>
  );

  await wait(() =>
    expect(
      container.querySelector(".conversation-item:first-child")
    ).toHaveTextContent("I want to donate")
  );
});

describe("Chats page header", () => {
  testPageHeader({
    title: "Chats",
    privatePage: true,
    withBackButton: false,
    element: (
      <GoodChatMockedProvider>
        <Chats />
      </GoodChatMockedProvider>
    ),
  });
});

test("should show a list of conversations", async () => {
  const mockConversationsList = [1, 2].map((id) => ({
    messages: [
      {
        content: {
          type: "text",
          text: `Donate ${id}`,
        },
      },
    ],
  }));

  const { container } = render(
    <GoodChatMockedProvider
      mockResolvers={{
        Query: () => ({
          conversations: () => mockConversationsList,
        }),
      }}
    >
      <Chats />
    </GoodChatMockedProvider>
  );

  await wait(() =>
    expect(
      container.querySelector(".conversation-item:first-child")
    ).toHaveTextContent("Donate 1")
  );
  expect(
    container.querySelector(".conversation-item:nth-child(2)")
  ).toHaveTextContent("Donate 2");
});

describe("conversation", () => {
  describe("last message preview", () => {
    describe("last message is text", () => {
      it("should display the text content", async () => {
        const { container } = render(
          <GoodChatMockedProvider>
            <Chats />
          </GoodChatMockedProvider>
        );

        await wait(() =>
          expect(
            container.querySelector(".conversation-item:first-child")
          ).toHaveTextContent("I want to donate")
        );
      });
    });

    describe("last message is an image", () => {
      it('should display "Sent image"', async () => {
        const { container } = render(
          <GoodChatMockedProvider
            mockResolvers={{
              Message: () => ({
                content: {
                  type: "image",
                  altText: "fNp8q3k.jpg",
                  mediaUrl: "http://i.imgur.com/fNp8q3k.jpg",
                  mediaType: "image/jpeg",
                },
              }),
            }}
          >
            <Chats />
          </GoodChatMockedProvider>
        );

        await wait(() =>
          expect(
            container.querySelector(".conversation-item:first-child")
          ).toHaveTextContent("Sent image")
        );
      });
    });
  });

  it("should link to the individual conversation", async () => {
    const { container } = render(
      <GoodChatMockedProvider
        mockResolvers={{
          Query: () => ({
            conversations: () => [{ id: 1 }],
          }),
        }}
      >
        <Chats />
      </GoodChatMockedProvider>
    );

    await wait(() =>
      expect(
        container.querySelector(".conversation-item:first-child")
      ).toHaveAttribute("router-link", "/chats/1")
    );
  });
});
