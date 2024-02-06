"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledLabel = _styledComponents["default"].label.withConfig({
  displayName: "StyledLabel",
  componentId: "sc-olw2vu-0"
})(["display:inline-block;position:relative;margin-bottom:0.5rem;vertical-align:bottom;color:", ";font-family:", ";font-weight:", ";font-size:", ";"], (0, _beaconStyling.getColor)("gray", 800), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getFontSize)("body", "sm"));

exports.StyledLabel = StyledLabel;