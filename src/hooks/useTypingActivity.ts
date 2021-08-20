import { fireAndForget } from 'lib/utils/async';
import { useCallback } from 'react';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import {
  useStartTypingMutation,
  useStopTypingMutation
} from 'generated/graphql'


const useTypingActivity = (conversationId: number) => {
  const [startTyping] = useStartTypingMutation({
    variables: {
      conversationId: conversationId
    }
  })
  const throttledStartTyping = useCallback(
    throttle(() => fireAndForget(startTyping), 1500),
    [startTyping]
  );

  const [stopTyping] = useStopTypingMutation({
    variables: {
      conversationId: conversationId
    }
  })

  const debouncedStopTyping = useCallback(
    debounce(() => fireAndForget(stopTyping), 2000),
    [stopTyping]
  );

  const type = () => {
    throttledStartTyping();
    debouncedStopTyping();
  }

  return type
}

export default useTypingActivity;
