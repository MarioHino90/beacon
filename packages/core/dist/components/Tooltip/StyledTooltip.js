"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTooltip = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledTooltip = _styledComponents["default"].div.withConfig({
  displayName: "StyledTooltip",
  componentId: "sc-1dvhwn4-0"
})(["padding:0.5rem 0.75rem 0.25rem;opacity:0.95;color:", ";background-color:", ";text-align:center;min-width:60px;max-width:200px;font-size:", ";border-radius:", ";box-shadow:0px 10px 15px rgba(46,60,71,0.1);& > div{transform:translateY(-1px);}", ";"], (0, _beaconStyling.getColor)("gray", 0), (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getFontSize)("body", "xs"), (0, _beaconStyling.getBorderRadius)("sm"), function (props) {
  return props.styledCss;
});

exports.StyledTooltip = StyledTooltip;