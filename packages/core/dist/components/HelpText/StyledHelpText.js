"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHelpText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _BodyText = require("../BodyText");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledHelpText = (0, _styledComponents["default"])(_BodyText.BodyText).withConfig({
  displayName: "StyledHelpText",
  componentId: "sc-uq8hzn-0"
})(["font-size:", ";color:", ";"], (0, _beaconStyling.getFontSize)("body", "xs"), function (props) {
  return props.disabled ? (0, _beaconStyling.colorSelector)(props, "gray", 400) : (0, _beaconStyling.colorSelector)(props, "gray", 600);
});
exports.StyledHelpText = StyledHelpText;