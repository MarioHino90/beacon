"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntentHoverColor = exports.getIntentColor = exports.StyledBannerLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Link = require("../Link");

var _getIntentColor = require("../BannerAlert/getIntentColor");

var _BannerAlertLinkStyling = require("./BannerAlertLinkStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * get the link color to display for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the link
 */
var getIntentColor = (0, _getIntentColor.createGetIntentColor)(500);
/**
 * get the link color to display on hover for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the link on hover
 */

exports.getIntentColor = getIntentColor;
var getIntentHoverColor = (0, _getIntentColor.createGetIntentColor)(400);
exports.getIntentHoverColor = getIntentHoverColor;
var StyledBannerLink = (0, _styledComponents["default"])(_Link.Link).withConfig({
  displayName: "StyledBannerLink",
  componentId: "sc-tlkggh-0"
})(["", " color:", ";text-decoration-color:", ";&:hover{color:", ";text-decoration-color:", ";}"], _BannerAlertLinkStyling.bannerAlertLinkStyling, getIntentColor, getIntentColor, getIntentHoverColor, getIntentHoverColor);
exports.StyledBannerLink = StyledBannerLink;
StyledBannerLink.displayName = "StyledBannerLink";