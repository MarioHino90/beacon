"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailSettings = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EmailSettings = function EmailSettings(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-email-settings-icon", className]),
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.75 17C16.0261 17 16.25 16.7761 16.25 16.5C16.25 16.2239 16.0261 16 15.75 16V17ZM17.5 11C17.5 11.2761 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.2761 18.5 11H17.5ZM7 8.5H17V7.5H7V8.5ZM6.5 15.5V9H5.5V15.5H6.5ZM15.75 16H7V17H15.75V16ZM17.5 9V11H18.5V9H17.5ZM5.5 15.5C5.5 16.3284 6.17157 17 7 17V16C6.72386 16 6.5 15.7761 6.5 15.5H5.5ZM17 8.5C17.2761 8.5 17.5 8.72386 17.5 9H18.5C18.5 8.17157 17.8284 7.5 17 7.5V8.5ZM7 7.5C6.17157 7.5 5.5 8.17157 5.5 9H6.5C6.5 8.72386 6.72386 8.5 7 8.5V7.5Z",
    fill: "#2E3C47"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.6292 8.5L12 13L6.37085 8.5",
    stroke: "#2E3C47",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 15L18 13L20 15",
    stroke: "#2E3C47",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("line", {
    x1: "18",
    y1: "14",
    x2: "18",
    y2: "17",
    stroke: "#2E3C47",
    strokeLinecap: "round"
  }));
};

exports.EmailSettings = EmailSettings;
EmailSettings.displayName = "EmailSettings";