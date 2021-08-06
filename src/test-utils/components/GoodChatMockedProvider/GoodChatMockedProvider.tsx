import { buildClientSchema } from "graphql";
import createAutoMockedProvider from "lib/AutoMockedProvider/createAutoMockedProvider"
import { conversationFactory } from "test-utils/factories";
import * as introspectionResult from "../../../../graphql.schema.json"

const schema = buildClientSchema(introspectionResult as any);

const globalMockResolvers = {
  Conversation: () => conversationFactory.build(),
  DateTime: () => new Date()
};

const GoodChatMockedProvider = createAutoMockedProvider(
  schema,
  globalMockResolvers
);

export default GoodChatMockedProvider;
