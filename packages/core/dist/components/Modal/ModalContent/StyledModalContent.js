"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalContent = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _CloseButton = require("../../CloseButton");

var _ModalBody = require("../../ModalBody");

var _ModalFooter = require("../../ModalFooter");

var _ModalHeading = require("../../ModalHeading");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mapModalSizeToSpacing = function mapModalSizeToSpacing(_ref) {
  var size = _ref.size;

  switch (size) {
    case "md":
    case "lg":
    case "xl":
      return (0, _styledComponents.css)(["padding:", ";", "{margin-bottom:", ";}", "{padding:", ";margin:-", ";}", "{&:not(.aligner){margin-top:", ";}&.aligner{margin-top:", ";}}", "{top:", ";right:", ";font-size:16px;}"], (0, _beaconStyling.getSpacing)("xxl"), _ModalHeading.StyledModalHeading, (0, _beaconStyling.getSpacing)("xl"), _ModalBody.StyledModalBody, (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getSpacing)("md"), _ModalFooter.StyledModalFooter, (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getSpacing)("sm"), _CloseButton.StyledCloseButton, (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getSpacing)("xl"));

    case "sm":
    default:
      return (0, _styledComponents.css)(["padding:", ";", "{margin:", " ", " ", ";}", "{padding:", " ", ";}", "{padding:0 ", ";margin-bottom:", ";&:not(.aligner){margin-top:", ";}&.aligner{margin-top:", ";}}", "{top:", ";right:", ";font-size:12px;}"], (0, _beaconStyling.getSpacing)("xl"), _ModalHeading.StyledModalHeading, (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getSpacing)("xs"), _ModalBody.StyledModalBody, (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getSpacing)("md"), _ModalFooter.StyledModalFooter, (0, _beaconStyling.getSpacing)("xs"), (0, _beaconStyling.getSpacing)("xs"), (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getSpacing)("sm"), _CloseButton.StyledCloseButton, (0, _beaconStyling.getSpacing)("lg"), (0, _beaconStyling.getSpacing)("lg"));
  }
};

var mapModalSizeToPx = function mapModalSizeToPx(_ref2) {
  var size = _ref2.size;

  switch (size) {
    case "md":
      return (0, _styledComponents.css)(["width:760px;"]);

    case "lg":
      return (0, _styledComponents.css)(["width:920px;"]);

    case "xl":
      return (0, _styledComponents.css)(["width:1080px;"]);

    case "sm":
    default:
      return (0, _styledComponents.css)(["width:520px;"]);
  }
};

var StyledModalContent = _styledComponents["default"].div.withConfig({
  displayName: "StyledModalContent",
  componentId: "sc-m90k5f-0"
})(["display:flex;flex-direction:column;position:absolute;pointer-events:auto;background-color:", ";-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);outline:0;border:none;border-radius:", ";overflow-x:hidden;overflow-y:scroll;box-sizing:border-box;max-width:90vw;max-height:calc(100vh - 120px);", ";", ";@media (max-width:", "px){width:90vw;}"], (0, _beaconStyling.getColor)("gray", 0), (0, _beaconStyling.getBorderRadius)("md"), mapModalSizeToPx, mapModalSizeToSpacing, (0, _beaconStyling.getBreakpoint)("sm"));

exports.StyledModalContent = StyledModalContent;