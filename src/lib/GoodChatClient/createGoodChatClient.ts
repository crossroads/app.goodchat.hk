import { ApolloClient, createHttpLink, split, InMemoryCache } from "@apollo/client";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from "@apollo/client/link/context";

const GOODCHAT_BASE_URL = process.env.REACT_APP_GOODCHAT_URL;
const GRAPHQL_URL = GOODCHAT_BASE_URL + '/graphql';
const WS_URL = GOODCHAT_BASE_URL?.replace(/^http/, 'ws') + '/graphql/subscriptions';

// --------------------------
// ~ HELPERS
// --------------------------

const getAuthHeaders = () => {
  const token = AuthenticationService.getGoodCityToken();
  return {
    authorization: token ? `Bearer ${token}` : null
  }
}

// --------------------------
// ~ APOLLO SETUP
// --------------------------

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true,
    connectionParams: () => getAuthHeaders()
  }
});

const httpLink = createHttpLink({
  uri: GRAPHQL_URL
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...getAuthHeaders()
    },
  };
});

const createGoodChatClient = () =>
  new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        /**
         * Apollo Client first executes the query against the cache
         *
         * Source: Source: https://www.apollographql.com/docs/react/data/queries/
         *
         * We use this strategy to ensure data consistency.
         */
        fetchPolicy: "no-cache"
      },
      query: {
        /**
         * Apollo Client executes the full query against your GraphQL server, without first checking the cache.
         * The query's result is stored in the cache
         *
         * Source: https://www.apollographql.com/docs/react/data/queries/
         *
         * We use this strategy to ensure data consistency.
         */
        fetchPolicy: "no-cache",
      },
    },
  });

export default createGoodChatClient;
