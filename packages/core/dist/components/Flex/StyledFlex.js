"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getFlexCss = require("./getFlexCss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledFlex = _styledComponents["default"].div.withConfig({
  displayName: "StyledFlex",
  componentId: "sc-13lahx9-0"
})(["", ";", ""], _getFlexCss.getFlexCss, function (props) {
  return props.styledCss;
});

exports.StyledFlex = StyledFlex;