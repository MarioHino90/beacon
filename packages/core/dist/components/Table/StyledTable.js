"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTable = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _getSizeSpacing = require("../../services/getSizeSpacing");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledTable = _styledComponents["default"].table.withConfig({
  displayName: "StyledTable",
  componentId: "sc-1m9wx1r-0"
})(["font-family:", ";font-weight:", ";font-size:", ";border-collapse:collapse;width:", ";td,th{padding:", ";}.bcl-spanned-cell:not(:last-child){padding-bottom:", ";}", " td:not(:first-child){", "}"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getFontSize)("body", "md"), function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth && "100%";
}, function (_ref2) {
  var size = _ref2.size;
  return (0, _getSizeSpacing.getSizeSpacing)(size);
}, function (_ref3) {
  var size = _ref3.size;
  return (0, _getSizeSpacing.getSizeSpacing)(size);
}, function (_ref4) {
  var interactive = _ref4.interactive;
  return !interactive ? (0, _styledComponents.css)([".bcl-tr:hover{background-color:transparent;}"]) : "";
}, function (_ref5) {
  var verticalRule = _ref5.verticalRule;
  return verticalRule && (0, _styledComponents.css)(["border-left:", " solid ", ";"], (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getColor)("gray", 100));
});

exports.StyledTable = StyledTable;