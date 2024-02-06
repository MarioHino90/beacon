"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonGroup = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Flex = require("../Flex");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapSideToMargin = function mapSideToMargin(_ref) {
  var aligner = _ref.aligner,
      side = _ref.side;

  if (!aligner) {
    return;
  }

  if (side === "left") {
    return (0, _styledComponents.css)(["margin-right:auto;"]);
  }

  if (side === "right") {
    return (0, _styledComponents.css)(["margin-left:auto;"]);
  }

  return;
};

var getAttrs = function getAttrs(_ref2) {
  var aligner = _ref2.aligner,
      className = _ref2.className;
  return {
    className: (0, _classnames["default"])(className, {
      aligner: aligner
    })
  };
};

var getColumnStyle = function getColumnStyle(_ref3) {
  var direction = _ref3.direction;

  if (direction === "column") {
    return (0, _styledComponents.css)(["flex-direction:column-reverse;& >:not(:first-child){margin-bottom:", ";}"], (0, _beaconStyling.getSpacing)("sm"));
  }

  return (0, _styledComponents.css)(["@media (max-width:", "px){flex-direction:column-reverse;& >:not(:first-child){margin-bottom:", ";}}@media (min-width:calc(", "px + 1px)){flex-direction:row;& >:not(:first-child){margin-left:", ";}", ";}"], (0, _beaconStyling.getBreakpoint)("sm"), (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getBreakpoint)("sm"), (0, _beaconStyling.getSpacing)("md"), mapSideToMargin);
};

var StyledButtonGroup = (0, _styledComponents["default"])(_Flex.Flex).attrs(getAttrs).withConfig({
  displayName: "StyledButtonGroup",
  componentId: "sc-1nck6ba-0"
})(["", ";"], getColumnStyle);
exports.StyledButtonGroup = StyledButtonGroup;