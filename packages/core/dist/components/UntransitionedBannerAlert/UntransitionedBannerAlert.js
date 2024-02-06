"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UntransitionedBannerAlert = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SimpleBannerAlert = require("../SimpleBannerAlert");

var _IntentContext = require("../BannerAlert/IntentContext");

var _StyledBannerContent = require("./StyledBannerContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UntransitionedBannerAlert = function UntransitionedBannerAlert(_ref) {
  var intent = _ref.intent,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_IntentContext.IntentContextProvider, {
    intent: intent
  }, /*#__PURE__*/_react["default"].createElement(_SimpleBannerAlert.SimpleBannerAlert, {
    className: (0, _classnames["default"])("bcl-banner-alert-untransitioned", className)
  }, /*#__PURE__*/_react["default"].createElement(_StyledBannerContent.StyledBannerContent, null, children)));
};

exports.UntransitionedBannerAlert = UntransitionedBannerAlert;
UntransitionedBannerAlert.displayName = "UntransitionedBannerAlert";