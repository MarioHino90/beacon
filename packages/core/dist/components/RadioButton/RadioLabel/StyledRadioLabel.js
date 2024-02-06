"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioButtonShadowCss = exports.StyledRadioLabel = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Label = require("../../Label");

var _excluded = ["checked", "disabled", "invalid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mdRadioSize = 18;
var mdRadioCheckedSize = 12;

function borderSwitch(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      invalid = _ref.invalid,
      props = _objectWithoutProperties(_ref, _excluded);

  if (disabled) {
    return (0, _beaconStyling.colorSelector)(props, "gray", 300);
  }

  if (checked) {
    return (0, _beaconStyling.intentColorSelector)(props, "info", 500);
  }

  if (invalid) {
    return (0, _beaconStyling.intentColorSelector)(props, "danger", 500);
  }

  return (0, _beaconStyling.colorSelector)(props, "gray", 400);
}

var radioButtonShadowCss = (0, _styledComponents.css)(["box-shadow:0 0 0 5px ", ";"], (0, _beaconStyling.getColor)("gray", 100));
exports.radioButtonShadowCss = radioButtonShadowCss;
var StyledRadioLabel = (0, _styledComponents["default"])(_Label.Label).withConfig({
  displayName: "StyledRadioLabel",
  componentId: "sc-3vfkaz-0"
})(["min-height:", "px;padding:0 ", "px;margin-bottom:0 !important;cursor:pointer;font-family:", ";font-weight:", ";color:", ";&:before,&:after{position:absolute;content:\"\";border-radius:50%;transition:0.15s all;}&:before{left:0;top:0;width:", "px;height:", "px;border-color:", ";border-style:solid;border-width:", ";background:", ";}&:hover::before{", "}&:after{top:", "px;left:", "px;width:", "px;height:", "px;background:", ";opacity:0;}span{line-height:1.7;}"], mdRadioSize + 2, mdRadioSize + 12, (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), function (props) {
  return props.disabled ? (0, _beaconStyling.colorSelector)(props, "gray", 400) : (0, _beaconStyling.colorSelector)(props, "gray", 900);
}, function (props) {
  return props.invalid ? mdRadioSize - 1 : mdRadioSize;
}, function (props) {
  return props.invalid ? mdRadioSize - 1 : mdRadioSize;
}, borderSwitch, function (props) {
  return props.invalid ? (0, _beaconStyling.borderWidthSelector)(props, "thick") : (0, _beaconStyling.borderWidthSelector)(props, "thin");
}, function (props) {
  return props.disabled && (0, _beaconStyling.colorSelector)(props, "gray", 100);
}, radioButtonShadowCss, (mdRadioSize - mdRadioCheckedSize) / 2 + 1, (mdRadioSize - mdRadioCheckedSize) / 2 + 1, function (props) {
  return props.invalid ? mdRadioCheckedSize + 1 : mdRadioCheckedSize;
}, function (props) {
  return props.invalid ? mdRadioCheckedSize + 1 : mdRadioCheckedSize;
}, function (props) {
  return !props.disabled ? (0, _beaconStyling.intentColorSelector)(props, "info", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 300);
});
exports.StyledRadioLabel = StyledRadioLabel;