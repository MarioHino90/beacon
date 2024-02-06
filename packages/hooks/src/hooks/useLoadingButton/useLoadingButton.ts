import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  ButtonLoadingState,
  UseLoadingButtonResult,
  UseLoadingOptions,
} from "./types";

/**
 * Hook that acts as a state machine for a `Button` component via user supplied values
 *
 * @param status indicates that the resource triggered by the button click is currently loading
 * @param options additional options to help configure hook behavior
 */
export const useLoadingButton = (
  status: ButtonLoadingState,
  { ref, resetOnError, timeout }: UseLoadingOptions = { timeout: 3000 }
): [UseLoadingButtonResult, () => void] => {
  // manage loading state
  const [loadingState, setLoadingState] = useState<ButtonLoadingState>("idle");

  // state to manage the min width of the button to prevent jerkiness
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);

  // create a ref to use in case user hasn't provided one
  const innerRef = useRef<HTMLButtonElement>(null);

  // use user provided ref, if it exists; otherwise default to innerRef
  const activeRef = ref ?? innerRef;

  // effectively turn the loading state into a quasi-state machine
  useEffect(() => {
    // if loading state is currently idle and the user provided status value is "loading"
    // then switch state to "loading"
    if (loadingState === "idle" && status === "loading") {
      return setLoadingState("loading");
    }

    // if loading state is currently loading and the user provided status value is "success"
    // then switch state to "success"
    if (loadingState === "loading" && status === "success") {
      return setLoadingState("success");
    }

    // if loading state is currently loading and the user provided status value is "error"
    // then switch state to "error"
    if (loadingState === "loading" && status === "error") {
      return setLoadingState("error");
    }
  }, [loadingState, status]);

  // effectively turn the loading state into a quasi-state machine (continued)
  useEffect(() => {
    // if loading outcome is not defined, then bail
    if (loadingState === "idle" || loadingState === "loading") {
      return;
    }

    // if loading state is error but reset on error is disabled, then do not auto-reset back to idle
    if (loadingState === "error" && !resetOnError) {
      return;
    }

    // set a timeout to return loading state back to idle after timeout elapsed
    const timeoutRef = setTimeout(() => {
      setLoadingState("idle");
    }, timeout);

    // clear timeout on unmount to prevent memory leaks
    return () => {
      clearTimeout(timeoutRef);
    };
  }, [loadingState, resetOnError, status, timeout]);

  const observer = useRef(
    new ResizeObserver((entries) => {
      // extract resize observer target
      const { target } = entries[0];

      // grab the loading state from the DOM (the most currently up-to-date relative to min-width)
      const loadingState = target.getAttribute("data-loading-state");

      // if the DOM loading state is NOT 'idle', bail
      if (loadingState !== "idle") {
        return;
      }

      // otherwise, get the bounding client rect of the target element
      const { width } = target.getBoundingClientRect();

      // use it to set min-width
      setMinWidth(width);
    })
  );

  useEffect(() => {
    // if no button element found, then bail
    if (!activeRef.current) {
      return;
    }

    // save refs into local values to prevent unexpected errors
    const elem = activeRef.current;
    const obs = observer.current;

    // observe resize changes to the button element
    obs.observe(elem);

    // cleanup resize observer on unmount
    return () => {
      obs.unobserve(elem);
    };
  }, [activeRef]);

  // props to be passed directly into the button to manage its loading state
  const buttonProps = useMemo(
    () => ({ loadingState, ref: activeRef, minWidth }),
    [activeRef, loadingState, minWidth]
  );

  // reset function to imperatively reset loading state to 'idle'
  const handleReset = useCallback(() => {
    setLoadingState("idle");
  }, []);

  return [buttonProps, handleReset];
};
