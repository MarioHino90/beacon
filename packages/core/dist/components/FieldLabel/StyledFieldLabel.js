"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldLabel = exports.EnforceOptionalOrRequired = exports.CustomBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Box = require("../Box");

var _Flex = require("../Flex");

var _Label = require("../Label");

var _HelpText = require("../HelpText");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledFieldLabel__CustomBox",
  componentId: "sc-17vmzyv-0"
})(["&:last-of-type{margin-bottom:0;}"]);
exports.CustomBox = CustomBox;

var EnforceOptionalOrRequired = _styledComponents["default"].span.withConfig({
  displayName: "StyledFieldLabel__EnforceOptionalOrRequired",
  componentId: "sc-17vmzyv-1"
})(["height:", ";color:", ";font-weight:normal;"], (0, _beaconStyling.getFontSize)("body", "sm"), (0, _beaconStyling.getColor)("gray", 600));

exports.EnforceOptionalOrRequired = EnforceOptionalOrRequired;
var StyledFieldLabel = (0, _styledComponents["default"])(_Label.Label).withConfig({
  displayName: "StyledFieldLabel",
  componentId: "sc-17vmzyv-2"
})(["display:block;margin-top:", ";margin-bottom:10px;height:", ";white-space:nowrap;& + ", " > ", "{margin-top:0.25rem;}"], (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getFontSize)("body", "sm"), _Flex.StyledFlex, _HelpText.StyledHelpText);
exports.StyledFieldLabel = StyledFieldLabel;