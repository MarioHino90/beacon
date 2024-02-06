"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCollapsibleButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledCollapsibleButton = (0, _styledComponents["default"])(_Button.Button).withConfig({
  displayName: "StyledCollapsibleButton",
  componentId: "sc-1868cva-0"
})(["font-size:", ";padding-right:", ";padding-left:", ";"], function (props) {
  return props.variant === "quaternary" && (0, _beaconStyling.fontSizeSelector)(props, "body", "sm");
}, function (props) {
  return props.variant === "quaternary" && 0;
}, function (props) {
  return props.variant === "quaternary" && 0;
});
exports.StyledCollapsibleButton = StyledCollapsibleButton;