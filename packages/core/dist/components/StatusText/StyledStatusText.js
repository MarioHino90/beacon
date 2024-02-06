"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledStatusText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../Icon");

var _BodyText = require("../BodyText");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledStatusText = _styledComponents["default"].div.withConfig({
  displayName: "StyledStatusText",
  componentId: "sc-1a1dkdu-0"
})(["position:relative;margin-top:6px;margin-left:3px;", "{margin-right:0.5rem;transform:translateY(2px);}", "{font-size:", ";transform:translateY(-1px);}"], _Icon.StyledIcon, _BodyText.StyledBodyText, (0, _beaconStyling.getFontSize)("body", "xs"));

exports.StyledStatusText = StyledStatusText;