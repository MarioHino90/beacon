"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputGroupAddon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["invalid"],
    _excluded2 = ["invalid"],
    _excluded3 = ["invalid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var disabledStyles = function disabledStyles(_ref) {
  var disabled = _ref.disabled;

  if (!disabled) {
    return null;
  }

  return (0, _styledComponents.css)(["background:", ";cursor:not-allowed;color:", ";font-style:italic;"], (0, _beaconStyling.getColor)("gray", 100), (0, _beaconStyling.getColor)("gray", 300));
};

var StyledInputGroupAddon = _styledComponents["default"].div.withConfig({
  displayName: "StyledInputGroupAddon",
  componentId: "sc-11q1i3g-0"
})(["display:inline-flex;justify-content:center;align-items:center;padding:0 ", ";background:", ";border-top-width:", ";border-bottom-width:", ";border-top-style:solid;border-bottom-style:solid;border-color:", ";&:first-child{border-left:", " solid ", ";border-top-left-radius:", ";border-bottom-left-radius:", ";}&:last-child{border-right:", " solid ", ";border-top-right-radius:", ";border-bottom-right-radius:", ";}", ";", ""], (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getColor)("gray", 0), (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getBorderWidth)("thin"), function (_ref2) {
  var invalid = _ref2.invalid,
      props = _objectWithoutProperties(_ref2, _excluded);

  return invalid ? (0, _beaconStyling.intentColorSelector)(props, "danger", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 300);
}, (0, _beaconStyling.getBorderWidth)("thin"), function (_ref3) {
  var invalid = _ref3.invalid,
      props = _objectWithoutProperties(_ref3, _excluded2);

  return invalid ? (0, _beaconStyling.intentColorSelector)(props, "danger", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 300);
}, (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getBorderWidth)("thin"), function (_ref4) {
  var invalid = _ref4.invalid,
      props = _objectWithoutProperties(_ref4, _excluded3);

  return invalid ? (0, _beaconStyling.intentColorSelector)(props, "danger", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 300);
}, (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getBorderRadius)("sm"), disabledStyles, function (props) {
  return props.styledCss;
});

exports.StyledInputGroupAddon = StyledInputGroupAddon;