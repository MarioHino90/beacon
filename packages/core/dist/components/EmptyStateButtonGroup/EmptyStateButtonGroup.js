"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateButtonGroup = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _ButtonGroup = require("../ButtonGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(["bcl-empty-state-buttons", className]),
    direction: "row"
  };
};

var EmptyStateButtonGroup = (0, _styledComponents["default"])(_ButtonGroup.ButtonGroup).attrs(getAttrs).withConfig({
  displayName: "EmptyStateButtonGroup",
  componentId: "sc-jxibvp-0"
})(["padding-top:", ";"], (0, _beaconStyling.getSpacing)("lg"));
exports.EmptyStateButtonGroup = EmptyStateButtonGroup;
EmptyStateButtonGroup.displayName = "EmptyStateButtonGroup";