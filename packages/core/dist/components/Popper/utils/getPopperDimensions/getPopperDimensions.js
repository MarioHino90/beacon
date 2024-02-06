"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopperDimensions = void 0;

var _normalizeDimension = require("../normalizeDimension");

/**
 *
 * @param popperRef
 */
var getPopperDimensions = function getPopperDimensions(popperRef) {
  var _popperRef$current, _popperRef$current2;

  // get the dimensions of the Popper element
  var elementHeight = (0, _normalizeDimension.normalizeDimension)(((_popperRef$current = popperRef.current) === null || _popperRef$current === void 0 ? void 0 : _popperRef$current.getBoundingClientRect().height) || 0);
  var elementWidth = (0, _normalizeDimension.normalizeDimension)(((_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 ? void 0 : _popperRef$current2.getBoundingClientRect().width) || 0);
  return [elementHeight, elementWidth];
};

exports.getPopperDimensions = getPopperDimensions;