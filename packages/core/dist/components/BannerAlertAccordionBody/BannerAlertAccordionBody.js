"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertAccordionBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-banner-alert-accordion-body", className)
  };
};

var BannerAlertAccordionBody = _styledComponents["default"].div.attrs(getAttrs).withConfig({
  displayName: "BannerAlertAccordionBody",
  componentId: "sc-gdky86-0"
})(["color:", ";font-size:", ";"], (0, _beaconStyling.getColor)("gray", 800), (0, _beaconStyling.getFontSize)("body", "xs"));

exports.BannerAlertAccordionBody = BannerAlertAccordionBody;
BannerAlertAccordionBody.displayName = "BannerAlertAccordionBody";