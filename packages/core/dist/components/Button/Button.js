"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconTranslations = require("@braze/beacon-translations");

var _StyledButton = require("./StyledButton");

var _ButtonContent = require("./ButtonContent");

var _excluded = ["children", "className", "disabled", "getAriaLabel", "intent", "loadingState", "loadingMessage", "size", "variant", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useDefaultAriaLabel = function useDefaultAriaLabel(loadingState) {
  var _useI18nNamespace = (0, _beaconTranslations.useI18nNamespace)("beacon-button"),
      t = _useI18nNamespace.t;

  if (!loadingState) {
    return undefined;
  }

  switch (loadingState) {
    case "success":
      return t("button-click-success-aria-label", "Button click success");

    case "error":
      return t("button-click-error-aria-label", "Button click error");

    case "idle":
    case "loading":
      return undefined;
  }
};

var Button = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _props$ariaLabel;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      getAriaLabel = _ref.getAriaLabel,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? "info" : _ref$intent,
      loadingState = _ref.loadingState,
      loadingMessage = _ref.loadingMessage,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "lg" : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "primary" : _ref$variant,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      props = _objectWithoutProperties(_ref, _excluded);

  var defaultAriaLabel = useDefaultAriaLabel(loadingState);
  return /*#__PURE__*/_react["default"].createElement(_StyledButton.StyledButton, _extends({}, props, {
    ref: ref,
    "data-is-loading": loadingState ? loadingState === "loading" : false,
    "data-loading-state": loadingState !== null && loadingState !== void 0 ? loadingState : "idle",
    "aria-live": loadingState ? "polite" : undefined,
    "aria-label": (_props$ariaLabel = props["aria-label"]) !== null && _props$ariaLabel !== void 0 ? _props$ariaLabel : getAriaLabel ? getAriaLabel(loadingState) : defaultAriaLabel,
    disabled: disabled || (loadingState ? loadingState !== "idle" : undefined),
    className: (0, _classnames["default"])(["bcl-button", "bcl-button-".concat(variant), className]),
    intent: intent,
    size: size,
    type: type,
    variant: variant
  }), /*#__PURE__*/_react["default"].createElement(_ButtonContent.ButtonContent, {
    intent: intent,
    loadingMessage: loadingMessage,
    loadingState: loadingState,
    variant: variant,
    size: size
  }, children));
});

exports.Button = Button;
Button.displayName = "Button";