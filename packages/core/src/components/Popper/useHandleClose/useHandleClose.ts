import { useCallback, useEffect, useRef } from "react";

import { usePopperContext } from "../PopperContext";
import { getDelay } from "../utils";

/**
 * Hook to create a close handler that takes an optional delay
 * into account when defined
 * @returns an array where the first elem is the close handler and the second elem is the timer ref
 */
export const useHandleClose = (): [
  (event) => void,
  React.RefObject<ReturnType<typeof setTimeout> | null>
] => {
  // ref for timeouts
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // get props from context
  const { delay, onClose } = usePopperContext();

  /**
   * Function that handles closing the popper, including
   * taking into account a delay if defined
   */
  const handleClose = useCallback(
    (event) => {
      const activeDelay = getDelay(delay);

      // if delay is defined, then implement close with delay
      if (activeDelay) {
        // grab the second arg from activeDelay, which is the close delay
        const [, closeDelay] = activeDelay;

        // if closeDelay is a nullish value, then just call onClose immediately
        if (!closeDelay) {
          return onClose(event);
        }

        // set timeout and also add it to the closeTimerRef
        closeTimerRef.current = setTimeout(() => onClose(event), closeDelay);

        return;
      }

      // if no delay is defined, then just call onClose
      onClose(event);
    },
    [delay, onClose]
  );

  useEffect(() => {
    // close over the ref
    const timer = closeTimerRef;

    return () => {
      if (timer.current) {
        // ensure that when unmounted, we don't call setState
        clearTimeout(timer.current);
      }

      timer.current = null;
    };
  }, []);

  return [handleClose, closeTimerRef];
};
