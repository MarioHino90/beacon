"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDocument = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AddDocument = function AddDocument(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-add-document bcl-empty-table-icon", className]),
    width: "73",
    height: "55",
    viewBox: "0 0 73 55",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("mask", {
    id: "path-1-inside-1",
    fill: "white"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0.5",
    y: "0.125",
    width: "64.4661",
    height: "46.6852",
    rx: "1"
  })), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0.5",
    y: "0.125",
    width: "64.4661",
    height: "46.6852",
    rx: "1",
    fill: "white",
    stroke: "#101B24",
    strokeWidth: "4",
    mask: "url(#path-1-inside-1)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.87939 23.0833H58.5866",
    stroke: "#101B24",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.87939 28.9031H58.5866",
    stroke: "#101B24",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.87939 34.499H58.5866",
    stroke: "#101B24",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.87939 39.7593H58.5866",
    stroke: "#101B24",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "6.82349",
    y: "6.35156",
    width: "19.2503",
    height: "5.37217",
    fill: "#75DBE7"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "6.87939",
    y: "14.2417",
    width: "38.3886",
    height: "3.58145",
    fill: "#C4F0F5"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "63.2873",
    cy: "45.2082",
    r: "8.2128",
    fill: "#75DBE7",
    stroke: "#101B24",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M63.4221 40.3308V49.8146",
    stroke: "#101B24",
    strokeWidth: "2"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M68.1643 45.0725L58.6805 45.0725",
    stroke: "#101B24",
    strokeWidth: "2"
  }));
};

exports.AddDocument = AddDocument;
AddDocument.displayName = "AddDocument";