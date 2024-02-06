"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInputViewMode = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BodyText = require("../../BodyText");

var _Icon = require("../../Icon");

var _StyledInlineInputViewMode = require("./StyledInlineInputViewMode");

var _excluded = ["children", "className", "placeholder", "value"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InlineInputViewMode = function InlineInputViewMode(_ref) {
  var children = _ref.children,
      className = _ref.className,
      placeholder = _ref.placeholder,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_StyledInlineInputViewMode.StyledInlineInputViewMode, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-inline-input-view-mode", className]),
    tabIndex: 0
  }), children || /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
    className: "inline-input_view-mode_value",
    variant: placeholder && !value ? "hint" : undefined
  }, value || placeholder), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    className: "inline-input_view-mode_icon",
    size: "1x",
    name: "pencil-alt"
  }));
};

exports.InlineInputViewMode = InlineInputViewMode;
InlineInputViewMode.displayName = "InlineInputViewMode";