"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIconCircle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _beaconCore = require("@braze/beacon-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledIconCircle = _styledComponents["default"].div.withConfig({
  displayName: "StyledIconCircle",
  componentId: "sc-6j15jq-0"
})(["display:flex;justify-content:center;align-items:center;background:", ";min-width:28px;min-height:28px;max-width:28px;max-height:28px;border-radius:50%;", "{color:", ";font-size:1rem;}"], function (props) {
  return (0, _beaconStyling.intentColorSelector)(props, props.intent, 100);
}, _beaconCore.StyledIcon, function (props) {
  return (0, _beaconStyling.intentColorSelector)(props, props.intent, 500);
});

exports.StyledIconCircle = StyledIconCircle;