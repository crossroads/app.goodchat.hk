import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const HASURA_TOKEN_KEY = "hasura_token";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_HASURA_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(HASURA_TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
