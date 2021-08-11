import { useNewMessagesSubSubscription } from '../../generated/graphql'
import { Callback } from '../../typings/lang'
import React, { useState } from "react"
import omit from "lodash/omit";
import {
  NotificationsContext,
  NotificationsContextProps,
  NotificationTypes
} from '../../context/NotificationsContext';

type ListenerMap = {
  [key in NotificationTypes]: {
    [key: number]: Callback<any>
  }
}

export const NotificationsProvider: React.FC = ({ children }) => {
  const [listeners, setListeners] = useState<ListenerMap>(
    Object
      .values(NotificationTypes)
      .reduce((obj, key) => ({ ...obj, [key]: [] }), {}) as ListenerMap
  )

  const { error } = useNewMessagesSubSubscription({
    onSubscriptionData: ({ subscriptionData }) => {
      const message = subscriptionData.data?.messageEvent?.message

      if (message) {
        Object.values(listeners[NotificationTypes.NewMessage]).forEach(cb => {
          cb(message);
        })
      }
    }
  });

  const ctx : NotificationsContextProps = {
    error: error || null,
    addListener(id, ev, cb) {
      if (!cb) return;

      setListeners((handlers) => {
        return {
          ...handlers,
          [ev]: { ...handlers[ev], [id]: cb }
        };
      })
    },
    removeListener(id, ev) {
      setListeners((handlers) => {
        return {
          ...handlers,
          [ev]: omit(handlers[ev], id)
        };
      })
    }
  }

  return (
    <NotificationsContext.Provider value={ctx}>
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
