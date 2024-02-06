"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIcon = exports.BannerAlertIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../Icon");

var _StyledBannerIcon = require("./StyledBannerIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * get the icon to display for a specific intent
 *
 * @param intent - the intent to get an icon for
 *
 * @return the name of the icon to display
 */
var getIcon = function getIcon(intent) {
  if (intent === "info") {
    return "info";
  }

  if (intent === "warning") {
    return "exclamation";
  }

  if (intent === "danger") {
    return "times";
  }

  return "check";
};

exports.getIcon = getIcon;

var BannerAlertIcon = function BannerAlertIcon(_ref) {
  var intent = _ref.intent;
  return /*#__PURE__*/_react["default"].createElement(_StyledBannerIcon.StyledBannerIcon, {
    className: "bcl-banner-alert-icon",
    intent: intent,
    alignItems: "center",
    justifyContent: "center",
    boxMargin: {
      vertical: "none",
      horizontal: "md"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: getIcon(intent),
    color: (0, _beaconStyling.getIntentColor)(intent, 500)
  }));
};

exports.BannerAlertIcon = BannerAlertIcon;
BannerAlertIcon.displayName = "BannerAlertIcon";