import { BaseError, normalizeError } from "lib/errors";
import { useState } from "react";
import { useSafeSetState } from "./useSafeSetState";

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
  const safeSetState = useSafeSetState();

  const execute = (...args: A) => {
    setIsLoading(true);
    setError(null);
    asyncCallback(...args)
      .then((resp) => safeSetState(() => setData(resp)))
      .catch((e: unknown) => safeSetState(() => setError(normalizeError(e))))
      .finally(() => safeSetState(() => setIsLoading(false)));
  };

  return [data, error, isLoading, execute];
};

export default useAsync;
