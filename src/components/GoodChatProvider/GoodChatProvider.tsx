import { ApolloProvider } from "@apollo/client";
import createGoodChatClient from "lib/GoodChatClient/createGoodChatClient";

const GoodChatClient = createGoodChatClient();

interface GoodChatProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}
const GoodChatProvider: React.FC<GoodChatProviderProps> = ({ children }) => (
  <ApolloProvider client={GoodChatClient}>{children}</ApolloProvider>
);

export default GoodChatProvider;
