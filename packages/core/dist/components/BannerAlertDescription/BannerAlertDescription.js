"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertDescription = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-banner-alert-description", className)
  };
};

var BannerAlertDescription = _styledComponents["default"].div.attrs(getAttrs).withConfig({
  displayName: "BannerAlertDescription",
  componentId: "sc-1jwz9wg-0"
})(["font-size:", ";font-weight:", ";color:", ";"], (0, _beaconStyling.getFontSize)("body", "xs"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getColor)("gray", 900));

exports.BannerAlertDescription = BannerAlertDescription;
BannerAlertDescription.displayName = "BannerAlertDescription";