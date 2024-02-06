"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToast = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../../Icon");

var _Link = require("../../Link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledToast = _styledComponents["default"].div.withConfig({
  displayName: "StyledToast",
  componentId: "sc-vz18kz-0"
})(["display:flex;align-items:center;box-sizing:border-box;color:", ";font-family:", ";font-weight:", ";font-size:", ";margin:", " 0;", "{min-height:28px;min-width:28px;border-radius:50%;font-size:10px;margin:0 ", ";color:", ";background:", ";}", ",.bcl-button-quaternary{font-size:", ";color:", ";&:hover{color:", ";}}.bcl-button-quaternary{padding-top:0;padding-bottom:0;}"], (0, _beaconStyling.getColor)("gray", 800), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getFontSize)("body", "sm"), (0, _beaconStyling.getSpacing)("md"), _Icon.StyledIcon, (0, _beaconStyling.getSpacing)("md"), function (props) {
  return (0, _beaconStyling.intentColorSelector)(props, props.intent, 500);
}, function (props) {
  return (0, _beaconStyling.intentColorSelector)(props, props.intent, 100);
}, _Link.Link, (0, _beaconStyling.getFontSize)("body", "sm"), function (props) {
  return (0, _beaconStyling.intentColorSelector)(props, props.intent, 500);
}, function (props) {
  return (0, _beaconStyling.intentColorSelector)(props, props.intent, 400);
});

exports.StyledToast = StyledToast;