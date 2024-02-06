"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInlineInputEditMode = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Button = require("../../Button");

var _Icon = require("../../Icon");

var _Input = require("../../Input");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getSize = function getSize(_ref) {
  var vSize = _ref.vSize;

  switch (vSize) {
    case "sm":
      return (0, _styledComponents.css)([".inline-input-container ", "{right:", ";top:25%;}", "{height:32px;width:32px;}"], _Icon.StyledIcon, (0, _beaconStyling.getSpacing)("sm"), _Button.StyledButton);

    case "md":
    default:
      return (0, _styledComponents.css)([".inline-input-container ", "{right:", ";top:33%;}", "{height:40px;width:40px;}"], _Icon.StyledIcon, (0, _beaconStyling.getSpacing)("md"), _Button.StyledButton);
  }
};

var StyledInlineInputEditMode = _styledComponents["default"].div.withConfig({
  displayName: "StyledInlineInputEditMode",
  componentId: "sc-1h8h99u-0"
})(["@media (max-width:624px){.inline-input-button-container{justify-content:flex-end;}}.inline-input-container{display:inline-block;position:relative;", "{position:absolute;color:", ";cursor:pointer;opacity:", ";&:hover{color:", ";}}}", "{padding:", ";}", "{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;&,&:focus{padding-right:", ";}}", ";"], _Icon.StyledIcon, (0, _beaconStyling.getColor)("gray", 300), function (props) {
  return props.isValueDefined ? 1 : 0;
}, (0, _beaconStyling.getColor)("gray", 200), _Button.StyledButton, (0, _beaconStyling.getSpacing)("md"), _Input.StyledInput, (0, _beaconStyling.getSpacing)("xxl"), getSize);

exports.StyledInlineInputEditMode = StyledInlineInputEditMode;