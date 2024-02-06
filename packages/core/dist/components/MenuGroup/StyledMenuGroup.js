"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMenuGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Heading = require("../Heading");

var _MenuButton = require("../MenuButton");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledMenuGroup = _styledComponents["default"].div.withConfig({
  displayName: "StyledMenuGroup",
  componentId: "sc-14bd442-0"
})(["width:100%;&:not(:last-of-type){padding-bottom:", ";margin-bottom:", ";border-bottom:1px solid ", ";}& > ", "{padding:", " ", " ", ";color:", ";text-transform:uppercase;}", ";"], (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getColor)("gray", 100), _Heading.StyledHeading, (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getColor)("gray", 500), function (props) {
  return props.hasHeading && (0, _styledComponents.css)(["&:last-of-type{margin-bottom:", ";}& > ", "{padding-left:", ";}"], (0, _beaconStyling.getSpacing)("sm"), _MenuButton.StyledMenuButton, (0, _beaconStyling.getSpacing)("xxl"));
});

exports.StyledMenuGroup = StyledMenuGroup;