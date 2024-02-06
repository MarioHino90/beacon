"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchKnob = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getStyles = function getStyles(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled;

  if (disabled) {
    return null;
  }

  if (active) {
    return (0, _styledComponents.css)(["box-shadow:0px 1px 2px #025f6b;"]);
  }

  return (0, _styledComponents.css)(["box-shadow:0px 1px 2px ", ";"], (0, _beaconStyling.getColor)("gray", 400));
};

var SwitchKnob = _styledComponents["default"].div.withConfig({
  displayName: "SwitchKnob",
  componentId: "sc-up8vvr-0"
})(["background:", ";border-radius:100%;height:16px;width:16px;margin:0 2px;", ";"], (0, _beaconStyling.getColor)("gray", 0), getStyles);

exports.SwitchKnob = SwitchKnob;