import { Callback, Maybe } from '../typings/lang'
import { ApolloError } from '@apollo/client'
import { QueryTypes } from '../typings/goodchat'
import React from "react";

export enum NotificationTypes {
  NewMessage = 'newMessage'
}

export interface NotificationsContextProps {
  addListener(uid: number, ev: NotificationTypes.NewMessage, cb: Callback<QueryTypes.MessageRecord> | null) : any
  removeListener(uid: number, ev: NotificationTypes.NewMessage) : any
  error: Maybe<ApolloError>
}

export const NotificationsContext = React.createContext<NotificationsContextProps>({
  addListener: () => {},
  removeListener: () => {},
  error: null
});
