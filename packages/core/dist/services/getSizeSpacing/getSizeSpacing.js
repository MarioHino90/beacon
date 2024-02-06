"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSizeSpacing = void 0;

/**
 * gets the spacing size given the text amount
 *
 * @argument size - the size to fetch
 * @returns string - the spacing amount in px
 */
var getSizeSpacing = function getSizeSpacing(size) {
  switch (size) {
    case "none":
      return "0";

    case "compact":
      return "8px";

    case "comfortable":
    default:
      return "16px";
  }
};

exports.getSizeSpacing = getSizeSpacing;