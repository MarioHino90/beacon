"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIconButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["muted"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getMutedStyles = function getMutedStyles(_ref) {
  var muted = _ref.muted,
      props = _objectWithoutProperties(_ref, _excluded);

  if (!muted) {
    return;
  }

  return (0, _styledComponents.css)(["color:", ";&:hover:not(:disabled){background:", ";color:", ";}"], (0, _beaconStyling.colorSelector)(props, "gray", 600), (0, _beaconStyling.getColor)("gray", 100), (0, _beaconStyling.getColor)("gray", 800));
};

var getButtonSize = function getButtonSize(_ref2) {
  var size = _ref2.size;

  if (size === "sm") {
    return (0, _styledComponents.css)(["min-height:28px;min-width:28px;max-height:28px;max-width:28px;"]);
  }

  return (0, _styledComponents.css)(["min-height:38px;min-width:38px;max-height:38px;max-width:38px;"]);
};

var StyledIconButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledIconButton",
  componentId: "sc-1v8aztk-0"
})(["position:relative;display:inline-flex;justify-content:center;align-items:center;cursor:", ";", " background:", ";color:", ";&:hover:not(:disabled){background:", ";color:", ";}", ";&:focus:not(:disabled){&:after{content:\"\";display:block;position:absolute;top:-4px;bottom:-4px;left:-4px;right:-4px;border-radius:", ";border:", " solid ", ";}}&:disabled{color:", ";}"], function (props) {
  return props.disabled ? "no-drop" : "pointer";
}, getButtonSize, (0, _beaconStyling.getColor)("gray", 0), (0, _beaconStyling.getIntentColor)("primary", 500), (0, _beaconStyling.getIntentColor)("primary", 50), (0, _beaconStyling.getIntentColor)("primary", 400), getMutedStyles, (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getBorderWidth)("thick"), (0, _beaconStyling.getIntentColor)("primary", 200), (0, _beaconStyling.getColor)("gray", 300));

exports.StyledIconButton = StyledIconButton;