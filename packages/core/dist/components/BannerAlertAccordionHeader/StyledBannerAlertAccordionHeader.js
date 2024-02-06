"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBannerAlertAccordionHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Heading = require("../Heading");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBannerAlertAccordionHeader = (0, _styledComponents["default"])(_Heading.Heading).withConfig({
  displayName: "StyledBannerAlertAccordionHeader",
  componentId: "sc-18ob8kh-0"
})(["&:not(:first-of-type){border-top:1px solid ", ";margin-top:", ";padding-top:", ";}"], (0, _beaconStyling.getColor)("gray", 200), (0, _beaconStyling.getSpacing)("lg"), (0, _beaconStyling.getSpacing)("lg"));
exports.StyledBannerAlertAccordionHeader = StyledBannerAlertAccordionHeader;