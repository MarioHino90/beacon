"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInlineInputViewMode = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../../Icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getSize = function getSize(_ref) {
  var vSize = _ref.vSize;

  switch (vSize) {
    case "sm":
      return (0, _styledComponents.css)(["height:32px;"]);

    case "md":
    default:
      return (0, _styledComponents.css)(["height:40px;"]);
  }
};

var StyledInlineInputViewMode = _styledComponents["default"].div.withConfig({
  displayName: "StyledInlineInputViewMode",
  componentId: "sc-ba3gvp-0"
})(["display:inline-flex;align-items:center;width:fit-content;", ";", ";"], function (props) {
  return props.disabled ? (0, _styledComponents.css)(["", "{display:none;}"], _Icon.StyledIcon) : (0, _styledComponents.css)(["", "{opacity:0;margin-left:", ";color:", ";cursor:pointer;}&:hover,&:focus{", "{opacity:1;}}"], _Icon.StyledIcon, (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getIntentColor)("primary", 500), _Icon.StyledIcon);
}, getSize);

exports.StyledInlineInputViewMode = StyledInlineInputViewMode;