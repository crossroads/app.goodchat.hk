import React, { useEffect, useRef } from "react";

type AnyFunc = (...args: any[]) => any

export type UseMutationBaseOptions = {
  once?: boolean,
  observer: MutationObserverInit
}

/**
 * Triggers a callback if changes occur to the referenced element
 *
 * @param {React.RefObject<any>} elementRef
 * @param {UseMutationBaseOptions} opts
 * @param {MutationCallback} callback
 */
function useMutationBase(elementRef : React.RefObject<any>, opts: UseMutationBaseOptions, callback : MutationCallback) {
  const callbackRef = useRef<AnyFunc | null>(null);

  callbackRef.current = callback;

  useEffect(() => {
    let disconnected = false;
    let observer : MutationObserver;

    const disconnect = () => {
      if (!disconnected) {
        disconnected = true;
        observer.disconnect();
      }
    }

    observer = new MutationObserver((...args) => {
      if (callbackRef.current) {
        if (opts.once) { disconnect() }
        setTimeout(() => callbackRef.current!(...args), 0);
      }
    })

    observer.observe(elementRef.current, opts.observer);

    return disconnect;
  }, [])
}

// ---------------------
// Exported API
// ---------------------

export const useMutation = (elementRef : React.RefObject<any>, opts: MutationObserverInit, callback : MutationCallback) => {
  return useMutationBase(elementRef, { observer: opts, once: false }, callback);
}

export const useMutationOnce = (elementRef : React.RefObject<any>, opts: MutationObserverInit, callback : MutationCallback) => {
  return useMutationBase(elementRef, { observer: opts, once: true }, callback);
}

export const useOnceContentRendered = (elementRef : React.RefObject<any>, callback : MutationCallback) => {
  return useMutationOnce(elementRef, { childList: true }, callback);
}


