import { BaseError, normalizeError } from "lib/errors";
import { useCallback, useEffect, useRef, useState } from "react";

type AsyncCallback<T, A extends unknown[]> = (...args: A) => Promise<T>;

type useAsyncReturnTuple<T, A extends unknown[]> = [
  data: T | null,
  error: BaseError | null,
  isLoading: boolean,
  execute: (...args: A) => void
];

const useAsync = <T, A extends unknown[]>(
  asyncCallback: AsyncCallback<T, A>
): useAsyncReturnTuple<T, A> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<BaseError | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isMounted = useRef(false);

  const execute = useCallback((...args: A) => {
    setIsLoading(true);
    setError(null);
    asyncCallback(...args)
      .then((resp) => {
        if (isMounted.current) setData(resp);
      })
      .catch((e: unknown) => {
        if (isMounted.current) setError(normalizeError(e));
      })
      .finally(() => {
        if (isMounted.current) setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return [data, error, isLoading, execute];
};

export default useAsync;
