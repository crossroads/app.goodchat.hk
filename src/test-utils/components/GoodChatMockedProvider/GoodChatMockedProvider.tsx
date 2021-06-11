import { printSchema, buildClientSchema } from "graphql/utilities";
import createAutoMockedProvider from "lib/AutoMockedProvider/createAutoMockedProvider"
import introspectionResult from "../../../../graphql.schema.json"

const typeDefs = printSchema(buildClientSchema(introspectionResult as any));

const globalMockResolvers = {
  JSON: () => ({
    type: "text",
    text: "I want to donate",
  }),
  DateTime: () => new Date()
};

const GoodChatMockedProvider = createAutoMockedProvider(
  typeDefs,
  globalMockResolvers
);

export default GoodChatMockedProvider;
