"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../Icon");

var _excluded = ["intent", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getButtonSize = function getButtonSize(_ref) {
  var size = _ref.size;

  switch (size) {
    case "sm":
      return (0, _styledComponents.css)(["font-size:", ";padding:0 ", ";height:32px;", "{font-size:getFontSize(\"body\",\"xs\");}& > *:not(:last-of-type){margin-right:", ";}"], (0, _beaconStyling.getFontSize)("body", "sm"), (0, _beaconStyling.getSpacing)("sm"), _Icon.StyledIcon, (0, _beaconStyling.getSpacing)("xs"));

    case "lg":
      return (0, _styledComponents.css)(["padding:0 ", ";height:40px;"], (0, _beaconStyling.getSpacing)("xl"));

    case "full":
      return (0, _styledComponents.css)(["display:flex;height:40px;width:100%;"]);
  }
};

var getButtonColors = function getButtonColors(_ref2) {
  var intent = _ref2.intent,
      variant = _ref2.variant,
      props = _objectWithoutProperties(_ref2, _excluded);

  switch (variant) {
    case "primary":
      if (intent === "muted") {
        return (0, _styledComponents.css)(["border:none;color:", ";&:hover:not(:disabled){background:", ";}&:active:not(:disabled){background:", ";}&[data-loading-state=\"idle\"]:disabled{color:", ";}"], (0, _beaconStyling.colorSelector)(props, "gray", 800), (0, _beaconStyling.colorSelector)(props, "gray", 100), (0, _beaconStyling.colorSelector)(props, "gray", 200), (0, _beaconStyling.colorSelector)(props, "gray", 300));
      }

      return (0, _styledComponents.css)(["background:", ";border-color:", ";color:", ";&:hover:not(:disabled){background:", ";border-color:", ";}&:active:not(:disabled){background:", ";border-color:", ";}&[data-loading-state=\"idle\"]:disabled{background:", ";border-color:", ";}"], (0, _beaconStyling.intentColorSelector)(props, intent, 500), (0, _beaconStyling.intentColorSelector)(props, intent, 500), (0, _beaconStyling.colorSelector)(props, "gray", 0), (0, _beaconStyling.intentColorSelector)(props, intent, 400), (0, _beaconStyling.intentColorSelector)(props, intent, 400), (0, _beaconStyling.intentColorSelector)(props, intent, 600), (0, _beaconStyling.intentColorSelector)(props, intent, 600), (0, _beaconStyling.colorSelector)(props, "gray", 200), (0, _beaconStyling.colorSelector)(props, "gray", 200));

    case "secondary":
      if (intent === "muted") {
        return (0, _styledComponents.css)(["border-color:", ";color:", ";&:hover:not(:disabled){background:", ";}&:active:not(:disabled){background:", ";}&[data-loading-state=\"idle\"]:disabled{color:", ";}"], (0, _beaconStyling.colorSelector)(props, "gray", 200), (0, _beaconStyling.colorSelector)(props, "gray", 800), (0, _beaconStyling.colorSelector)(props, "gray", 100), (0, _beaconStyling.colorSelector)(props, "gray", 200), (0, _beaconStyling.colorSelector)(props, "gray", 300));
      }

      return (0, _styledComponents.css)(["border-color:", ";color:", ";&:hover:not(:disabled){background:", ";}&:active:not(:disabled){background:", ";}&[data-loading-state=\"idle\"]:disabled{border-color:", ";color:", ";}"], (0, _beaconStyling.intentColorSelector)(props, intent, 500), (0, _beaconStyling.intentColorSelector)(props, intent, 500), (0, _beaconStyling.intentColorSelector)(props, intent, 50), (0, _beaconStyling.intentColorSelector)(props, intent, 100), (0, _beaconStyling.colorSelector)(props, "gray", 300), (0, _beaconStyling.colorSelector)(props, "gray", 300));

    case "tertiary":
      return (0, _styledComponents.css)(["border:none;color:", ";&:hover:not(:disabled){background:", ";}&:active:not(:disabled){background:", ";}&[data-loading-state=\"idle\"]:disabled{color:", ";}"], intent === "muted" ? (0, _beaconStyling.colorSelector)(props, "gray", 600) : (0, _beaconStyling.intentColorSelector)(props, intent, 500), intent === "muted" ? (0, _beaconStyling.colorSelector)(props, "gray", 100) : (0, _beaconStyling.intentColorSelector)(props, intent, 50), intent === "muted" ? (0, _beaconStyling.colorSelector)(props, "gray", 200) : (0, _beaconStyling.intentColorSelector)(props, intent, 100), (0, _beaconStyling.colorSelector)(props, "gray", 300));

    case "quaternary":
      return (0, _styledComponents.css)(["border:none;background:none;color:", ";padding:2px;height:unset;&:hover:not(:disabled){text-decoration:underline;}&:active:not(:disabled){text-decoration:underline;color:", ";}&:focus:not(:disabled){text-decoration:underline;color:", ";}&[data-loading-state=\"idle\"]:disabled{color:", ";}"], intent === "muted" ? (0, _beaconStyling.colorSelector)(props, "gray", 600) : (0, _beaconStyling.intentColorSelector)(props, intent, 500), intent === "muted" ? (0, _beaconStyling.colorSelector)(props, "gray", 400) : (0, _beaconStyling.intentColorSelector)(props, intent, 400), intent === "muted" && (0, _beaconStyling.colorSelector)(props, "gray", 400), (0, _beaconStyling.colorSelector)(props, "gray", 300));
  }
};

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledButton",
  componentId: "sc-4mnsh2-0"
})(["display:inline-flex;justify-content:center;align-items:center;cursor:", ";border-width:", ";border-style:solid;border-radius:", ";font-size:", ";font-family:", ";font-weight:", ";background:", ";position:relative;min-width:", "px;", "{font-size:12px;}", ";", ";&:focus:not(:disabled){outline:", " solid ", ";outline-offset:2px;position:relative;}"], function (props) {
  return props.disabled ? "no-drop" : "pointer";
}, (0, _beaconStyling.getBorderWidth)("thin"), (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getFontSize)("body", "md"), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getColor)("gray", 0), function (props) {
  return props.minWidth;
}, _Icon.StyledIcon, getButtonSize, getButtonColors, (0, _beaconStyling.getBorderWidth)("thick"), (0, _beaconStyling.getIntentColor)("primary", 200));

exports.StyledButton = StyledButton;