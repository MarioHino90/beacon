"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverHeading = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Heading = require("../Heading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-popover-heading", className),
    level: 6
  };
};

var PopoverHeading = (0, _styledComponents["default"])(_Heading.Heading).attrs(getAttrs).withConfig({
  displayName: "PopoverHeading",
  componentId: "sc-jeg06j-0"
})(["color:", ";"], (0, _beaconStyling.getColor)("gray", 800));
exports.PopoverHeading = PopoverHeading;