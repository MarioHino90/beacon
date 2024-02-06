"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MMS = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MMS = function MMS(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-mms-icon", className]),
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    width: "185",
    height: "96",
    transform: "translate(-20 -43)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.791 0.709999H2.64605C2.20639 0.709999 1.84998 1.06641 1.84998 1.50607V22.2039C1.84998 22.6436 2.20639 23 2.64605 23H13.791C14.2307 23 14.5871 22.6436 14.5871 22.2039V1.50607C14.5871 1.06641 14.2307 0.709999 13.791 0.709999Z",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "2",
    y: "1",
    width: "12",
    height: "22",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.30774 3.61168H14.2488",
    stroke: "black",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2.30774 18.737H14.2488",
    stroke: "black",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.21856 21.6921C8.65821 21.6921 9.01463 21.3357 9.01463 20.8961C9.01463 20.4564 8.65821 20.1 8.21856 20.1C7.7789 20.1 7.42249 20.4564 7.42249 20.8961C7.42249 21.3357 7.7789 21.6921 8.21856 21.6921Z",
    fill: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.07428 5.9999H22.2095V14.2094H9.07428V5.9999Z",
    fill: "white"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 6H9V15H11.6912L11.6913 17.0827L14.7019 15H22V6Z",
    fill: "#C4F0F5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12.2801",
    cy: "8.32",
    r: "0.72",
    fill: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.25 11.38L13 9.57999L11.2 12.73H20.2L17.5 8.22999L15.25 11.38Z",
    fill: "black"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9.07428 5.9999V5.4999C8.79814 5.4999 8.57428 5.72375 8.57428 5.9999H9.07428ZM22.2095 5.9999H22.7095C22.7095 5.72375 22.4856 5.4999 22.2095 5.4999V5.9999ZM9.07428 14.6199H8.57428C8.57428 14.896 8.79814 15.1199 9.07428 15.1199V14.6199ZM11.6912 14.6199L12.1912 14.6199C12.1912 14.3437 11.9674 14.1199 11.6912 14.1199V14.6199ZM11.6913 17.0827L11.1913 17.0827C11.1913 17.2686 11.2944 17.4392 11.4591 17.5256C11.6238 17.6119 11.8228 17.5997 11.9757 17.4939L11.6913 17.0827ZM15.2514 14.6199V14.1199C15.1497 14.1199 15.0505 14.1508 14.9669 14.2087L15.2514 14.6199ZM22.2095 14.6199V15.1199C22.4856 15.1199 22.7095 14.896 22.7095 14.6199H22.2095ZM9.07428 6.4999H22.2095V5.4999H9.07428V6.4999ZM9.57428 14.6199V5.9999H8.57428V14.6199H9.57428ZM11.6912 14.1199H9.07428V15.1199H11.6912V14.1199ZM12.1913 17.0827L12.1912 14.6199L11.1912 14.6199L11.1913 17.0827L12.1913 17.0827ZM14.9669 14.2087L11.4068 16.6715L11.9757 17.4939L15.5358 15.0311L14.9669 14.2087ZM22.2095 14.1199H15.2514V15.1199H22.2095V14.1199ZM21.7095 5.9999V14.6199H22.7095V5.9999H21.7095Z",
    fill: "black"
  }));
};

exports.MMS = MMS;
MMS.displayName = "MMS";