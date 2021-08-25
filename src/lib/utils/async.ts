type AsyncCallback<T, A extends unknown[]> = (...args: A) => Promise<T>;

type NoArgsFunction = () => any;

/**
 * Throttles execution of the async callback such that it
 * is only executed when there isn't already one underway
 */
export function throttle<T, A extends unknown[]>(fn: AsyncCallback<T, A>) {
  let promise: null | Promise<T> = null;

  return (...args: A): Promise<T> => {
    if (promise) return promise;

    promise = fn(...args)
      .then((resp: T) => {
        return resp;
      })
      .finally(() => {
        promise = null;
      });

    return promise;
  };
}

export async function fireAndForget(fn : NoArgsFunction) {
  try {
    await fn();
  } catch (e) {
    console.warn(e);
  }
}


