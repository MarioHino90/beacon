"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getLinkStyles = function getLinkStyles(_ref) {
  var disabled = _ref.disabled;

  if (disabled) {
    return (0, _styledComponents.css)(["cursor:no-drop;color:", ";"], (0, _beaconStyling.getColor)("gray", 400));
  }

  return (0, _styledComponents.css)(["&:focus,&:hover{color:", ";text-decoration:underline;}"], (0, _beaconStyling.getColor)("blue", 600));
};

var getAttrs = function getAttrs(_ref2) {
  var className = _ref2.className;
  return {
    className: (0, _classnames["default"])(className, "bcl-link")
  };
};

var Link = _styledComponents["default"].a.attrs(getAttrs).withConfig({
  displayName: "Link",
  componentId: "sc-1c1ok2o-0"
})(["font-family:", ";font-weight:", ";font-size:", ";text-decoration:", ";color:", ";cursor:pointer;vertical-align:baseline;", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), function (props) {
  return props.variant === "inline" ? "inherit" : (0, _beaconStyling.getFontSize)("body", "md");
}, function (props) {
  return props.variant === "table" ? "none" : "underline";
}, (0, _beaconStyling.getColor)("blue", 400), getLinkStyles);

exports.Link = Link;
Link.displayName = "Link";