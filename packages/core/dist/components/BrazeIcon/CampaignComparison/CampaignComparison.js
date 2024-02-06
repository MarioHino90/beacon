"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignComparison = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CampaignComparison = function CampaignComparison(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-campaign-comparison", className]),
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "1",
    y: "8.99976",
    width: "14",
    height: "14",
    fill: "white",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    x: "7",
    y: "1",
    width: "16",
    height: "16",
    rx: "8",
    fill: "white",
    stroke: "black",
    strokeLinejoin: "round"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 8.99976H15V16.9998V16.9998C10.5817 16.9998 7 13.418 7 8.99976V8.99976Z",
    fill: "#B5EDFF",
    stroke: "black",
    strokeLinejoin: "round"
  }));
};

exports.CampaignComparison = CampaignComparison;
CampaignComparison.displayName = "CampaignComparison";