"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFormGroupLegend = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFormGroupLegend = _styledComponents["default"].legend.withConfig({
  displayName: "StyledFormGroupLegend",
  componentId: "sc-1jewsre-0"
})(["font-family:", ";font-weight:", ";font-size:", ";padding:0;margin:0;margin-bottom:", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getFontSize)("body", "md"), (0, _beaconStyling.getSpacing)("lg"));

exports.StyledFormGroupLegend = StyledFormGroupLegend;