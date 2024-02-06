"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _InputGroupAddon = require("../InputGroupAddon");

var _Input = require("../Input");

var _NumberInput = require("../NumberInput");

var _excluded = ["invalid"],
    _excluded2 = ["invalid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var notFirstChildCss = (0, _styledComponents.css)(["border-top-left-radius:0;border-bottom-left-radius:0;border-left:none;padding-left:11px;"]);
var notLastChildCss = (0, _styledComponents.css)(["border-top-right-radius:0;border-bottom-right-radius:0;border-right:none;padding-right:11px;"]);

var StyledInputGroup = _styledComponents["default"].div.withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-qngaxy-0"
})(["display:inline-flex;flex-wrap:nowrap;height:", ";width:", ";& > ", "{&:not(:first-child){", ";}&:not(:last-child){", ";}}", "{&:not(:first-child) > ", "{", ";}&:not(:last-child) > ", "{", ";}}&:focus-within{", "{", ";}", "{border-width:", ";border-color:", ";&:first-of-type:first-child{margin-left:-1px;}&:last-of-type:last-child{margin-right:-1px;}}}&:hover:not(:focus-within):not(.disabled){", ",", "{border-color:", ";}}"], _Input.getSize, function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth ? "100%" : "300px";
}, _Input.StyledInput, notFirstChildCss, notLastChildCss, _NumberInput.StyledNumberInput, _Input.StyledInput, notFirstChildCss, _Input.StyledInput, notLastChildCss, _Input.StyledInput, _Input.inputFocusCss, _InputGroupAddon.StyledInputGroupAddon, (0, _beaconStyling.getBorderWidth)("thick"), function (_ref2) {
  var invalid = _ref2.invalid,
      props = _objectWithoutProperties(_ref2, _excluded);

  return (0, _beaconStyling.intentColorSelector)(props, invalid ? "danger" : "primary", 500);
}, _Input.StyledInput, _InputGroupAddon.StyledInputGroupAddon, function (_ref3) {
  var invalid = _ref3.invalid,
      props = _objectWithoutProperties(_ref3, _excluded2);

  return invalid ? (0, _beaconStyling.intentColorSelector)(props, "danger", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 800);
});

exports.StyledInputGroup = StyledInputGroup;