"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPopover = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _CloseButton = require("../CloseButton");

var _Popper = require("../Popper");

var _excluded = ["placement", "targetDimensions", "popperDimensions"],
    _excluded2 = ["placement", "targetDimensions", "popperDimensions"],
    _excluded3 = ["placement", "targetDimensions", "popperDimensions"],
    _excluded4 = ["placement", "targetDimensions", "popperDimensions"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledPopover = _styledComponents["default"].div.withConfig({
  displayName: "StyledPopover",
  componentId: "sc-yroeu1-0"
})(["padding:0.75rem;min-width:200px;max-width:300px;font-size:", ";border:1px solid ", ";border-radius:", ";box-shadow:0px 5px 21px rgba(195,195,195,0.5);::after{content:\"\";display:", ";position:absolute;width:0;height:0;border:5px solid transparent;", ";", ";", ";", ";}& + ", "{position:absolute;}", ";"], (0, _beaconStyling.getFontSize)("body", "xs"), (0, _beaconStyling.getColor)("gray", 100), (0, _beaconStyling.getBorderRadius)("sm"), function (props) {
  return props.noArrow ? "none" : "block";
}, function (_ref) {
  var placement = _ref.placement,
      targetDimensions = _ref.targetDimensions,
      popperDimensions = _ref.popperDimensions,
      props = _objectWithoutProperties(_ref, _excluded);

  return placement && placement.includes("top") && (0, _styledComponents.css)(["top:calc(100% - 1px);border-top-color:", ";left:calc( ", " - 5px );"], (0, _beaconStyling.colorSelector)(props, "gray", 0), (0, _Popper.verticalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (_ref2) {
  var placement = _ref2.placement,
      targetDimensions = _ref2.targetDimensions,
      popperDimensions = _ref2.popperDimensions,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return placement && placement.includes("right") && (0, _styledComponents.css)(["right:calc(100% - 1px);border-right-color:", ";top:calc( ", " - 5px );"], (0, _beaconStyling.colorSelector)(props, "gray", 0), (0, _Popper.horizontalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (_ref3) {
  var placement = _ref3.placement,
      targetDimensions = _ref3.targetDimensions,
      popperDimensions = _ref3.popperDimensions,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return placement && placement.includes("bottom") && (0, _styledComponents.css)(["bottom:calc(100% - 1px);border-bottom-color:", ";left:calc( ", " - 5px );"], (0, _beaconStyling.colorSelector)(props, "gray", 0), (0, _Popper.verticalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, function (_ref4) {
  var placement = _ref4.placement,
      targetDimensions = _ref4.targetDimensions,
      popperDimensions = _ref4.popperDimensions,
      props = _objectWithoutProperties(_ref4, _excluded4);

  return placement && placement.includes("left") && (0, _styledComponents.css)(["left:calc(100% - 1px);border-left-color:", ";top:calc( ", " - 5px );"], (0, _beaconStyling.colorSelector)(props, "gray", 0), (0, _Popper.horizontalPlacementSelector)(placement, targetDimensions, popperDimensions));
}, _CloseButton.StyledCloseButton, function (props) {
  return props.styledCss;
});

exports.StyledPopover = StyledPopover;