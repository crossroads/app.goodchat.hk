import { Factory } from 'fishery'
import faker from 'faker'
import {
  Message,
  Conversation,
  MessageTextContent,
  MessageImageContent,
  AuthorType,
  DeliveryStatus
} from '../../typings/goodchat'
import { conversationFactory } from './conversation.factory';
import { generatePartialFactory } from './helpers';

// ---------------------------------
// ~ CONTENT FACTORIES
// ---------------------------------

export const textContentFactory =  Factory.define<MessageTextContent>(() => ({
  type: 'text',
  text: faker.random.words(5)
}));

export const imageContentFactory =  Factory.define<MessageImageContent>(() => ({
  type: 'image',
  mediaUrl: faker.image.imageUrl(),
  mediaType: 'image/png',
  mediaSize: faker.datatype.number(),
  altText: faker.lorem.words(3)
}))

// ---------------------------------
// ~ MESSAGe FACTORY
// ---------------------------------

export const messageFactory = Factory.define<Message>(({ sequence, params }) => {
  const date = new Date();
  const conversationId = params.conversationId || 9999 + sequence;

  const message : Message = {
    __typename: 'Message',
    id: sequence,
    createdAt: date,
    updatedAt: date,
    conversationId: conversationId,
    authorType: AuthorType.SYSTEM,
    authorId: 0,
    conversation: {} as Conversation,
    content: textContentFactory.build(),
    metadata: {},
    customerDeliveryStatus: DeliveryStatus.Unsent
  }

  const conversation = conversationFactory.build({
    messages: [message],
    id: conversationId
  })

  return {
    ...message,
    conversation: conversation
  }
});

// ---------------------------------
// ~ PARTIAL MESSAGES
// ---------------------------------

export const messageFields = generatePartialFactory(conversationFactory)
