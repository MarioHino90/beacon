import { useEffect } from "react";

import { usePopperContext } from "../PopperContext";
import { useHandleClose } from "../useHandleClose";
import { getElement } from "../utils";

export const useOutsideClick = (
  popperRef: React.RefObject<HTMLDivElement>
): void => {
  // get the popper props that we need
  const {
    ignoreCloseOnClickOutsideClassName,
    interactive,
    isIgnoreCloseOnClickOutsideEnabled,
    closeOnClickOutside,
    target,
    targetRef,
  } = usePopperContext();

  // get close handler fn
  const [onClose] = useHandleClose();

  /**
   * outside click handler
   */
  useEffect(() => {
    // if closeOnClickOutside is false
    // then short circuit
    if (!closeOnClickOutside) {
      return;
    }

    // get element from targetRef or target
    const element = getElement({ targetRef, target });

    const listener = (event) => {
      // if 'ignoreCloseOnClickOutsideClassName' is defined AND
      // 'isIgnoreCloseOnClickOutsideEnabled' is true,
      // then check for elements containing the former
      if (
        ignoreCloseOnClickOutsideClassName &&
        isIgnoreCloseOnClickOutsideEnabled
      ) {
        // get all elements with ignored class name from the DOM
        const ignoredElements = Array.from(
          document.getElementsByClassName(ignoreCloseOnClickOutsideClassName)
        );

        // loop through elements with the ignore class name
        // and short-circuit if any contains the event target
        for (let i = 0; i < ignoredElements.length; i++) {
          // get current element from array using index
          const elem = ignoredElements[i];

          // if ignored element contains the target
          // then short-circuit
          if (elem.contains(event.target)) {
            return;
          }
        }
      }

      // if element is not defined OR
      // the element contains the click target OR
      // interactive is enabled and the element is within the popper
      // then short circuit
      if (
        !element ||
        element.contains(event.target) ||
        !popperRef.current ||
        (interactive && popperRef.current.contains(event.target))
      ) {
        return;
      }

      onClose(event);
    };

    // add event listeners for outside click/tap
    document.addEventListener("mousedown", listener);

    document.addEventListener("touchstart", listener);

    // cleanup stage
    return () => {
      document.removeEventListener("mousedown", listener);

      document.removeEventListener("touchstart", listener);
    };
  }, [
    target,
    targetRef,
    onClose,
    closeOnClickOutside,
    popperRef,
    interactive,
    ignoreCloseOnClickOutsideClassName,
    isIgnoreCloseOnClickOutsideEnabled,
  ]);
};
