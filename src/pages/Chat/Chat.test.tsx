import { wait, waitForDomChange, waitForElement } from "@testing-library/dom"
import { Conversation, ConversationType } from "typings/goodchat"
import * as GeneratedTypes from "generated/graphql"
import userEvent, { TargetElement } from "@testing-library/user-event";
import { ionFireEvent } from "@ionic/react-test-utils"
import { ApolloError, OnSubscriptionDataOptions } from "@apollo/client";
import { renderPage } from "test-utils/renderers"
import * as factories from 'test-utils/factories'
import * as Apollo from '@apollo/client'
import { act } from "react-dom/test-utils"
import range from "lodash/range"

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
})

describe('Content', () => {
  const MESSAGE_COUNT = 55;
  const PAGE_SIZE = 25;

  // --- Data

  let conversation : Conversation

  // --- Helpers

  /**
   * Creates a function that slices the list based on the argument it receives
   *
   * @param {any[]} list
   */
  const paginator = (list: any[]) => (paginationArgs: any) => {
    const { after = 0, limit = list.length } = paginationArgs;

    expect(after).toBeGreaterThanOrEqual(0)

    if (after <= 0) {
      return list.slice(0, limit);
    }

    const idx = list.findIndex((r : any) => r.id === after);

    expect(idx).toBeGreaterThanOrEqual(0)

    return list.slice(idx, idx + limit);
  }

  /**
   * Renders the chat page with pre-defined data
   *
   * @returns
   */
  const renderChat = async () => {
    const result = await renderPage('/chats/' + conversation.id, {
      disableGlobalResolvers: true,
      mocks: {
        Conversation: () => ({
          ...conversation,
          messages: paginator(conversation.messages)
        }),
        Mutation: () => ({
          markAsRead: () => {
            const latestMessage = conversation.messages[0]
            return {
              lastReadMessageId: latestMessage.id
            }
          }
        })
      }
    })

    await waitForElement(() => result.container.querySelector('.chat-message'));

    return result;
  };

  // --- Hooks

  beforeEach(async () => {
    const now = Date.now();
    const hour = 1000 * 60 * 60;

    // Create all the data needed for the test
    conversation = factories.conversationFactory.build({
      type: ConversationType.Customer,
      messages: range(MESSAGE_COUNT).map((i) => factories.messageFactory.build({
        createdAt: new Date(now - i * hour)
      }))
    });
  });

  // --- Tests

  test("renders without crashing", async () => {
    const { container } = await renderChat();
    expect(container).toBeInTheDocument();
  });

  test('fires markAsRead event on mount', async () => {
    const mockMarkAsRead = jest.fn()
    jest.spyOn(GeneratedTypes,'useMarkAsReadMutation').mockReturnValue([
      mockMarkAsRead,
      {} as any
    ])

    await renderChat();

    expect(mockMarkAsRead).toHaveBeenCalledTimes(1)
  })

  test('fires markAsRead event whenever a new message comes in', async () => {
    const mockMarkAsRead = jest.fn()
    jest.spyOn(GeneratedTypes,'useMarkAsReadMutation').mockReturnValue([
      mockMarkAsRead,
      {} as any
    ])

    let onSubscriptionData: (options: OnSubscriptionDataOptions<GeneratedTypes.NewMessagesSubSubscription>) => any;
    const original = GeneratedTypes.useNewMessagesSubSubscription;
    jest.spyOn(GeneratedTypes, 'useNewMessagesSubSubscription')
      .mockImplementation(({...args}) => {
        onSubscriptionData = args.onSubscriptionData!
        return original({...args})
      })

    await renderChat();

    mockMarkAsRead.mockClear()
    expect(mockMarkAsRead).not.toHaveBeenCalled()

    act(() => {
      onSubscriptionData({
        client: {} as any,
        subscriptionData: {
          loading: false,
          error: undefined,
          data: {
            messageEvent: {
              action: GeneratedTypes.SubscriptionAction.Create,
              message: factories.messageFactory.build({
                content: {
                  type: 'text',
                  text: 'a subscription message'
                }
              })
            }
          }
        }
      })
    })

    expect(mockMarkAsRead).toHaveBeenCalledTimes(1)
  })

  describe('Header', () => {
    test(`customer chats should have the customer name as title`, async () => {
      const { container } = await renderChat();
      const customerName = conversation.customer?.displayName as string

      expect(customerName.length).toBeGreaterThan(0)
      expect(container!.querySelector("ion-header ion-title")).toHaveTextContent(customerName)
    });

    test("should contain a back button", async () => {
      const { container } = await renderChat();
      expect(
        container!.querySelector("ion-header ion-back-button")
      ).toBeInTheDocument();
    });

    test("back button should default to /chats", async () => {
      const { container } = await renderChat();

      expect(container.querySelector("ion-header ion-back-button")).toHaveAttribute(
        "default-href",
        "/chats"
      );
    })
  })

  describe('Message list', () => {
    it('loads the messages of the correct conversation', async () => {
      let refetch : any;

      const original = Apollo.useQuery as any;
      const spy = jest.spyOn(Apollo, 'useQuery').mockImplementationOnce((...args: any[]) => {
        const res = original(...args);
        refetch = jest.spyOn(res, 'refetch');
        return res;
      })

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
          skip: true
        })
      )

      await wait(() => expect(refetch).toBeCalledTimes(1))

      expect(refetch).toBeCalledWith({
        after: 0,
        conversationId: conversation.id,
        limit: PAGE_SIZE
      })
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

    describe('Sending messages', () => {

      /**
       * Fills in the input box and presses the send button
       *
       * @param {HTMLElement} container
       * @param {string} text
       */
      const submitText = (container: HTMLElement, text: string) => {
        const textarea = container.querySelector('.chat-message-input ion-textarea');
        const button = container.querySelector('ion-button');

        expect(textarea).toBeInTheDocument();
        expect(button).toBeInTheDocument();

        ionFireEvent.ionChange(textarea!, text);

        userEvent.click(button as TargetElement);
      }

      /**
       * Mocks the Apollo useMutation
       *
       */
      const mockPostMessage = (opts : { success: boolean, delay: number }) => {
        const postMessageMock = jest.fn().mockImplementation(async ({ variables }) => {

          await new Promise((r) => setTimeout(r, opts.delay));

          if (!opts.success) {
            const error = new ApolloError({ errorMessage: 'oh noes' })
            return { data: null, errors: [error] }
          }

          return {
            data: {
              sendMessage: factories.messageFactory.build({
                conversationId: variables.conversationId,
                content: {
                  type: 'text',
                  text: variables.text
                }
              })
            }
          }
        });

        jest.spyOn(GeneratedTypes,'useSendMessageMutation').mockReturnValue([
          postMessageMock, {} as any
        ])

        return postMessageMock;
      }

      it('renders processing messages immediatly as pending', async () => {
        const postMessageMock = mockPostMessage({ delay: 100, success: true });
        const { container } = await renderChat();

        expect(
          container.querySelectorAll('.chat-message')
        ).toHaveLength(PAGE_SIZE);

        submitText(container, 'new message')

        await waitForDomChange()

        expect(postMessageMock).toBeCalledTimes(1)

        expect(
          container.querySelectorAll('.chat-message')
        ).toHaveLength(PAGE_SIZE + 1);

        expect(container.querySelector('ion-item:last-child .chat-message .chat-message-footer')).toHaveTextContent('Pending');
      })

      it('removes the Pending status and sets the timestamp on success', async () => {
        const postMessageMock = mockPostMessage({ delay: 100, success: true });
        const { container } = await renderChat();

        expect(
          container.querySelectorAll('.chat-message')
        ).toHaveLength(PAGE_SIZE);

        submitText(container, 'new message')

        await waitForDomChange()

        expect(postMessageMock).toBeCalledTimes(1)

        expect(
          container.querySelectorAll('.chat-message')
        ).toHaveLength(PAGE_SIZE + 1);

        expect(container.querySelector('ion-item:last-child .chat-message .chat-message-footer')).toHaveTextContent('Pending');

        await wait(() => {
          expect(container.querySelector('ion-item:last-child .chat-message .chat-message-footer')).toHaveTextContent(/\d\d:\d\d/);
        })
      })

      it('sets Failed status on error', async () => {
        const postMessageMock = mockPostMessage({ delay: 100, success: false });
        const { container } = await renderChat();

        expect(
          container.querySelectorAll('.chat-message')
        ).toHaveLength(PAGE_SIZE);

        submitText(container, 'new message')

        await waitForDomChange()

        expect(postMessageMock).toBeCalledTimes(1)

        expect(
          container.querySelectorAll('.chat-message')
        ).toHaveLength(PAGE_SIZE + 1);

        expect(container.querySelector('ion-item:last-child .chat-message .chat-message-footer')).toHaveTextContent('Pending');

        await wait(() => {
          expect(container.querySelector('ion-item:last-child .chat-message .chat-message-footer')).toHaveTextContent('Failed');
        })
      })

      it('clears text input on submit', async () => {
        const postMessageMock = mockPostMessage({ delay: 100, success: true });
        const { container } = await renderChat();

        act(() => submitText(container, '1'))

        const textArea = container.querySelector('.chat-message-input ion-textarea')
        expect(textArea).toHaveAttribute('value', '1');

        const submitButton = container.querySelector('.chat-message-input ion-button')
        ionFireEvent.click(submitButton!)

        await wait(() => expect(postMessageMock).toHaveBeenCalledTimes(1))
        
        expect(textArea).toHaveAttribute('value', '')
      });
    })
  })

  describe('Message input', () => {
    it('should fire start typing mutation onChange', async () => {
      const startTypingMock = jest.fn()
      jest.spyOn(GeneratedTypes, 'useStartTypingMutation')
        .mockReturnValue([startTypingMock, {} as any])

      const { container } = await renderChat()

      const textArea = container.querySelector('.chat-message-input ion-textarea');
      ionFireEvent.ionChange(textArea!, '1')

      expect(startTypingMock).toHaveBeenCalledTimes(1)
    })

    it('should throttle firing startTyping mutations', async () => {
      const startTypingMock = jest.fn()
      jest.spyOn(GeneratedTypes, 'useStartTypingMutation')
        .mockReturnValue([startTypingMock, {} as any])

      const { container } = await renderChat()

      const textArea = container.querySelector('.chat-message-input ion-textarea');
      ionFireEvent.ionChange(textArea!, '1')
      ionFireEvent.ionChange(textArea!, '2')

      expect(startTypingMock).toHaveBeenCalledTimes(1)
    })
  });

  describe('Subscriptions', () => {

    it('subscribes to new messages', async () => {
      const spy = jest.spyOn(Apollo, 'useSubscription')

      await renderChat();

      expect(spy).toBeCalledWith(
        expect.objectContaining({
          definitions: expect.arrayContaining([
            expect.objectContaining({
              operation: "subscription",
              name: {
                kind: 'Name',
                value: 'NewMessagesSub'
              }
            })
          ])
        }),
        expect.objectContaining({
          variables: {
            conversationId: conversation.id, // id matching
          }
        })
      )
    })

    it('appends new messages to the bottom of the chat', async () => {
      let onSubscriptionData : any= null;

      const original = Apollo.useSubscription
      const spy = jest.spyOn(Apollo, 'useSubscription').mockImplementation((...args) => {
        // Catch the callback in order to trigger subscriptions ourselves
        onSubscriptionData = (args[1]?.onSubscriptionData || null)
        return original(...args);
      });

      const { container } = await renderChat();

      expect(spy).toBeCalledWith(
        expect.any(Object),
        expect.objectContaining({
          onSubscriptionData: expect.any(Function)
        })
      )

      expect(container.querySelectorAll('ion-item')).toHaveLength(PAGE_SIZE)
      expect(onSubscriptionData).not.toBeNull();

      act(() => {
        onSubscriptionData({
          client: {} as any,
          subscriptionData: {
            loading: false,
            error: undefined,
            data: {
              messageEvent: {
                action: 'CREATE',
                message: factories.messageFactory.build({
                  content: {
                    type: 'text',
                    text: 'a subscription message'
                  }
                })
              }
            }
          }
        })
      })

      await wait(() => {
        expect(container.querySelectorAll('ion-item')).toHaveLength(PAGE_SIZE + 1)
      });

      const lastMessage = container.querySelector('ion-item:last-child .chat-message .chat-message-content.text');
      expect(lastMessage).toBeInTheDocument();
      expect(lastMessage).toHaveTextContent('a subscription message')
    })
  })
})
