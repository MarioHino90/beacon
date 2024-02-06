"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIconWithGradient = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconHooks = require("@braze/beacon-hooks");

var _FlexBox = require("../../FlexBox");

var _StyledLoadingIconWithGradient = require("./StyledLoadingIconWithGradient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var gradientSuffix = "-gradient";

var LoadingIconWithGradient = function LoadingIconWithGradient(_ref) {
  var intent = _ref.intent,
      size = _ref.size,
      variant = _ref.variant;
  var rootId = (0, _beaconHooks.useId)("bcl-loading-icon-with-gradient-");
  return /*#__PURE__*/_react["default"].createElement(_FlexBox.FlexBox, {
    inline: true,
    justifyContent: "center",
    alignItems: "center",
    boxMargin: {
      right: "sm"
    }
  }, /*#__PURE__*/_react["default"].createElement(_StyledLoadingIconWithGradient.StyledLoadingIconWithGradient, {
    className: "bcl-loading-spinner",
    viewBox: "0 0 50 50",
    size: size
  }, /*#__PURE__*/_react["default"].createElement(_StyledLoadingIconWithGradient.StyledLoadingSpinnerPath, {
    id: "".concat(rootId, "-circle"),
    gradientId: "".concat(rootId).concat(gradientSuffix),
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    strokeWidth: "8"
  }), /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "".concat(rootId).concat(gradientSuffix)
  }, /*#__PURE__*/_react["default"].createElement(_StyledLoadingIconWithGradient.StyledLinearGradient0Stop, {
    offset: "0%",
    intent: intent,
    size: size,
    variant: variant
  }), /*#__PURE__*/_react["default"].createElement(_StyledLoadingIconWithGradient.StyledLinearGradient100Stop, {
    offset: "100%",
    intent: intent,
    size: size,
    variant: variant
  }))));
};

exports.LoadingIconWithGradient = LoadingIconWithGradient;