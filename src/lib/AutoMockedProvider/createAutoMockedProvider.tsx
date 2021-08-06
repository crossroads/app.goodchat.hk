import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { addMocksToSchema, createMockStore, IMockStore, IMocks } from "@graphql-tools/mock";
import { addResolversToSchema, makeExecutableSchema } from "@graphql-tools/schema";
import { IResolvers, TypeSource } from "@graphql-tools/utils";
import { mergeResolvers } from "@graphql-tools/merge";
import { SchemaLink } from "@apollo/client/link/schema";
import { GraphQLSchema } from "graphql";

interface AutoMockedProviderProps {
  mockResolvers?: IResolvers;
  disableGlobalResolvers?: boolean,
  populateStore?: (store: IMockStore) => any
}

const createAutoMockedProvider = (
  schema: GraphQLSchema,
  globalMockResolvers: IResolvers = {}
) => {
  const AutoMockedProvider: React.FC<AutoMockedProviderProps> = ({
    children,
    mockResolvers = {},
    populateStore = () => {},
    disableGlobalResolvers = false,
  }) => {
    // const schema = makeExecutableSchema({
    //   typeDefs,
    //   // resolvers: mockResolvers
    // });

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
      // Merge global and local mock resolvers
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
