"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["getColor"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * gets the hex value of the color, if possible
 *
 * @param color the color to get the hex value for
 *
 * @returns the hex value string or empty string
 */
var getColorHex = function getColorHex(getColor, props) {
  if (!getColor) {
    return "";
  }

  return getColor(props) || "";
};

var StyledIcon = _styledComponents["default"].span.withConfig({
  displayName: "StyledIcon",
  componentId: "sc-1xnc2oy-0"
})(["display:inline-flex;justify-content:center;align-items:center;color:", ";"], function (_ref) {
  var getColor = _ref.getColor,
      props = _objectWithoutProperties(_ref, _excluded);

  return getColorHex(getColor, props);
});

exports.StyledIcon = StyledIcon;