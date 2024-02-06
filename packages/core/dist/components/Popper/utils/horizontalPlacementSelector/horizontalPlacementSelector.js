"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.horizontalPlacementSelector = void 0;

/**
 * Function that returns a percent value to determine horizontal placement of the
 * tip based on the placement prop
 * @param placement string value for where popper should be placed
 * @returns a string containing a percentage value (e.g. "50%")
 */
var horizontalPlacementSelector = function horizontalPlacementSelector(placement, targetDimensions, popperDimensions) {
  if (placement && placement.includes("start")) {
    if (targetDimensions && popperDimensions) {
      var tipPlacement = Math.min(targetDimensions.height * 0.7, popperDimensions.height * 0.3);
      return "".concat(Math.round(tipPlacement), "px");
    }

    return "30%";
  }

  if (placement && placement.includes("end")) {
    if (targetDimensions && popperDimensions) {
      var _tipPlacement = Math.max(popperDimensions.height - targetDimensions.height * 0.7, popperDimensions.height * 0.7);

      return "".concat(Math.round(_tipPlacement), "px");
    }

    return "70%";
  }

  return "50%";
};

exports.horizontalPlacementSelector = horizontalPlacementSelector;