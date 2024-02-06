"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertAccordionFooter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-banner-alert-accordion-footer", className)
  };
};

var BannerAlertAccordionFooter = _styledComponents["default"].div.attrs(getAttrs).withConfig({
  displayName: "BannerAlertAccordionFooter",
  componentId: "sc-prhrdb-0"
})(["display:flex;justify-content:flex-end;padding-top:", ";"], (0, _beaconStyling.getSpacing)("xl"));

exports.BannerAlertAccordionFooter = BannerAlertAccordionFooter;
BannerAlertAccordionFooter.displayName = "BannerAlertAccordionFooter";