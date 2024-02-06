"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCloseButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["size"],
    _excluded2 = ["size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledCloseButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledCloseButton",
  componentId: "sc-1oo54lx-0"
})(["font-family:inherit;font-size:inherit;line-height:inherit;text-transform:inherit;overflow:visible;border:0;margin:0;padding:0;background:transparent;&:focus{outline:0;}display:flex;justify-content:center;align-items:center;font-size:", ";top:", ";right:", ";background-color:transparent;cursor:pointer;border:none;outline:none;border-radius:50%;height:", ";width:", ";padding:0;color:", ";&:hover:enabled{background-color:", ";}&:active:enabled,&:focus-visible:enabled{background-color:rgba(0,0,0,20%);}"], function (props) {
  return props.size === "sm" ? "11px" : "1.25rem";
}, (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getSpacing)("sm"), function (_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  return size === "sm" ? (0, _beaconStyling.spacingSelector)(props, "xl") : (0, _beaconStyling.spacingSelector)(props, "xxl");
}, function (_ref2) {
  var size = _ref2.size,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return size === "sm" ? (0, _beaconStyling.spacingSelector)(props, "xl") : (0, _beaconStyling.spacingSelector)(props, "xxl");
}, (0, _beaconStyling.getColor)("gray", 400), (0, _beaconStyling.getColor)("gray", 100));

exports.StyledCloseButton = StyledCloseButton;