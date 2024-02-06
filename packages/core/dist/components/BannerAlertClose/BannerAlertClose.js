"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertClose = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../Icon");

var _StyledClose = require("./StyledClose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BannerAlertClose = function BannerAlertClose(_ref) {
  var intent = _ref.intent,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(_StyledClose.StyledClose, {
    type: "button",
    className: "bcl-banner-alert-close",
    intent: intent,
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "times",
    color: (0, _beaconStyling.getColor)("gray", 300)
  }));
};

exports.BannerAlertClose = BannerAlertClose;
BannerAlertClose.displayName = "BannerAlertClose";