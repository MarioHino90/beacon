"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBodyText = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["variant"],
    _excluded2 = ["fontFamily"],
    _excluded3 = ["fontWeight"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getBodyStyles(_ref) {
  var size = _ref.size;

  switch (size) {
    case "sm":
      return (0, _styledComponents.css)(["color:", ";font-size:", ";line-height:18px;"], (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getFontSize)("body", "xs"));

    case "label":
      return (0, _styledComponents.css)(["font-size:", ";color:", ";font-weight:", ";"], (0, _beaconStyling.getFontSize)("body", "sm"), (0, _beaconStyling.getColor)("gray", 800), (0, _beaconStyling.getFontWeight)("bold"));

    case "md":
    default:
      return (0, _styledComponents.css)(["color:", ";font-size:", ";line-height:20px;"], (0, _beaconStyling.getColor)("gray", 900), (0, _beaconStyling.getFontSize)("body", "md"));
  }
}

function getBodyVariant(_ref2) {
  var variant = _ref2.variant,
      props = _objectWithoutProperties(_ref2, _excluded);

  switch (variant) {
    case "success":
    case "danger":
    case "warning":
      return (0, _styledComponents.css)(["color:", ";"], (0, _beaconStyling.intentColorSelector)(props, variant, 500));

    case "info":
      return (0, _styledComponents.css)(["color:", ";"], (0, _beaconStyling.intentColorSelector)(props, "primary", 500));

    case "hint":
      return (0, _styledComponents.css)(["color:", ";"], (0, _beaconStyling.colorSelector)(props, "gray", 600));

    default:
      return null;
  }
}

var getBodyFontFamily = function getBodyFontFamily(_ref3) {
  var _ref3$fontFamily = _ref3.fontFamily,
      fontFamily = _ref3$fontFamily === void 0 ? "base" : _ref3$fontFamily,
      props = _objectWithoutProperties(_ref3, _excluded2);

  return (0, _styledComponents.css)(["font-family:", ";"], (0, _beaconStyling.fontFamilySelector)(props, fontFamily));
};

var getBodyFontWeight = function getBodyFontWeight(_ref4) {
  var fontWeight = _ref4.fontWeight,
      props = _objectWithoutProperties(_ref4, _excluded3);

  if (!fontWeight) {
    return null;
  }

  return (0, _styledComponents.css)(["font-weight:", ";"], (0, _beaconStyling.fontWeightSelector)(props, fontWeight));
};

var StyledBodyText = _styledComponents["default"].span.withConfig({
  displayName: "StyledBodyText",
  componentId: "sc-1vhzqyk-0"
})(["", ";", ";", ";", ";font-style:", ";text-decoration:", ";"], getBodyFontFamily, getBodyStyles, getBodyVariant, getBodyFontWeight, function (props) {
  return props.italic && "italic";
}, function (props) {
  return props.decoration;
});

exports.StyledBodyText = StyledBodyText;