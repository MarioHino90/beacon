import { useEffect, useRef } from "react";

import { extractInteractiveChildren } from "../../Popper";

/**
 *
 * @param isOpen
 * @param controlRef
 * @param popperRef
 * @param targetRef
 */
export const useFieldLabelPopoverKeyboardAccessibilityEvents = (
  isOpen: boolean,
  controlRef: React.RefObject<HTMLElement>,
  popperRef: React.RefObject<HTMLDivElement>,
  targetRef: React.RefObject<HTMLElement>
): void => {
  // interactive elements inside the popper
  const interactiveElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // find the first interactive child and focus it
    interactiveElements.current = extractInteractiveChildren(popperRef.current);

    // extract the form control this label wraps, so that we can focus it when shift-tab is pressed in the popover
    const input = controlRef.current;

    let focusTimeout: NodeJS.Timeout;

    if (isOpen) {
      // when the popover is opened, put focus on the first interactive element inside the popover so keyboard navigation will work
      // this is in a setTimeout because the element hasn't been placed yet, so focusing now would set the scrolltop to 0
      focusTimeout = setTimeout(() => {
        interactiveElements.current[0]?.focus();
      }, 0);
    }

    /**
     * When the user is focused on the last interactive element in the popover and they hit "Tab"
     *
     * This will focus the input that the field label references, allowing tabbing forward through the form
     */
    const focusControlOnPopoverExit = (e: KeyboardEvent) => {
      if (e.shiftKey) {
        // shift-tab does not need to be intercepted
        return;
      } else if (e.code === "Tab") {
        e.preventDefault();

        e.stopPropagation();

        // user hit "tab" or "escape" to exit the popover, so focus the control this field label references
        input?.focus();
      }
    };

    /**
     * When the user is focused on the first interactive element in the popover and they hit "Shift-Tab"
     *
     * This will focus the icon that triggers the popover, allowing shift-tabbing backwards in the form
     */
    const focusIconOnPopoverExit = (e: KeyboardEvent) => {
      if (!e.shiftKey) {
        // tab does not need to be intercepted
        return;
      } else if (e.code === "Tab") {
        e.preventDefault();

        e.stopPropagation();

        // user hit "shift-tab" to exit the popover, so focus the icon
        targetRef.current?.focus();
      }
    };

    /**
     * The user hit "Esc", so we will close the popover and focus the control this field label references
     */
    const escapeHit = (e: KeyboardEvent) => {
      if (e.shiftKey) {
        // shift-escape does not need to be intercepted
        return;
      } else if (e.code === "Escape") {
        e.preventDefault();

        e.stopPropagation();

        // user hit "escape" to exit the popover, so focus the control this field label references
        input?.focus();
      }
    };

    // we listen for keydown - blur/focus is too late to intercept these events
    // listen for "Esc" on all of the interactive elements in the popover
    interactiveElements.current.forEach((element) =>
      element.addEventListener("keydown", escapeHit)
    );

    // on the last interactive element, listen for "Tab"
    interactiveElements.current[
      interactiveElements.current.length - 1
    ]?.addEventListener("keydown", focusControlOnPopoverExit);

    // on the first interactive element, listen for "Shift-Tab"
    interactiveElements.current[0]?.addEventListener(
      "keydown",
      focusIconOnPopoverExit
    );

    const elements = interactiveElements.current;

    return () => {
      focusTimeout && clearTimeout(focusTimeout);

      elements.forEach((element) =>
        element.removeEventListener("keydown", escapeHit)
      );

      elements[elements.length - 1]?.removeEventListener(
        "keydown",
        focusControlOnPopoverExit
      );

      elements[0]?.removeEventListener("keydown", focusIconOnPopoverExit);
    };
  }, [controlRef, isOpen, popperRef, targetRef]);
};
