import { useCallback, useEffect, useRef } from "react";

import { usePopperContext } from "../PopperContext";
import { AllowedUnTriggers } from "../types";
import { useHandleClose } from "../useHandleClose";
import { useHandleOpen } from "../useHandleOpen";
import { useMouseLeave } from "../useMouseLeave";
import { extractInteractiveChildren, getElement } from "../utils";

// these untriggers cause buggy behavior when included as is
// and need to be handled separately
const excludedUntriggers: AllowedUnTriggers[] = ["mouseleave"];

const getScrollableParentElements = (
  node: HTMLElement | undefined | null
): HTMLElement[] => {
  const ret: HTMLElement[] = [];

  if (!node) {
    return ret;
  }

  if (node.scrollHeight > node.clientHeight) {
    ret.push(node);
  }

  return ret.concat(getScrollableParentElements(node.parentElement));
};

/**
 * Hook that handles event subscription for the popper
 * component and updates its placement when changes are made
 * as necessary
 * @param popperRef ref object pointing to the popper element
 * @param placementCallback function that will recalculate the
 * placement of the popper when invokes
 */
export const usePopperEvents = (
  popperRef: React.RefObject<HTMLDivElement>
): void => {
  // get props from context
  const {
    placement,
    triggers,
    untriggers,
    target,
    targetRef,
    closeOnClickOutside,
    interactive,
    isOpen,
  } = usePopperContext();

  // get open handler fn
  const [handleOpen] = useHandleOpen();

  // whether the event came from a keyboard or a mouse/touch event
  const fromKeyboard = useRef(false);

  // get close handler fn
  const [closePopper] = useHandleClose();

  // interactive elements inside the popper
  const interactiveElements = useRef<HTMLElement[]>([]);

  const handleClose = useCallback(
    (event) => {
      // get the popper if it's in the event path (i.e. is a parent of the target)
      const eventPath = event?.path || event?.composedPath?.();

      const hasPopperParent = eventPath
        ? !!eventPath?.find((item) => item === popperRef.current)
        : false;

      if (
        interactiveElements.current.includes(event?.relatedTarget) ||
        // if it is NOT a keyboard event, the popper is interactive and the target is the popper or is inside the popper
        (!fromKeyboard.current &&
          interactive &&
          (hasPopperParent || event?.relatedTarget === popperRef.current)) ||
        event?.relatedTarget === targetRef?.current
      ) {
        // abort - the newly focused element is in the list of elements inside the popper
        return;
      }

      closePopper(event);
    },
    [closePopper, targetRef, popperRef, fromKeyboard, interactive]
  );

  const closeOnScroll = useCallback(
    (event) => {
      closePopper(event);
    },
    [closePopper]
  );

  useEffect(() => {
    if (!interactive) {
      interactiveElements.current = [];
    } else {
      interactiveElements.current = extractInteractiveChildren(
        popperRef.current
      );
    }

    interactiveElements.current.forEach((node) => {
      node.addEventListener("blur", handleClose);
    });

    const interactives = interactiveElements.current;

    return () => {
      interactives.forEach((node) => {
        node.removeEventListener("blur", handleClose);
      });
    };
  });

  // get mouse event listeners
  const handleMouseLeave = useMouseLeave(handleClose, popperRef);

  /**
   * main event listeners to turn component display on/off
   *
   * This MUST be useEffect. In some cases, running useLayoutEffect will try to attach event listeners
   * before the target element has rendered. Examples are cases where the child elements call a setState
   * callback to add a new child which then renders a tooltip, using context to setup new children, and so on.
   */
  useEffect(() => {
    // get element from targetRef or target
    const element = getElement({ targetRef, target });

    // if element is not defined, short circuit
    if (!element) {
      return;
    }

    const scrollableParentElements = getScrollableParentElements(element);

    const detectKeyboardFocus = () => {
      fromKeyboard.current = true;
    };

    const detectMouseFocus = () => {
      fromKeyboard.current = false;
    };

    const ifClick = (event) => {
      if (fromKeyboard.current) {
        return;
      }

      if (isOpen) {
        handleClose(event);
      } else {
        handleOpen(event);
      }
    };

    const openIfFocus = (event) => {
      if (!fromKeyboard.current) {
        return;
      }

      handleOpen(event);
    };

    const closeIfBlur = (event) => {
      if (!fromKeyboard.current) {
        return;
      }

      handleClose(event);
    };

    // set a mousedown event on the popper
    if (popperRef.current) {
      popperRef.current.addEventListener("mousedown", detectMouseFocus);
    }

    // these triggers interfere, so we need to differentiate between keyboard and mouse focus
    element.addEventListener("mousedown", detectMouseFocus);

    document.addEventListener("keydown", detectKeyboardFocus);

    // exclude certain events to allow for custom handling
    const activeUntriggers = untriggers?.filter((untrigger) => {
      // exclude if included in excludedUntriggers list
      if (excludedUntriggers.includes(untrigger)) {
        return false;
      }

      // exclude if untrigger is 'click' and 'closeOnClickOutside' is enabled
      if (untrigger === "click") {
        if (closeOnClickOutside) {
          return false;
        }

        if (triggers?.includes("click")) {
          return false;
        }
      }

      return true;
    });

    // create trigger listeners
    triggers?.forEach((trigger) => {
      if (trigger === "click") {
        element.addEventListener(trigger, ifClick);
      } else if (trigger === "focus") {
        element.addEventListener(trigger, openIfFocus);
      } else {
        element.addEventListener(trigger, handleOpen);
      }
    });

    // create untrigger listeners
    activeUntriggers?.forEach((untrigger) => {
      if (untrigger === "click") {
        element.addEventListener(untrigger, ifClick);
      } else if (untrigger === "blur") {
        element.addEventListener(untrigger, closeIfBlur);
      } else if (untrigger === "scroll") {
        document.addEventListener(untrigger, closeOnScroll);

        scrollableParentElements.forEach((el) =>
          el.addEventListener(untrigger, closeOnScroll)
        );
      } else {
        element.addEventListener(untrigger, handleClose);
      }
    });

    // create mouseleave listener
    element.addEventListener("mouseleave", handleMouseLeave);

    // cleanup stage
    return () => {
      element.removeEventListener("mousedown", detectMouseFocus);

      document.removeEventListener("keydown", detectKeyboardFocus);

      // remove trigger listeners
      triggers?.forEach((trigger) => {
        if (trigger === "click") {
          element.removeEventListener(trigger, ifClick);
        } else if (trigger === "focus") {
          element.removeEventListener(trigger, openIfFocus);
        } else {
          element.removeEventListener(trigger, handleOpen);
        }
      });

      // remove untrigger listeners
      activeUntriggers?.forEach((untrigger) => {
        if (untrigger === "click") {
          element.removeEventListener(untrigger, ifClick);
        } else if (untrigger === "blur") {
          element.removeEventListener(untrigger, closeIfBlur);
        } else if (untrigger === "scroll") {
          document.addEventListener(untrigger, closeOnScroll);

          scrollableParentElements.forEach((el) =>
            el.removeEventListener(untrigger, closeOnScroll)
          );
        } else {
          element.removeEventListener(untrigger, handleClose);
        }
      });

      // remove mouseleave listener
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    closeOnClickOutside,
    triggers,
    untriggers,
    target,
    targetRef,
    handleOpen,
    handleClose,
    handleMouseLeave,
    placement,
    isOpen,
    popperRef,
    closeOnScroll,
  ]);
};
