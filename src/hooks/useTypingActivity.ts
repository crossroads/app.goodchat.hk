import { 
  useStartTypingMutation, 
  useStopTypingMutation
} from 'generated/graphql'
import { useCallback } from 'react';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

const useTypingActivity = (conversationId: number) => {
  const [startTyping] = useStartTypingMutation({
    variables: {
      conversationId: conversationId
    }
  })
  const throttledStartTyping = useCallback(
    throttle(startTyping, 1500), 
    [startTyping]
  );

  const [stopTyping] = useStopTypingMutation({
    variables: {
      conversationId: conversationId
    }
  })
  const debouncedStopTyping = useCallback(
    debounce(stopTyping, 2000), 
    [stopTyping]
  );

  const type = () => {
    throttledStartTyping();
    debouncedStopTyping();
  }

  return type
}

export default useTypingActivity;