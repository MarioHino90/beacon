"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInputButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../../Icon");

var _StyledNumberInputButton = require("./StyledNumberInputButton");

var _excluded = ["className", "direction"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberInputButton = function NumberInputButton(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_StyledNumberInputButton.StyledNumberInputButton, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-number-input-button", className]),
    direction: direction
  }), direction && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    size: "1x",
    name: "angle-".concat(direction)
  }));
};

exports.NumberInputButton = NumberInputButton;
NumberInputButton.displayName = "NumberInputButton";