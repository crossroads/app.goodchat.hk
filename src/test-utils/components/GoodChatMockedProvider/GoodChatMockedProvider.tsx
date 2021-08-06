import { buildClientSchema } from "graphql";
import createAutoMockedProvider from "lib/AutoMockedProvider/createAutoMockedProvider"
import * as introspectionResult from "../../../../graphql.schema.json"

const schema = buildClientSchema(introspectionResult as any);

const GoodChatMockedProvider = createAutoMockedProvider(
  schema
);

export default GoodChatMockedProvider;
