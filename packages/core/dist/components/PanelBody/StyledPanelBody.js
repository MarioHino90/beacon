"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insetSizes = exports.StyledPanelBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var insetSizes = ["none", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];
exports.insetSizes = insetSizes;

var StyledPanelBody = _styledComponents["default"].div.withConfig({
  displayName: "StyledPanelBody",
  componentId: "sc-q466pu-0"
})(["font-size:", ";padding:", ";text-align:", ";border:", " solid ", ";border-top:none;border-radius:0 0 3px 3px;"], (0, _beaconStyling.getFontSize)("body", "md"), function (_ref) {
  var inset = _ref.inset;
  return inset && (0, _beaconStyling.getSpacing)(inset);
}, function (_ref2) {
  var textAlign = _ref2.textAlign;
  return textAlign;
}, (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getColor)("gray", 100));

exports.StyledPanelBody = StyledPanelBody;