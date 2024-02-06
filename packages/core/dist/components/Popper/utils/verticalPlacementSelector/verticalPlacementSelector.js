"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verticalPlacementSelector = void 0;

/**
 * Function that returns a percent value to determine vertical placement of the
 * tip based on the placement prop
 * @param placement string value for where popper should be placed
 * @returns a string containing a percentage value (e.g. "50%")
 */
var verticalPlacementSelector = function verticalPlacementSelector(placement, targetDimensions, popperDimensions) {
  if (placement && placement.includes("start")) {
    if (targetDimensions && popperDimensions) {
      var tipPlacement = Math.min(targetDimensions.width * 0.8, popperDimensions.width * 0.2);
      return "".concat(Math.round(tipPlacement), "px");
    }

    return "20%";
  }

  if (placement && placement.includes("end")) {
    if (targetDimensions && popperDimensions) {
      var _tipPlacement = Math.max(popperDimensions.width - targetDimensions.width * 0.8, popperDimensions.width * 0.8);

      return "".concat(Math.round(_tipPlacement), "px");
    }

    return "80%";
  }

  return "50%";
};

exports.verticalPlacementSelector = verticalPlacementSelector;