"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSwitchWrapper = exports.StyledSwitch = exports.HiddenCheckbox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["active", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HiddenCheckbox = _styledComponents["default"].input.attrs({
  type: "checkbox"
}).withConfig({
  displayName: "StyledSwitch__HiddenCheckbox",
  componentId: "sc-a0uuuy-0"
})(["position:absolute;opacity:0;margin:0;width:0;"]);

exports.HiddenCheckbox = HiddenCheckbox;

var getStyles = function getStyles(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  if (disabled) {
    return (0, _styledComponents.css)(["background:", ";", ""], (0, _beaconStyling.getColor)("gray", 200), active ? "justify-content: flex-end;" : "");
  }

  if (active) {
    return (0, _styledComponents.css)(["background:", ";justify-content:flex-end;"], (0, _beaconStyling.intentColorSelector)(props, "primary", 500));
  }

  return (0, _styledComponents.css)(["background:", ";"], (0, _beaconStyling.getColor)("gray", 300));
};

var StyledSwitchWrapper = _styledComponents["default"].button.attrs({
  type: "button"
}).withConfig({
  displayName: "StyledSwitch__StyledSwitchWrapper",
  componentId: "sc-a0uuuy-1"
})(["display:inline-block;cursor:", ";"], function (props) {
  return props.disabled && "no-drop";
});

exports.StyledSwitchWrapper = StyledSwitchWrapper;

var StyledSwitch = _styledComponents["default"].div.withConfig({
  displayName: "StyledSwitch",
  componentId: "sc-a0uuuy-2"
})(["height:20px;width:38px;outline:none;display:flex;align-items:center;justify-content:flex-start;border-radius:100px;", ""], getStyles);

exports.StyledSwitch = StyledSwitch;