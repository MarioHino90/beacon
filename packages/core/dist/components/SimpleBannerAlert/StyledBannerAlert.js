"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntentColor = exports.StyledBannerAlert = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _getIntentColor = require("../BannerAlert/getIntentColor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * get the color to display for a specific intent
 * @param intent - the intent to get the color for
 * @return the color to display
 */
var getIntentColor = (0, _getIntentColor.createGetIntentColor)(400);
exports.getIntentColor = getIntentColor;

var StyledBannerAlert = _styledComponents["default"].div.withConfig({
  displayName: "StyledBannerAlert",
  componentId: "sc-19476kl-0"
})(["display:flex;align-items:stretch;justify-content:space-between;min-height:38px;font-family:", ";font-weight:", ";background-color:", ";border:1px solid;border-left:8px solid;border-radius:3px;border-color:", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getColor)("gray", 0), getIntentColor);

exports.StyledBannerAlert = StyledBannerAlert;