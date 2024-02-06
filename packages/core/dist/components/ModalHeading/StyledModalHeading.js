"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalHeading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Heading = require("../Heading");

var _Icon = require("../Icon");

var _excluded = ["iconType"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getIconColor = function getIconColor(_ref) {
  var iconType = _ref.iconType,
      props = _objectWithoutProperties(_ref, _excluded);

  switch (iconType) {
    case "warning":
      return (0, _beaconStyling.intentColorSelector)(props, "warning", 500);

    default:
      return;
  }
};

var StyledModalHeading = _styledComponents["default"].div.withConfig({
  displayName: "StyledModalHeading",
  componentId: "sc-1pcxpf5-0"
})(["display:flex;", ".optional-icon{margin-right:0.5rem;color:", ";}", "{font-family:", ";font-weight:", ";margin-right:auto;}"], _Icon.StyledIcon, getIconColor, _Heading.StyledHeading, (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"));

exports.StyledModalHeading = StyledModalHeading;