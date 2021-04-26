import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GOODCHAT_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = AuthenticationService.getGoodCityToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const createGoodChatClient = () =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    /**
     * We just disable the cache by default since
     * this client mostly deals with realtime data
     */
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
    },
  });

export default createGoodChatClient;
