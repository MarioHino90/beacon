"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getVariantColor = function getVariantColor(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, _excluded);

  switch (variant) {
    case "light":
      return (0, _beaconStyling.colorSelector)(props, "gray", 800);

    case "default":
    default:
      return (0, _beaconStyling.colorSelector)(props, "gray", 900);
  }
};

var getLineHeight = function getLineHeight(_ref2) {
  var level = _ref2.level;

  switch (level) {
    case 1:
      return "40px";

    case 2:
      return "30px";

    case 3:
      return "24px";

    case 4:
      return "22px";

    case 5:
      return "20px";

    case 6:
      return "18px";

    default:
      return;
  }
};

var StyledHeading = _styledComponents["default"].span.withConfig({
  displayName: "StyledHeading",
  componentId: "sc-8pzipl-0"
})(["margin:0;padding:0;color:", ";font-family:", ";font-weight:", ";font-size:", ";line-height:", ";"], getVariantColor, (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("bold"), function (props) {
  return (0, _beaconStyling.fontSizeSelector)(props, "heading", props.level);
}, getLineHeight);

exports.StyledHeading = StyledHeading;