"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAutoPlacement = void 0;

var getAutoPlacement = function getAutoPlacement(element, _ref) {
  var popperHeight = _ref.popperHeight,
      popperWidth = _ref.popperWidth;
  var defaultPlacement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "bottom";

  // get coordinates of target on the DOM
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      right = _element$getBoundingC.right,
      bottom = _element$getBoundingC.bottom,
      left = _element$getBoundingC.left;

  var windowWidth = window.innerWidth ||
  /* istanbul ignore next */
  document.documentElement.clientWidth ||
  /* istanbul ignore next */
  document.body.clientWidth;
  var windowHeight = window.innerHeight ||
  /* istanbul ignore next */
  document.documentElement.clientHeight ||
  /* istanbul ignore next */
  document.body.clientHeight; // the midpoint of the target element horizontally
  //         here
  // |-------------------|
  // |      Button       |
  // |-------------------|

  var horizontalElementMiddle = left + (right - left) / 2; // the midpoint of the target element vertically
  // |-------------------|
  // |      Button       | here
  // |-------------------|

  var verticalElementMiddle = top + (bottom - top) / 2;
  var halfPopperWidth = popperWidth / 2;
  var halfPopperHeight = popperHeight / 2; // the rightmost x coordinate of the popper, if it were in right, right-start or right-end placements

  var rightRightEdge = right + popperWidth; // the leftmost x coordinate of the popper, if it were in left, left-start or left-end placements

  var endLeftEdge = right - popperWidth; // the rightmost x coordinate of the popper, if it were in bottom-start or top-start placements

  var startRightEdge = left + popperWidth; // the leftmost x coordinate of the popper, if it were in left, left-start or left-end placements

  var leftLeftEdge = left - popperWidth; // the bottommost y coordinate of the popper, if it were in bottom, bottom-start or bottom-end placements

  var bottomBottomEdge = bottom + popperHeight; // the topmost y coordinate of the popper, if it were in top, top-start or top-end placements

  var topTopEdge = top - popperHeight; // the rightmost x coordinate of the popper, if it were in top or bottom placements

  var middleRightEdge = horizontalElementMiddle + halfPopperWidth; // the leftmost x coordinate of the popper, if it were in top or bottom placements

  var middleLeftEdge = horizontalElementMiddle - halfPopperWidth; // the topmost y coordinate of the popper, if it were in right or left placements

  var middleTopEdge = verticalElementMiddle - halfPopperHeight; // the bottommost y coordinate of the popper, if it were in right or left placements

  var middleBottomEdge = verticalElementMiddle + halfPopperHeight;

  if (startRightEdge < windowWidth && endLeftEdge > 0 && bottomBottomEdge < windowHeight && topTopEdge > 0 && rightRightEdge < windowWidth && leftLeftEdge > 0) {
    // this is in the middle of the screen, use default placement
    return defaultPlacement;
  } // will the popper's right edge be off screen if we use `*-start`, and off-screen if we use `*-end`?


  if (startRightEdge > windowWidth && endLeftEdge < 0) {
    if (middleRightEdge < windowWidth && middleLeftEdge > 0) {
      if (topTopEdge > 0) {
        return "top";
      }

      if (bottomBottomEdge < windowHeight) {
        return "bottom";
      }
    } // some part of the box will be off-screen


    return defaultPlacement;
  } // will the popper's top edge be off screen with `top-*` but on screen with `bottom-*`?


  if (topTopEdge < 0 && bottomBottomEdge > windowHeight) {
    if (middleTopEdge > 0 && middleBottomEdge < windowHeight) {
      if (rightRightEdge < windowWidth) {
        return "right";
      }

      if (leftLeftEdge > 0) {
        return "left";
      }
    } // some part of the box will be off-screen


    return defaultPlacement; // will the popper's right edge be on screen with `*-start`, but off-screen if we use `*-end`?
  } else {
    if (startRightEdge < windowWidth && endLeftEdge < 0) {
      if (bottomBottomEdge < windowHeight) {
        return "bottom-start";
      } // we know that topTopEdge > 0 because otherwise the
      // if (topTopEdge < 0 && bottomBottomEdge > windowHeight) {
      // would have been true


      return "top-start";
    } else {
      if (bottomBottomEdge < windowHeight) {
        return "bottom-end";
      } // we know that topTopEdge > 0 because otherwise the
      // if (topTopEdge < 0 && bottomBottomEdge > windowHeight) {
      // would have been true


      return "top-end";
    }
  }
};

exports.getAutoPlacement = getAutoPlacement;