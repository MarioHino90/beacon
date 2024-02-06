"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetCoordinates = void 0;

/**
 * Get coordinates for the target element on the DOM
 * @param element an HTML element instance
 * @param portalRef ref of Portal inside which Popper will be rendered
 */
var getTargetCoordinates = function getTargetCoordinates(element, portalRef) {
  // calculate any offsets based on scroll and/or page layout behavior
  var pageLeftOffset = window.pageXOffset || document.documentElement.scrollLeft;
  var pageTopOffset = window.pageYOffset || document.documentElement.scrollTop; // get the coordinates of the target element

  var rect = element.getBoundingClientRect(); // if portalRef.current is defined, then calculate element's
  // positioning relative to the portal parent

  if (portalRef !== null && portalRef !== void 0 && portalRef.current) {
    // get portalRef's parent bounding rect
    var parentRect = portalRef.current.getBoundingClientRect(); // return relative coordinates

    return {
      top: rect.top - parentRect.top + pageTopOffset,
      right: rect.width,
      bottom: rect.height,
      left: rect.left - parentRect.left + pageLeftOffset
    };
  } // if portalRef.current isn't defined,
  // then return the absolute coords


  return {
    top: rect.top + pageTopOffset,
    right: rect.width,
    bottom: rect.height,
    left: rect.left + pageLeftOffset
  };
};

exports.getTargetCoordinates = getTargetCoordinates;