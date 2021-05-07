import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AuthenticationService from "lib/services/AuthenticationService/AuthenticationService";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GOODCHAT_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = AuthenticationService.getGoodCityToken();
  // // const token =
  // //   "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOSwibWV0YWRhdGEiOnsidHlwZSI6ImFwaSIsImFwaV92ZXJzaW9uIjoidjIifSwiaWF0IjoxNjIwMjY3NzcyLCJpc3MiOiJHb29kQ2l0eUhLIiwiZXhwIjoxNjIxNDc3MzcyLCJodHRwczovL2dvb2RjaXR5LmhrL2p3dC9tZXRhZGF0YSI6eyJ0eXBlIjoiYXBpIn19.X_O4UusR_-PUf2zS7oV7tQiCeI0UEWswEhte4bQ_Nxw";
  // const token = "";
  // const token = null;

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
