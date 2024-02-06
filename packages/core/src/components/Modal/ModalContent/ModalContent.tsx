import React from "react";
import classNames from "classnames";

import { ModalContentProps } from "../types";

import { StyledModalContent } from "./StyledModalContent";

/**
 * Check whether some DOM node is our Component's node.
 */
export function isNodeFound(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  current,
  componentNode: HTMLDivElement | null,
  ignoreClass: string
): boolean {
  if (current === componentNode) {
    return true;
  }

  // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
  /* istanbul ignore next */
  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}

/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */
export function findHighest(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  current,
  componentNode: HTMLDivElement | null,
  ignoreClass: string
): boolean | React.ReactNode {
  if (current === componentNode) {
    return true;
  }

  // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.
  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}

/**
 * React hook that creates event bindings that listen to whether the area outside
 * of that encompassed by the 'ref' is clicked on. If a user clicks on the outside
 * area, then the 'callbackFn' argument will be invoked.
 * @param ref HTML element to compare click event to and see if it was outside of
 * @param callbackFn function to call if outside area clicked
 */
function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  callbackFn: () => void,
  ignoreClassName = "bcl-ignore-click-outside"
): void {
  React.useEffect(
    function initUseOnClickOutside() {
      function outsideClickListener(event: MouseEvent) {
        if (
          findHighest(event.target, ref.current, ignoreClassName) !== document
        ) {
          return;
        }

        callbackFn();
      }

      document.addEventListener("mousedown", outsideClickListener);

      document.addEventListener("touchstart", outsideClickListener);

      return function cleanupUseOnClickOutside() {
        document.removeEventListener("mousedown", outsideClickListener);

        document.removeEventListener("touchstart", outsideClickListener);
      };
    },
    [ref, callbackFn, ignoreClassName]
  );
}

export const ModalContent = React.forwardRef(
  (
    {
      className,
      isOpen,
      outsideClickIgnoreClass = "bcl-ignore-click-outside",
      toggle,
      size,
      ...props
    }: ModalContentProps,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    // create handler for outside clicks
    const handleClickOutside = () => {
      if (isOpen && toggle) {
        toggle();
      }
    };

    // listen to outside clicks and toggle if open
    useOnClickOutside(ref, handleClickOutside, outsideClickIgnoreClass);

    return (
      <StyledModalContent
        {...props}
        ref={ref}
        size={size}
        className={classNames([
          "bcl-modal-content",
          `bcl-modal-content-${size}`,
          className,
        ])}
      />
    );
  }
);

ModalContent.displayName = "ModalContent";
