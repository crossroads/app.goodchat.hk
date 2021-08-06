import { addMocksToSchema, createMockStore, IMockStore } from "@graphql-tools/mock"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { GraphQLSchema } from "graphql";
import { IResolvers } from "@graphql-tools/utils";
import { SchemaLink } from "@apollo/client/link/schema";

interface AutoMockedProviderProps {
  mockResolvers?: IResolvers
  populateStore?: (store: IMockStore) => any
}

const createAutoMockedProvider = (
  schema: GraphQLSchema
) => {
  const AutoMockedProvider: React.FC<AutoMockedProviderProps> = ({
    children,
    mockResolvers = {},
    populateStore = () => {}
  }) => {

    const store = createMockStore({
      schema,
      mocks: mockResolvers
    });

    populateStore(store);

    const schemaWithMocks = addMocksToSchema({
      schema,
      store,
      resolvers: mockResolvers,
      preserveResolvers: true
    });


    const client = new ApolloClient({
      /**
       * https://www.apollographql.com/docs/react/api/link/apollo-link-schema/
       * SchemaLink used for mocking data + avoiding network calls
       */
      link: new SchemaLink({ schema: schemaWithMocks }),
      cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  };

  return AutoMockedProvider;
};

export default createAutoMockedProvider;
