type AsyncCallback<T, A extends unknown[]> = (...args: A) => Promise<T>;

function throttle<T, A extends unknown[]>(fn: AsyncCallback<T, A>) {
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

export { throttle };
