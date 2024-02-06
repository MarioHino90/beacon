"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-banner-alert-title", className)
  };
};

var BannerAlertTitle = _styledComponents["default"].span.attrs(getAttrs).withConfig({
  displayName: "BannerAlertTitle",
  componentId: "sc-11ujmwn-0"
})(["font-family:", ";font-size:", ";font-weight:", ";color:", ";margin:0 10px 0 0;"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontSize)("body", "xs"), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getColor)("gray", 800));

exports.BannerAlertTitle = BannerAlertTitle;
BannerAlertTitle.displayName = "BannerAlertTitle";