import { useEffect, useRef } from "react";

import { usePopperContext } from "../PopperContext";
import { getDelay } from "../utils";

/**
 *
 */
export const useHandleOpen = (): [
  (event) => void,
  React.RefObject<ReturnType<typeof setTimeout> | null>
] => {
  // ref for timeouts
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // get props from context
  const { delay, onOpen } = usePopperContext();

  /**
   * Function that handles opening the popper, including
   * taking into account a delay if defined
   */
  const handleOpen = (event) => {
    const activeDelay = getDelay(delay);

    // if delay is defined, then implement open with delay
    if (!activeDelay) {
      // if no delay is defined, then just call onOpen
      onOpen(event);

      return;
    }

    // grab the first arg from activeDelay, which is the open delay
    const [openDelay] = activeDelay;

    // if openDelay is a nullish value, then just call onOpen immediately
    if (!openDelay) {
      onOpen(event);

      return;
    }

    if (timerRef.current) {
      // if the user triggers the timer while any are pending, clear the timer

      clearTimeout(timerRef.current);
    }

    // set timeout and also add it to the openTimerRef
    timerRef.current = setTimeout(() => {
      timerRef.current = null;

      onOpen(event);
    }, openDelay);
  };

  useEffect(() => {
    // close over the ref
    const timer = timerRef;

    return () => {
      if (timer.current) {
        // ensure that when unmounted, we don't call setState
        clearTimeout(timer.current);
      }

      timer.current = null;
    };
  }, []);

  return [handleOpen, timerRef];
};
