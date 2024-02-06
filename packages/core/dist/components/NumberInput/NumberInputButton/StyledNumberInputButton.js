"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledNumberInputButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getDirectionStyles = function getDirectionStyles(_ref) {
  var direction = _ref.direction;

  switch (direction) {
    case "down":
      return (0, _styledComponents.css)(["top:50%;bottom:1px;align-items:flex-start;"]);

    case "up":
      return (0, _styledComponents.css)(["top:1px;bottom:50%;align-items:flex-end;"]);

    default:
      return null;
  }
};

var StyledNumberInputButton = _styledComponents["default"].div.withConfig({
  displayName: "StyledNumberInputButton",
  componentId: "sc-16fvddf-0"
})(["position:absolute;display:inline-flex;right:1px;padding:0 ", ";color:", ";&:hover,&:active{color:", ";}&:active{background-color:", ";}", ";"], (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getColor)("gray", 300), (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getColor)("gray", 100), getDirectionStyles);

exports.StyledNumberInputButton = StyledNumberInputButton;