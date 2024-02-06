"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCollapsibleBody = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _CollapsibleList = require("../CollapsibleList");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getStyles = function getStyles(_ref) {
  var isOpen = _ref.isOpen;

  if (isOpen) {
    return (0, _styledComponents.css)(["padding:", ";margin-top:", ";height:auto;opacity:1;"], (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getSpacing)("sm"));
  }

  return (0, _styledComponents.css)(["height:0;overflow:hidden;opacity:0;"]);
};

var StyledCollapsibleBody = _styledComponents["default"].div.withConfig({
  displayName: "StyledCollapsibleBody",
  componentId: "sc-1vi5t6n-0"
})(["box-sizing:border-box;width:100%;background-color:", ";border-radius:", ";transition:opacity 0.3s linear;", ";", ":not(:last-of-type){padding-bottom:", ";border-bottom:", " solid ", ";margin-bottom:", ";}"], (0, _beaconStyling.getColor)("gray", 50), (0, _beaconStyling.getBorderRadius)("md"), getStyles, _CollapsibleList.StyledCollapsibleList, (0, _beaconStyling.getSpacing)("xl"), (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getColor)("gray", 200), (0, _beaconStyling.getSpacing)("xl"));

exports.StyledCollapsibleBody = StyledCollapsibleBody;