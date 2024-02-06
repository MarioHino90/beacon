"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledToaster = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _reactToastify = require("react-toastify");

var _ToastCloseButton = require("./ToastCloseButton");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getToastIntentStyle = function getToastIntentStyle(intent) {
  return (0, _styledComponents.css)(["border:1px solid ", ";border-left:0.5rem solid ", ";", "{&:hover,&:focus{background:", ";}}"], (0, _beaconStyling.getIntentColor)(intent, 400), (0, _beaconStyling.getIntentColor)(intent, 400), _ToastCloseButton.StyledToastCloseButton, (0, _beaconStyling.getIntentColor)(intent, 50));
};

var StyledToaster = (0, _styledComponents["default"])(_reactToastify.ToastContainer).withConfig({
  displayName: "StyledToaster",
  componentId: "sc-1rfesen-0"
})(["box-sizing:border-box;@media (min-width:481px){width:328px;}.Toastify__toast{padding:0;background:", ";box-shadow:0px 3px 7px rgba(46,60,71,0.1);border-radius:", ";transition:all 100ms ease-in-out;&:hover{box-shadow:0px 9px 7px rgba(46,60,71,0.1);}@media (max-width:480px){margin-bottom:", ";}}.Toastify__toast--error{", ";}.Toastify__toast--info{", ";}.Toastify__toast--success{", ";}.Toastify__toast--warning{", ";}.Toastify__toast-body{color:", ";font-family:", ";font-weight:", ";font-size:", ";margin:0;}"], (0, _beaconStyling.getColor)("gray", 0), (0, _beaconStyling.getBorderRadius)("md"), (0, _beaconStyling.getSpacing)("md"), getToastIntentStyle("danger"), getToastIntentStyle("primary"), getToastIntentStyle("success"), getToastIntentStyle("warning"), (0, _beaconStyling.getColor)("gray", 800), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getFontSize)("body", "sm"));
exports.StyledToaster = StyledToaster;