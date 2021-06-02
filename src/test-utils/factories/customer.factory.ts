import { conversationFactory } from './conversation.factory';
import { ConversationType, Customer } from '../../typings/goodchat'
import { Factory } from 'fishery'
import faker from 'faker'
import { generatePartialFactory } from './helpers';

// ---------------------------------
// ~ CUSTOMER FACTORY
// ---------------------------------

export const customerFactory = Factory.define<Customer>(({ sequence, params }) => {
  const date = new Date();
  const id = sequence;

  const customer : Customer = {
    __typename: 'Customer',
    id: id,
    externalId: null,
    createdAt: date,
    displayName: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: faker.internet.email(),
    avatarUrl: faker.internet.avatar(),
    locale: 'en',
    metadata: {},
    conversations: []
  }

  const conversations = (params.conversations || conversationFactory.buildList(1)).map(c => ({
    ...c,
    customerId: id,
    customer: customer,
    type: ConversationType.Customer
  }))

  return {
    ...customer,
    conversations: conversations
  }
});

// ---------------------------------
// ~ PARTIAL CUSTOMERS
// ---------------------------------

export const customerFields = generatePartialFactory(conversationFactory)
