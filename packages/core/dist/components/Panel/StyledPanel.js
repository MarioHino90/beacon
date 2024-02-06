"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPanel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["background"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getBackground(_ref) {
  var background = _ref.background,
      props = _objectWithoutProperties(_ref, _excluded);

  switch (background) {
    case "light":
      return (0, _beaconStyling.colorSelector)(props, "gray", 50);

    case "default":
    default:
      return (0, _beaconStyling.colorSelector)(props, "gray", 0);
  }
}

var StyledPanel = _styledComponents["default"].section.withConfig({
  displayName: "StyledPanel",
  componentId: "sc-1jr4re1-0"
})(["font-family:", ";font-weight:", ";margin-bottom:", ";background:", ";box-shadow:0 2px 6px 0 rgba(0,0,0,0.1);border-radius:3px;&:last-of-type{margin-bottom:", ";}"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getSpacing)("xxl"), getBackground, (0, _beaconStyling.getSpacing)("none"));

exports.StyledPanel = StyledPanel;