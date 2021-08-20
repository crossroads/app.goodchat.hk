import { generatePartialFactory } from './helpers';
import { customerFactory } from './customer.factory';
import { messageFactory } from './message.factory';
import { Factory } from 'fishery'
import {
  Conversation,
  Message,
  ConversationType,
  DeliveryStatus
} from '../../typings/goodchat'

// ---------------------------------
// ~ TYPES
// ---------------------------------

export type ConversationFactoryParams = {
  messageCount?: number
}

export type ConversationField = keyof Conversation

// ---------------------------------
// ~ FACTORY
// ---------------------------------

export const conversationFactory = Factory.define<Conversation, ConversationFactoryParams>(({ sequence, params, transientParams }) => {
  const date = new Date();
  const id = sequence;

  const messages : Message[] = (
    params.messages ||
    messageFactory.buildList(transientParams.messageCount || 3)
  ).map((m, idx) => ({
    ...m,
    conversationId: id,
    createdAt: new Date(Date.now() - idx * 1000)
  }));

  const conversation : Conversation = {
    __typename: 'Conversation',
    id: id,
    customerId: null,
    customer: null,
    source: 'whatsapp',
    type: params.type || params.customer ? ConversationType.Customer : ConversationType.Public,
    metadata: {},
    createdAt: date,
    updatedAt: date,
    messages: messages,
    readReceipts: [],
    staffs: [],
    tags: [],
    _computed: {
      conversationId: id,
      totalMessageCount: 0,
      unreadMessageCount: 0
    }
  }

  if (conversation.type === ConversationType.Customer) {
    conversation.customer = customerFactory.build();
    conversation.customerId = conversation.customer.id;
    conversation.customer.conversations = [{ ...conversation }];
  }

  return conversation;
});

// ---------------------------------
// ~ PARTIAL CONVERSATION
// ---------------------------------

export const conversationFields = generatePartialFactory(conversationFactory)
