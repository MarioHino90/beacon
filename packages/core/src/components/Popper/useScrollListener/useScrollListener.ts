import { useEffect } from "react";

import { usePopperContext } from "../PopperContext";

const debounce = (func: () => void, delay: number): (() => void) => {
  let timerId;

  return (...args) => {
    const boundFunc = func.bind(this, ...args);

    clearTimeout(timerId);

    timerId = setTimeout(boundFunc, delay);
  };
};

/**
 * scroll listener
 */
export const useScrollListener = (placementCallback: () => void): void => {
  const { isOpen } = usePopperContext();

  useEffect(() => {
    // if popper is not open, then bail to avoid unnecessary ops
    if (!isOpen) {
      return;
    }

    // debounce the placement callback to happen every 25 milliseconds
    // to prevent jaggy behavior
    const debouncedCallback = debounce(() => {
      placementCallback();
    }, 25);

    // on user scroll, update placement
    document.addEventListener("scroll", debouncedCallback, true);

    // cleanup stage
    return () => {
      document.removeEventListener("scroll", debouncedCallback, true);
    };
  }, [isOpen, placementCallback]);
};
