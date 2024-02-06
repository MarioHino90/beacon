"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledAccordion = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _getIntentColor = require("../BannerAlert/getIntentColor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * get the background color to display for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the accordion background
 */
var getIntentBackgroundColor = (0, _getIntentColor.createGetIntentColor)(50);

var StyledAccordion = _styledComponents["default"].div.withConfig({
  displayName: "StyledAccordion",
  componentId: "sc-1mf5upv-0"
})(["padding:", ";background:", ";"], (0, _beaconStyling.getSpacing)("xl"), function (props) {
  return (0, _beaconStyling.getRGBAValue)(getIntentBackgroundColor(props), 0.5);
});

exports.StyledAccordion = StyledAccordion;