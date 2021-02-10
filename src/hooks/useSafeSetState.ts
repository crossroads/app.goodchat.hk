import { useEffect, useRef } from "react";

export const useSafeSetState = () => {
  const isMounted = useRef(false);

  const safeSetState = (setStateCallback: () => React.SetStateAction<any>) => {
    if (isMounted.current) setStateCallback();
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return safeSetState;
};
