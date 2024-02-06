"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFormGroup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFormGroup = _styledComponents["default"].fieldset.withConfig({
  displayName: "StyledFormGroup",
  componentId: "sc-zi2hr8-0"
})(["padding:0;padding-bottom:", ";border:none;border-bottom:", " solid ", ";margin:0;margin-bottom:", ";&:last-of-type{border:0;margin:0;padding:0;}"], (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getColor)("gray", 300), (0, _beaconStyling.getSpacing)("xl"));

exports.StyledFormGroup = StyledFormGroup;