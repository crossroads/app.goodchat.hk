import { testPageHeader } from "test-utils/matchers"
import { renderPage } from "test-utils/renderers"
import * as Apollo from '@apollo/client'
import * as factories from 'test-utils/factories'
import { wait, waitForElement } from "@testing-library/dom"
import { Conversation, ConversationType } from "typings/goodchat"
import range from "lodash/range"
import { assertNonNullType } from "graphql"

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
})

describe('Smoke', () => {
  test("renders without crashing", async () => {
    const { container } = await renderPage('/chats/1');
    expect(container).toBeInTheDocument();
  });
});

describe('Navigation', () => {
  test("should contain a back button", async () => {
    const { container } = await renderPage('/chats/1');
    expect(
      container!.querySelector("ion-header ion-back-button")
    ).toBeInTheDocument();
  });

  test("back button should default to /chats", async () => {
    const { container } = await renderPage('/chats/1');

    expect(container.querySelector("ion-header ion-back-button")).toHaveAttribute(
      "default-href",
      "/chats"
    );
  })
})

describe('Content', () => {
  const MESSAGE_COUNT = 55;
  const PAGE_SIZE = 25;

  // Context

  let conversation : Conversation

  // Helpers

  const paginator = (list: any[]) => (paginationArgs: any) => {
    const { offset = 0, limit = list.length } = paginationArgs;
    return list.slice(offset, offset + limit);
  }

  const renderChat = async () => {
    const result = await renderPage('/chats/' + conversation.id, {
      mocks: {
        Conversation: () => ({
          ...conversation,
          messages: paginator(conversation.messages)
        })
      }
    })

    await waitForElement(() => result.container.querySelector('.chat-message'));

    return result;
  };

  // Hooks

  beforeEach(async () => {
    const now = Date.now();
    const hour = 1000 * 60 * 60;

    conversation = factories.conversationFactory.build({
      type: ConversationType.Customer,
      messages: range(MESSAGE_COUNT).map((i) => factories.messageFactory.build({
        createdAt: new Date(now - i * hour)
      }))
    });
  });

  describe('Header', () => {
    test(`customer chats should have the customer name as title`, async () => {
      const { container } = await renderChat();
      const customerName = conversation.customer?.displayName as string

      expect(customerName.length).toBeGreaterThan(0)
      expect(container!.querySelector("ion-header ion-title")).toHaveTextContent(customerName)
    });
  })

  describe('Message list', () => {
    it('loads the messages of the correct conversation', async () => {
      const spy = jest.spyOn(Apollo, 'useQuery')

      await renderChat();

      expect(spy).toBeCalledWith(
        expect.objectContaining({
          definitions: expect.arrayContaining([
            expect.objectContaining({
              name: {
                kind: 'Name',
                value: 'ConversationMessages'
              }
            })
          ])
        }),
        expect.objectContaining({
          variables: {
            conversationId: conversation.id, // id matching
            limit: PAGE_SIZE,
            offset: 0
          }
        })
      )
    })

    it('displays the messages on the page', async () => {
      const { container } = await renderChat();

      const messageBubbles = container.querySelectorAll('.chat-message');

      expect(messageBubbles.length).toEqual(PAGE_SIZE)
    })

    it('displays the latest message at the bottom', async () => {
      const { container } = await renderChat();

      const messages = container.querySelectorAll('.chat-message .chat-message-content.text');

      expect(
        Array.from(messages).map(m => m.textContent)
      ).toEqual(
        conversation
          .messages
          .slice(0, PAGE_SIZE)
          .reverse()
          .map(m => m.content.text)
      )
    })
  })
})
