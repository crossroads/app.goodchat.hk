import { NotificationsContext, NotificationTypes } from "../context/NotificationsContext"
import { useContext, useEffect, useRef } from "react"
import { useUniqueId } from "./useUniqueId"
import { QueryTypes } from "../typings/goodchat"
import { Callback } from "../typings/lang"

type MessageRecord = QueryTypes.MessageRecord;

type UseNotificationsArgs = {
  onNewMessage?: Callback<MessageRecord>
}

export const useNotifications = (args: UseNotificationsArgs) => {
  const { onNewMessage = null } = args;

  const { addListener, removeListener, error } = useContext(NotificationsContext);

  const [uid] = useUniqueId();

  const onNewMessageRef = useRef<Callback<QueryTypes.MessageRecord> | null>(null);

  onNewMessageRef.current = onNewMessage;

  useEffect(() => {
    addListener(uid, NotificationTypes.NewMessage, (arg) => {
      onNewMessageRef.current && onNewMessageRef.current(arg)
    })

    return () => {
      removeListener(uid, NotificationTypes.NewMessage)
    };
  }, []);

  return {
    error
  };
};

export default useNotifications;
