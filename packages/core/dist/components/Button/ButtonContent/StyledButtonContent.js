"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonContent = void 0;

var _beaconStyling = require("@braze/beacon-styling");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fadeIn = (0, _styledComponents.keyframes)(["0%{opacity:0;}100%{opacity:1;}"]);

var StyledButtonContent = _styledComponents["default"].span.withConfig({
  displayName: "StyledButtonContent",
  componentId: "sc-23tvwe-0"
})(["display:inline-flex;opacity:", ";", " & > *:not(:last-of-type){margin-right:", ";}"], function (_ref) {
  var firstRender = _ref.firstRender;
  return firstRender ? 1 : 0;
}, function (_ref2) {
  var isAnimated = _ref2.isAnimated;
  return isAnimated && (0, _styledComponents.css)(["animation:", " 0.3s linear;animation-fill-mode:forwards;"], fadeIn);
}, (0, _beaconStyling.getSpacing)("sm"));

exports.StyledButtonContent = StyledButtonContent;