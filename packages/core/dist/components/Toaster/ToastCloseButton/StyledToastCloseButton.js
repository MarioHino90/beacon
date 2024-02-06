"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToastCloseButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _CloseButton = require("../../CloseButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledToastCloseButton = _styledComponents["default"].div.withConfig({
  displayName: "StyledToastCloseButton",
  componentId: "sc-1dc6yfr-0"
})(["display:flex;align-items:center;padding:0 ", ";", "{height:inherit;width:inherit;&,&:hover{background:none;}}"], (0, _beaconStyling.getSpacing)("md"), _CloseButton.StyledCloseButton);

exports.StyledToastCloseButton = StyledToastCloseButton;