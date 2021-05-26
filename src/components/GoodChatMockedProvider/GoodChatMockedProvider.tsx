import {
  buildClientSchema,
  printSchema,
} from "apollo-mocked-provider/node_modules/graphql";
import createAutoMockedProvider from "lib/AutoMockedProvider/createAutoMockedProvider";
import introspectionResult from "../../../graphql.schema.json";

const typeDefs = printSchema(buildClientSchema(introspectionResult as any));

const globalMockResolvers = {
  JSON: () => ({
    type: "text",
    text: "I want to donate",
  }),
};

const GoodChatMockedProvider = createAutoMockedProvider(
  typeDefs,
  globalMockResolvers
);

export default GoodChatMockedProvider;
