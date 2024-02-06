"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMenuButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _BodyText = require("../BodyText");

var _Heading = require("../Heading");

var _Icon = require("../Icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledMenuButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledMenuButton",
  componentId: "sc-k61xmf-0"
})(["display:flex;align-items:center;width:100%;padding:", " ", ";text-align:left;&:hover:not(:disabled),&:focus:not(:disabled){background-color:", ";}", "{margin-right:", ";font-size:1rem;}", ";"], (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getColor)("gray", 100), _Icon.StyledIcon, (0, _beaconStyling.getSpacing)("sm"), function (props) {
  return props.disabled && (0, _styledComponents.css)(["cursor:not-allowed;", ",", ",", "{color:", ";}.bcl-braze-icon{opacity:0.3;}"], _Heading.StyledHeading, _BodyText.StyledBodyText, _Icon.StyledIcon, (0, _beaconStyling.getColor)("gray", 400));
});

exports.StyledMenuButton = StyledMenuButton;