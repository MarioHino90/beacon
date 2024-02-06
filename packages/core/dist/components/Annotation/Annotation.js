"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Annotation = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../Icon");

var _UncontrolledTooltip = require("../UncontrolledTooltip");

var _StyledAnnotation = require("./StyledAnnotation");

var _excluded = ["className", "children", "disabled", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getVariantIcons(variant) {
  switch (variant) {
    case "warning":
    case "error":
      return "exclamation-circle";

    case "info":
    default:
      return "info-circle";
  }
}

var Annotation = function Annotation(_ref) {
  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "info" : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  if (disabled) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
  }

  return /*#__PURE__*/_react["default"].createElement(_UncontrolledTooltip.UncontrolledTooltip, props, /*#__PURE__*/_react["default"].createElement(_StyledAnnotation.StyledAnnotation, {
    className: (0, _classnames["default"])(["bcl-Annotation", "bcl-annotation", className]),
    variant: variant
  }, children, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: getVariantIcons(variant),
    size: "1x"
  })));
};

exports.Annotation = Annotation;