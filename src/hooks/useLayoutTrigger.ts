import { useState, useEffect } from "react"

type EffectFunc = () => any
type TriggerFunc = () => any

type UseCounterTuple = [TriggerFunc]

/**
 * Similar to useEffect, except it returns a trigger function used to start up the effect.
 * Uses a timeout of 0 to trigger the effect post-rendering
 *
 * @param {EffectFunc} fn
 * @returns {UseCounterTuple}
 */
 export const useLayoutTrigger = (fn: EffectFunc) : UseCounterTuple => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      const timeout = setTimeout(fn, 0);
      return () => clearTimeout(timeout);
    }
  }, [counter])

  const trigger : TriggerFunc = () => {
    setCounter(v => v + 1);
  }

  return [trigger];
}
