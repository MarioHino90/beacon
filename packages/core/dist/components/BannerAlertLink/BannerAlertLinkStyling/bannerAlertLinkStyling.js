"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bannerAlertLinkStyling = void 0;

var _styledComponents = require("styled-components");

var _beaconStyling = require("@braze/beacon-styling");

/** css for styling both the button and the link */
var bannerAlertLinkStyling = (0, _styledComponents.css)(["display:inline-flex;cursor:pointer;font-weight:bold;font-size:", ";font-family:", ";font-weight:", ";text-decoration:underline;"], (0, _beaconStyling.getFontSize)("body", "xs"), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"));
exports.bannerAlertLinkStyling = bannerAlertLinkStyling;