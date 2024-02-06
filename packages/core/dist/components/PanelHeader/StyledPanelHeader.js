"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPanelHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledPanelHeader = _styledComponents["default"].header.withConfig({
  displayName: "StyledPanelHeader",
  componentId: "sc-1pgp1n2-0"
})(["background:", ";color:", ";padding:", ";border-radius:3px 3px 0 0;font-size:", ";font-weight:bold;"], (0, _beaconStyling.getColor)("gray", 200), (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getSpacing)("lg"), (0, _beaconStyling.getFontSize)("heading", 4));

exports.StyledPanelHeader = StyledPanelHeader;