import { OnSubscriptionDataOptions } from "@apollo/client";
import { conversationFactory, messageFactory } from "test-utils/factories";
import GoodChatMockedProvider from "test-utils/components/GoodChatMockedProvider/GoodChatMockedProvider";
import * as GeneratedTypes from "generated/graphql"
import { testPageHeader } from "test-utils/matchers";
import { act, render, wait } from "@testing-library/react";
import Chats from "pages/Chats/Chats";

const renderChatList = (conversations: GeneratedTypes.Conversation[] = []) => (
  render(
    <GoodChatMockedProvider
      mockResolvers={{
        Query: {
          conversations: () => conversations
        }
      }}
    >
      <Chats />
    </GoodChatMockedProvider>
  )
)

describe("Chats page header", () => {
  testPageHeader({
    title: "Chats",
    withBackButton: false,
    element: (
      <GoodChatMockedProvider>
        <Chats />
      </GoodChatMockedProvider>
    ),
  });
});

describe("Smoke", () => {

  it("should render without crashing", async () => {
    const { container } = renderChatList(conversationFactory.buildList(3));
    await wait(() => {
      expect(
        container.querySelectorAll(".conversation-item")
      ).toHaveLength(3)
    });
  });
})

describe("Conversation List", () => {

  let orderedConversations : GeneratedTypes.Conversation[]

  beforeEach(() => {
    orderedConversations = [
      conversationFactory.build({
        updatedAt: new Date(Date.now()),
        _computed: {
          unreadMessageCount: 101
        }
      }),
      conversationFactory.build({
        updatedAt: new Date(Date.now() - 1000),
        _computed: {
          unreadMessageCount: 102
        }
      }),
      conversationFactory.build({ updatedAt: new Date(Date.now() - 2000) }),
    ]
  });

  it("should show a list of conversations", async () => {
    const { container } = renderChatList(orderedConversations);

    await wait(() => {
      expect(
        container.querySelectorAll(".conversation-item")
      ).toHaveLength(3)
    });

    expect(
      container.querySelector(".conversation-item:first-child")
    ).toHaveTextContent(orderedConversations[0].messages[0].content.text)

    expect(
      container.querySelector(".conversation-item:nth-child(2)")
    ).toHaveTextContent(orderedConversations[1].messages[0].content.text)

    expect(
      container.querySelector(".conversation-item:nth-child(3)")
    ).toHaveTextContent(orderedConversations[2].messages[0].content.text)
  });

  it("should show the unread message count per conversation", async () => {
    const { container } = renderChatList(orderedConversations);

    await wait(() =>
      expect(
        container.querySelector(".conversation-item:first-child ion-badge")
      ).toHaveTextContent("101")
    );
    expect(
      container.querySelector(".conversation-item:nth-child(2) ion-badge")
    ).toHaveTextContent("102");
  });
})

describe("Conversation row", () => {

  let conversation : GeneratedTypes.Conversation

  beforeEach(() => {
    conversation = conversationFactory.build();
  })

  describe("last message preview", () => {
    describe("last message is text", () => {
      it("should display the text content", async () => {
        const { container } = renderChatList([conversation]);

        await wait(() =>
          expect(
            container.querySelector(".conversation-item:first-child")
          ).toHaveTextContent(conversation.messages[0].content.text)
        );
      });
    });

    describe("last message is an image", () => {
      it('should display "Sent image"', async () => {
        const { container } = renderChatList([
          conversationFactory.build({
            messages: [messageFactory.build({
              content: {
                type: "image",
                altText: "fNp8q3k.jpg",
                mediaUrl: "http://i.imgur.com/fNp8q3k.jpg",
                mediaType: "image/jpeg",
              },
            })]
          })
        ])

        await wait(() =>
          expect(
            container.querySelectorAll(".conversation-item").length
          ).toBeGreaterThan(0)
        );

        expect(
          container.querySelector(".conversation-item:first-child")
        ).toHaveTextContent("Sent image")
      });
    });
  });

  it("should link to the individual conversation", async () => {
    const { container } = renderChatList([conversation])

    await wait(() =>
      expect(
        container.querySelector(".conversation-item:first-child")
      ).toHaveAttribute("router-link", "/chats/" + conversation.id)
    );
  });
});


describe("live updates", () => {
  let onSubscriptionData: (options: OnSubscriptionDataOptions<GeneratedTypes.ConversationsSubscription>) => any;

  beforeEach(() => {
    jest.spyOn(GeneratedTypes, 'useMarkAsReadMutation').mockReturnValue([
      jest.fn(),
      {} as any
    ])

    const original = GeneratedTypes.useConversationsSubscription;
    jest.spyOn(GeneratedTypes, 'useConversationsSubscription')
      .mockImplementation(({...args}) => {
        onSubscriptionData = args.onSubscriptionData!
        return original({...args})
      })
  })

  afterEach(() => {
    jest.restoreAllMocks();
  })

  it('listens to new conversations', async () => {
    const { container } = renderChatList([conversationFactory.build()]);

    const newConversation = conversationFactory.build();

    await wait(() => {
      expect(
        container.querySelectorAll(".conversation-item")
      ).toHaveLength(1)
    });

    act(() => {
      onSubscriptionData({
        client: {} as any,
        subscriptionData: {
          loading: false,
          error: undefined,
          data: {
            conversationEvent: {
              action: GeneratedTypes.SubscriptionAction.Create,
              conversation: newConversation
            }
          }
        }
      })
    })

    await wait(() => {
      expect(
        container.querySelectorAll(".conversation-item")
      ).toHaveLength(2)
    });
  })

  it('bumps the updated conversations to the top of the list', async () => {
    const conversationA = conversationFactory.build({ updatedAt: new Date(Date.now() - 2000 ) });
    const conversationB = conversationFactory.build({ updatedAt: new Date(Date.now() - 1000 ) });

    const { container } = renderChatList([
      conversationA,
      conversationB
    ]);

    await wait(() => (
      expect(container.querySelectorAll(".conversation-item")).toHaveLength(2)
    ));

    // conversationB is the at the top
    expect(
      container.querySelector(".conversation-item:nth-child(1)")
    ).toHaveTextContent(conversationB.messages[0].content.text)

    // conversationA is right below
    expect(
      container.querySelector(".conversation-item:nth-child(2)")
    ).toHaveTextContent(conversationA.messages[0].content.text)

    act(() => {
      // We update the timestamp of conversationA through subscriptions
      onSubscriptionData({
        client: {} as any,
        subscriptionData: {
          loading: false,
          error: undefined,
          data: {
            conversationEvent: {
              action: GeneratedTypes.SubscriptionAction.Update,
              conversation: {
                ...conversationA,
                updatedAt: new Date()
              }
            }
          }
        }
      })
    })

    await wait(() => {
      // ConversationA shous at the top now
      expect(
        container.querySelector(".conversation-item:nth-child(1)")
      ).toHaveTextContent(conversationA.messages[0].content.text)
    });

    // ConversationB is now second
    expect(
      container.querySelector(".conversation-item:nth-child(2)")
    ).toHaveTextContent(conversationB.messages[0].content.text)
  })
})
