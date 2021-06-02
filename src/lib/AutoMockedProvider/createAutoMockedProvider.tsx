import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { addMocksToSchema, IMocks } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ITypeDefinitions } from "@graphql-tools/utils";
import { mergeResolvers } from "@graphql-tools/merge";
import { SchemaLink } from "@apollo/client/link/schema";

interface AutoMockedProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
  mockResolvers?: IMocks;
}

const createAutoMockedProvider = (
  typeDefs: ITypeDefinitions,
  globalMockResolvers: IMocks = {}
) => {
  const AutoMockedProvider: React.FC<AutoMockedProviderProps> = ({
    children,
    mockResolvers = {},
  }) => {
    const schema = makeExecutableSchema({ typeDefs });
    const schemaWithMocks = addMocksToSchema({
      schema,
      // Merge global and local mock resolvers
      mocks: mergeResolvers([globalMockResolvers, mockResolvers]),
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
