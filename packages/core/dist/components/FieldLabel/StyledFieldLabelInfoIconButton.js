"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldLabelInfoIconButton = void 0;

var _beaconStyling = require("@braze/beacon-styling");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFieldLabelInfoIconButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledFieldLabelInfoIconButton",
  componentId: "sc-3euiip-0"
})(["margin-left:", ";font-size:0.8em;cursor:pointer;color:", ";"], (0, _beaconStyling.getSpacing)("xs"), function (_ref) {
  var variant = _ref.variant;
  return variant === "muted" ? (0, _beaconStyling.getColor)("gray", 600) : (0, _beaconStyling.getIntentColor)("primary", 500);
});

exports.StyledFieldLabelInfoIconButton = StyledFieldLabelInfoIconButton;