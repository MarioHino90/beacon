"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLoadingSpinnerPath = exports.StyledLoadingIconWithGradient = exports.StyledLinearGradient100Stop = exports.StyledLinearGradient0Stop = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["intent", "variant"],
    _excluded2 = ["intent", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var rotate = (0, _styledComponents.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var dash = (0, _styledComponents.keyframes)(["0%{stroke-dasharray:1,150;stroke-dashoffset:0;}50%{stroke-dasharray:90,150;stroke-dashoffset:-35;}100%{stroke-dasharray:90,150;stroke-dashoffset:-124;}"]);

var getGradientId = function getGradientId(_ref) {
  var gradientId = _ref.gradientId;
  return gradientId;
};

var StyledLoadingSpinnerPath = _styledComponents["default"].circle.withConfig({
  displayName: "StyledLoadingIconWithGradient__StyledLoadingSpinnerPath",
  componentId: "sc-1p3nize-0"
})(["stroke:url(#", ");stroke-linecap:round;animation:", " 1.5s ease-in-out infinite;"], getGradientId, dash);

exports.StyledLoadingSpinnerPath = StyledLoadingSpinnerPath;

var getIconSize = function getIconSize(_ref2) {
  var size = _ref2.size;

  switch (size) {
    case "sm":
      return (0, _styledComponents.css)(["width:12px;height:12px;"]);

    case "lg":
    case "full":
    default:
      return (0, _styledComponents.css)(["width:16px;height:16px;"]);
  }
};

var StyledLoadingIconWithGradient = _styledComponents["default"].svg.withConfig({
  displayName: "StyledLoadingIconWithGradient",
  componentId: "sc-1p3nize-1"
})(["animation:", " 2s linear infinite;", ";"], rotate, getIconSize);

exports.StyledLoadingIconWithGradient = StyledLoadingIconWithGradient;

var get0StopColors = function get0StopColors(_ref3) {
  var intent = _ref3.intent,
      variant = _ref3.variant,
      props = _objectWithoutProperties(_ref3, _excluded);

  if (intent === "muted") {
    return (0, _beaconStyling.colorSelector)(props, "gray", 100);
  }

  switch (variant) {
    case "primary":
      return (0, _beaconStyling.colorSelector)(props, "gray", 0);

    case "secondary":
    case "tertiary":
    case "quaternary":
    default:
      return (0, _beaconStyling.intentColorSelector)(props, intent, 100);
  }
};

var get100StopColors = function get100StopColors(_ref4) {
  var intent = _ref4.intent,
      variant = _ref4.variant,
      props = _objectWithoutProperties(_ref4, _excluded2);

  if (intent === "muted") {
    return (0, _beaconStyling.colorSelector)(props, "gray", 800);
  }

  switch (variant) {
    case "primary":
      return (0, _beaconStyling.colorSelector)(props, "gray", 0);

    case "secondary":
    case "tertiary":
    case "quaternary":
    default:
      return (0, _beaconStyling.intentColorSelector)(props, intent, 600);
  }
};

var StyledLinearGradient0Stop = _styledComponents["default"].stop.withConfig({
  displayName: "StyledLoadingIconWithGradient__StyledLinearGradient0Stop",
  componentId: "sc-1p3nize-2"
})(["stop-color:", ";"], get0StopColors);

exports.StyledLinearGradient0Stop = StyledLinearGradient0Stop;

var StyledLinearGradient100Stop = _styledComponents["default"].stop.withConfig({
  displayName: "StyledLoadingIconWithGradient__StyledLinearGradient100Stop",
  componentId: "sc-1p3nize-3"
})(["stop-color:", ";"], get100StopColors);

exports.StyledLinearGradient100Stop = StyledLinearGradient100Stop;