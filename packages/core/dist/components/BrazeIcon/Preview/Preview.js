"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Preview = function Preview(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-preview-icon", className]),
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 11.5862C19 12.069 16.8315 16.1724 12 16.1724C7.16849 16.1724 5 11.8276 5 11.5862C5 11.3448 7.16849 7 12 7C16.8315 7 19 11.1034 19 11.5862Z",
    stroke: "#2E3C47"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "11.5862",
    r: "2.65517",
    stroke: "#2E3C47"
  }));
};

exports.Preview = Preview;
Preview.displayName = "Preview";