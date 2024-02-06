"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTab = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @fileoverview the styled tab navigational element
 */
var commonInteractions = (0, _styledComponents.css)(["&:hover{color:", ";border-bottom-color:", ";}&:focus{outline:", " solid ", ";outline-offset:2px;}"], (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getBorderWidth)("thick"), (0, _beaconStyling.getIntentColor)("primary", 200));

var getTabState = function getTabState(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled;

  if (disabled) {
    return (0, _styledComponents.css)(["color:", ";border-bottom-color:", ";&:focus{outline:none;}"], (0, _beaconStyling.getColor)("gray", 400), (0, _beaconStyling.getColor)("gray", 200));
  }

  if (active) {
    return (0, _styledComponents.css)(["color:", ";border-bottom-color:", ";", ";"], (0, _beaconStyling.getIntentColor)("primary", 500), (0, _beaconStyling.getIntentColor)("primary", 500), commonInteractions);
  }

  return (0, _styledComponents.css)(["color:", ";", ";"], (0, _beaconStyling.getColor)("gray", 600), commonInteractions);
};

var StyledTab = _styledComponents["default"].li.withConfig({
  displayName: "StyledTab",
  componentId: "sc-1fzys0h-0"
})(["position:relative;display:inline-block;cursor:", ";margin:0 ", " 0 0;padding:", " ", " ", " 0;text-align:left;border-bottom-width:", ";border-bottom-style:solid;font-family:", ";font-weight:", ";font-size:", ";line-height:16px;", ";"], function (props) {
  return props.disabled ? "no-drop" : "pointer";
}, (0, _beaconStyling.getSpacing)("lg"), (0, _beaconStyling.getSpacing)("xs"), (0, _beaconStyling.getSpacing)("lg"), (0, _beaconStyling.getSpacing)("xs"), (0, _beaconStyling.getBorderWidth)("thick"), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getFontSize)("body", "md"), getTabState);

exports.StyledTab = StyledTab;