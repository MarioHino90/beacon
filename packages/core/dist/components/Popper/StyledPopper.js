"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _utils = require("./utils");

var _excluded = ["tipVariant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Function that uses the StyledPopperProps to return a theme color
 * @param props props object for StyledPopperProps, must contain 'tipVariant'
 * @returns a theme color based on the input
 */
var tipVariantSelector = function tipVariantSelector(_ref) {
  var tipVariant = _ref.tipVariant,
      props = _objectWithoutProperties(_ref, _excluded);

  return tipVariant === "dark" ? (0, _beaconStyling.colorSelector)(props, "gray", 900) : (0, _beaconStyling.colorSelector)(props, "gray", 100);
};

var StyledPopper = _styledComponents["default"].div.withConfig({
  displayName: "StyledPopper",
  componentId: "sc-anf0vy-0"
})(["font-family:", ";font-weight:", ";top:", "px;left:", "px;position:absolute;display:block;max-width:276px;font-style:normal;font-weight:400;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:0.875rem;word-wrap:break-word;background-color:white;background-clip:padding-box;z-index:", ";overflow:visible;max-height:30vh;border:", ";::before{content:\"\";display:", ";position:absolute;pointer-events:none;border:6px solid transparent;width:0;height:0;opacity:", ";", ";", ";", ";", ";}", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), function (props) {
  return props.top || 0;
}, function (props) {
  return props.left || 0;
}, function (props) {
  return props.zIndex;
}, function (props) {
  return props.interactive && "10px solid transparent";
}, function (props) {
  return props.noArrow ? "none" : "block";
}, function (props) {
  return props.tipVariant === "dark" && 0.95;
}, function (_ref2) {
  var placement = _ref2.placement,
      targetDimensions = _ref2.targetDimensions,
      popperDimensions = _ref2.popperDimensions;
  return placement && placement.includes("top") && (0, _styledComponents.css)(["top:100%;border-top-color:", ";left:calc( ", " - 6px );"], tipVariantSelector, (0, _utils.verticalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (_ref3) {
  var placement = _ref3.placement,
      targetDimensions = _ref3.targetDimensions,
      popperDimensions = _ref3.popperDimensions;
  return placement && placement.includes("right") && (0, _styledComponents.css)(["right:100%;border-right-color:", ";top:calc( ", " - 6px );"], tipVariantSelector, (0, _utils.horizontalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (_ref4) {
  var placement = _ref4.placement,
      targetDimensions = _ref4.targetDimensions,
      popperDimensions = _ref4.popperDimensions;
  return placement && placement.includes("bottom") && (0, _styledComponents.css)(["bottom:100%;border-bottom-color:", ";left:calc( ", " - 6px );"], tipVariantSelector, (0, _utils.verticalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (_ref5) {
  var placement = _ref5.placement,
      targetDimensions = _ref5.targetDimensions,
      popperDimensions = _ref5.popperDimensions;
  return placement && placement.includes("left") && (0, _styledComponents.css)(["left:100%;border-left-color:", ";top:calc( ", " - 6px );"], tipVariantSelector, (0, _utils.horizontalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (props) {
  return props.popperStyledCss;
});

exports.StyledPopper = StyledPopper;