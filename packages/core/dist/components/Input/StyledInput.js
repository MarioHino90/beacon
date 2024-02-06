"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFocusCss = exports.getSize = exports.StyledInput = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["invalid"],
    _excluded2 = ["invalid"],
    _excluded3 = ["invalid"],
    _excluded4 = ["invalid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getSize = function getSize(_ref) {
  var vSize = _ref.vSize;

  switch (vSize) {
    case "sm":
      return "32px";

    case "md":
      return "40px";

    default:
      return null;
  }
};

exports.getSize = getSize;
var inputFocusCss = (0, _styledComponents.css)(["padding:0 11px 2px;border-width:", ";border-color:", ";background:", ";caret-color:", ";"], (0, _beaconStyling.getBorderWidth)("thick"), function (_ref2) {
  var invalid = _ref2.invalid,
      props = _objectWithoutProperties(_ref2, _excluded);

  return (0, _beaconStyling.intentColorSelector)(props, invalid ? "danger" : "primary", 500);
}, (0, _beaconStyling.getColor)("gray", 0), function (_ref3) {
  var invalid = _ref3.invalid,
      props = _objectWithoutProperties(_ref3, _excluded2);

  return (0, _beaconStyling.intentColorSelector)(props, invalid ? "danger" : "primary", 500);
});
exports.inputFocusCss = inputFocusCss;

var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "StyledInput",
  componentId: "sc-1nagddx-0"
})(["position:relative;width:", ";display:inline-block;box-sizing:border-box;font-size:", ";font-family:", ";font-weight:", ";border:", " solid ", ";border-radius:", ";background:", ";color:", ";height:", ";padding:2px 12px 4px;&::placeholder{color:", ";font-style:italic;}&:hover,&:focus{outline:none;}&:disabled{background:", ";cursor:not-allowed;color:", ";font-style:italic;}&:hover:not(:disabled){border-color:", ";}&:focus:not(:disabled),&:active:not(:disabled){", ";}"], function (_ref4) {
  var fullWidth = _ref4.fullWidth;
  return fullWidth ? "100%" : "300px";
}, (0, _beaconStyling.getFontSize)("body", "md"), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getBorderWidth)("thin"), function (_ref5) {
  var invalid = _ref5.invalid,
      props = _objectWithoutProperties(_ref5, _excluded3);

  return invalid ? (0, _beaconStyling.intentColorSelector)(props, "danger", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 300);
}, (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getColor)("gray", 0), (0, _beaconStyling.getColor)("gray", 900), getSize, (0, _beaconStyling.getColor)("gray", 400), (0, _beaconStyling.getColor)("gray", 100), (0, _beaconStyling.getColor)("gray", 300), function (_ref6) {
  var invalid = _ref6.invalid,
      props = _objectWithoutProperties(_ref6, _excluded4);

  return invalid ? (0, _beaconStyling.intentColorSelector)(props, "danger", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 800);
}, inputFocusCss);

exports.StyledInput = StyledInput;