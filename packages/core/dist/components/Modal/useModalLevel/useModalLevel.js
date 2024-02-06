"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalLevel = exports.MODAL_LEVEL_TICK = exports.BASE_Z_INDEX = void 0;

var _react = require("react");

var _LevelsContext = require("../../LevelsContext");

var BASE_Z_INDEX = 1050;
exports.BASE_Z_INDEX = BASE_Z_INDEX;
var MODAL_LEVEL_TICK = 10;
/**
 * hook to handle finding the zIndex for a modal
 *
 * @param zIndex - custom zIndex to override other options
 *
 * @returns the zIndex to use on the modal
 */

exports.MODAL_LEVEL_TICK = MODAL_LEVEL_TICK;

var useModalLevel = function useModalLevel(zIndex) {
  var level = (0, _react.useContext)(_LevelsContext.LevelsContext);

  if (zIndex) {
    // we add the modal tick amount to keep backwards compatibillity
    // long term it would be best to remove this
    return zIndex + MODAL_LEVEL_TICK;
  }

  if (level) {
    return level;
  }

  return BASE_Z_INDEX;
};

exports.useModalLevel = useModalLevel;