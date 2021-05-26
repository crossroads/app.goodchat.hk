import {
  buildClientSchema,
  printSchema,
} from "apollo-mocked-provider/node_modules/graphql";
import createAutoMockedProvider from "lib/AutoMockedProvider/createAutoMockedProvider";
import introspectionResult from "../../../graphql.schema.json";

const typeDefs = printSchema(buildClientSchema(introspectionResult as any));

const GoodChatMockedProvider = createAutoMockedProvider(typeDefs);

export default GoodChatMockedProvider;
