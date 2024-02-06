"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunnelReport = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FunnelReport = function FunnelReport(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-funnel-report", className]),
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0.599976",
    y: "2.49976",
    width: "22.8",
    height: "19",
    fill: "white",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0.599976",
    y: "2.49976",
    width: "7.6",
    height: "6.65",
    fill: "#B5EDFF",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0.599976",
    y: "9.1499",
    width: "7.6",
    height: "5.7",
    fill: "#B5EDFF",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0.599976",
    y: "14.8501",
    width: "7.6",
    height: "6.65",
    fill: "#B5EDFF",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "8.20001",
    y: "2.49976",
    width: "7.6",
    height: "6.65",
    fill: "#B5EDFF",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "8.20001",
    y: "9.1499",
    width: "7.6",
    height: "5.7",
    fill: "white",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "8.20001",
    y: "14.8501",
    width: "7.6",
    height: "6.65",
    fill: "white",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "15.8",
    y: "2.49976",
    width: "7.6",
    height: "6.65",
    fill: "#B5EDFF",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "15.8",
    y: "9.1499",
    width: "7.6",
    height: "5.7",
    fill: "white",
    stroke: "black",
    strokeLinejoin: "round"
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }))));
};

exports.FunnelReport = FunnelReport;
FunnelReport.displayName = "FunnelReport";