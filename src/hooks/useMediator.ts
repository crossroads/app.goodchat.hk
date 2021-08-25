import { useEffect, useRef } from "react";
import mediator, { Mediator } from "../lib/services/Mediator/Mediator";

type FirstArg<T extends Function> = T extends (arg: infer A, ...args: any[]) => any ? A : never;
type SecondArg<T extends Function> = T extends (arg: any, arg2: infer A, ...args: any[]) => any ? A : never;

export function useMediator(
  event: FirstArg<Mediator["on"]>,
  handler: SecondArg<Mediator["on"]>
) {
  const savedHandler = useRef<SecondArg<Mediator["on"]>>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const eventListener = (event : any) => {
        if (savedHandler.current) {
          savedHandler.current(event)
        }
      }

      mediator.on(event, eventListener);

      return () => {
        mediator.off(event, eventListener);
      };
    },
    []
  );
}

export default useMediator;
