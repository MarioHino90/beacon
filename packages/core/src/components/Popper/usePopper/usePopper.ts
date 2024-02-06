import { useRef, useState, useCallback, useEffect } from "react";

import { PopperStateObject } from "../types";

/**
 * A function that abstracts the open/close logic of a popper component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the popper as its first element and the ref object to be passed to both the target and the popper
 */
export const usePopper = <E = HTMLElement>(
  targetRef?: React.RefObject<E>,
  initialState = false,
  disabled = false
): [PopperStateObject, React.RefObject<E>] => {
  const newRef = useRef<E>(null);
  const ref = targetRef || newRef;
  const [isOpen, setState] = useState(initialState);

  const onOpen = useCallback(() => {
    if (!disabled) {
      setState(true);
    }
  }, [disabled]);

  const onClose = useCallback(() => {
    if (!disabled) {
      setState(false);
    }
  }, [disabled]);

  useEffect(() => {
    if (disabled) {
      setState(false);
    }
  }, [disabled]);

  return [{ isOpen, onOpen, onClose }, ref];
};
