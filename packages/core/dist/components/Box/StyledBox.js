"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getBoxCss = require("./getBoxCss");

var _excluded = ["boxMargin", "boxPadding"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledBox = _styledComponents["default"].div.withConfig({
  displayName: "StyledBox",
  componentId: "sc-1ab8lum-0"
})(["display:", ";", ";", ";"], function (props) {
  return props.inline ? "inline-block" : "block";
}, function (_ref) {
  var boxMargin = _ref.boxMargin,
      boxPadding = _ref.boxPadding,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _getBoxCss.getBoxCss)(boxMargin, boxPadding, props);
}, function (props) {
  return props.styledCss;
});

exports.StyledBox = StyledBox;