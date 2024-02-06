"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCopyField = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Button = require("../Button");

var _Input = require("../Input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledCopyField = _styledComponents["default"].div.withConfig({
  displayName: "StyledCopyField",
  componentId: "sc-4psfal-0"
})(["display:flex;align-items:center;z-index:", ";", "{font-family:", ";border-top-right-radius:0;border-bottom-right-radius:0;border-right:none;caret-color:transparent !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;::selection{background:", ";}}", "{border-top-left-radius:0;border-bottom-left-radius:0;padding:", ";min-width:", ";}@keyframes pulse{from{transform:scale(1);}33%{transform:scale(1.1);}67%{transform:scale(0.95);}to{transform:scale(1);}}"], function (props) {
  return props.zIndex || "auto";
}, _Input.StyledInput, (0, _beaconStyling.getFontFamily)("code"), (0, _beaconStyling.getIntentColor)("primary", 50), _Button.StyledButton, (0, _beaconStyling.getSpacing)("md"), function (props) {
  return props.showTextInButton && "100px";
});

exports.StyledCopyField = StyledCopyField;