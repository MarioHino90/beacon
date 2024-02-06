"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperOverrides = exports.StyledMenu = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var popperOverrides = (0, _styledComponents.css)(["box-sizing:border-box;max-width:460px;background:transparent;"]);
exports.popperOverrides = popperOverrides;

var getSize = function getSize(_ref) {
  var size = _ref.size;

  if (size === "sm") {
    return (0, _styledComponents.css)(["max-width:200px;max-height:380px;"]);
  }

  return (0, _styledComponents.css)(["min-width:300px;max-width:460px;max-height:380px;"]);
};

var StyledMenu = _styledComponents["default"].ul.withConfig({
  displayName: "StyledMenu",
  componentId: "sc-1k700l7-0"
})(["display:flex;flex-direction:column;box-sizing:border-box;border:1px solid ", ";border-radius:", ";padding:", " 0;box-shadow:0px 5px 21px rgba(195,195,195,0.5);overflow-x:hidden;overflow-y:auto;background-color:", ";outline:none;margin-top:", ";", ";"], (0, _beaconStyling.getColor)("gray", 100), (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getSpacing)("md"), (0, _beaconStyling.getColor)("gray", 0), function (props) {
  return props.hideTopMargin && 0;
}, getSize);

exports.StyledMenu = StyledMenu;