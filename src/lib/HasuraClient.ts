import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";
import { onError } from "@apollo/client/link/error";
import { debounce } from "lib/utils";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_HASURA_URL,
});

const debouncedGetHasuraToken = debounce(AuthenticationService.getHasuraToken);

const authLink = setContext(async (_, { headers }) => {
  const token = await debouncedGetHasuraToken();

  return {
    headers: {
      ...headers,
      /* 
        We send a value here ("Bearer ") even when token is 
        missing because Hasura interprets missing authorization 
        headers and even empty string as a public user.

        Instead we want Hasura to return an "invalid-jwt" error
        so that we can check for it as a condition to refresh
        the token.
      */
      authorization: `Bearer ${token}`,
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  const invalidToken = (graphQLErrors ?? []).find(
    ({ extensions }) => extensions?.code === "invalid-jwt"
  );
  if (invalidToken) AuthenticationService.invalidateToken();
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default client;
