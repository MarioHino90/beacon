import { RefObject } from "react";

import { TargetCoordinates } from "../../types";

/**
 * Get coordinates for the target element on the DOM
 * @param element an HTML element instance
 * @param portalRef ref of Portal inside which Popper will be rendered
 */
export const getTargetCoordinates = <P extends HTMLElement = HTMLDivElement>(
  element: HTMLElement,
  portalRef?: RefObject<P>
): TargetCoordinates => {
  // calculate any offsets based on scroll and/or page layout behavior
  const pageLeftOffset =
    window.pageXOffset || document.documentElement.scrollLeft;
  const pageTopOffset =
    window.pageYOffset || document.documentElement.scrollTop;

  // get the coordinates of the target element
  const rect = element.getBoundingClientRect();

  // if portalRef.current is defined, then calculate element's
  // positioning relative to the portal parent
  if (portalRef?.current) {
    // get portalRef's parent bounding rect
    const parentRect = portalRef.current.getBoundingClientRect();

    // return relative coordinates
    return {
      top: rect.top - parentRect.top + pageTopOffset,
      right: rect.width,
      bottom: rect.height,
      left: rect.left - parentRect.left + pageLeftOffset,
    };
  }

  // if portalRef.current isn't defined,
  // then return the absolute coords
  return {
    top: rect.top + pageTopOffset,
    right: rect.width,
    bottom: rect.height,
    left: rect.left + pageLeftOffset,
  };
};
