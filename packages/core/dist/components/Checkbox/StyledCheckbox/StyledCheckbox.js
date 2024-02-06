"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckbox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["checked", "disabled", "indeterminate", "invalid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getCheckboxStyles = function getCheckboxStyles(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      indeterminate = _ref.indeterminate,
      invalid = _ref.invalid,
      props = _objectWithoutProperties(_ref, _excluded);

  if (disabled) {
    return (0, _styledComponents.css)(["background:", ";opacity:", ";border-color:", ";"], checked ? (0, _beaconStyling.intentColorSelector)(props, "primary", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 100), checked && "0.4", checked && "transparent");
  }

  if (invalid) {
    return (0, _styledComponents.css)(["border:", " solid ", ";&:focus{box-shadow:0 0 0 5px ", ";}"], (0, _beaconStyling.getBorderWidth)("thick"), (0, _beaconStyling.getIntentColor)("danger", 500), (0, _beaconStyling.getColor)("gray", 100));
  }

  return (0, _styledComponents.css)(["background:", ";border-color:", ";&:focus{box-shadow:0 0 0 5px ", ";}"], checked || indeterminate ? (0, _beaconStyling.intentColorSelector)(props, "primary", 500) : "white", checked ? (0, _beaconStyling.intentColorSelector)(props, "primary", 500) : (0, _beaconStyling.colorSelector)(props, "gray", 300), (0, _beaconStyling.getColor)("gray", 100));
};

var StyledCheckbox = _styledComponents["default"].div.withConfig({
  displayName: "StyledCheckbox",
  componentId: "sc-u1k3m0-0"
})(["display:inline-block;width:16px;height:16px;cursor:", ";border-radius:2px;border:", " solid ", ";transition:all 150ms;&:hover,&:focus{outline:none;}", ";"], function (props) {
  return props.disabled ? "not-allowed" : "cursor";
}, (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getColor)("gray", 300), getCheckboxStyles);

exports.StyledCheckbox = StyledCheckbox;