import { ApolloProvider } from "@apollo/client";
import createGoodChatClient from "lib/GoodChatClient/createGoodChatClient";
import { NotificationsProvider } from "../NotificationsProvider/NotificationsProvider"

const GoodChatClient = createGoodChatClient();

interface GoodChatProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}
const GoodChatProvider: React.FC<GoodChatProviderProps> = ({ children }) => (
  <ApolloProvider client={GoodChatClient}>
    <NotificationsProvider>
      {children}
    </NotificationsProvider>
  </ApolloProvider>
);

export default GoodChatProvider;
