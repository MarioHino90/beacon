"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalBackdrop = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledModalBackdrop = _styledComponents["default"].div.withConfig({
  displayName: "StyledModalBackdrop",
  componentId: "sc-1r84jl5-0"
})(["opacity:0.5;position:fixed;top:0;right:0;bottom:0;left:0;z-index:", ";background-color:rgba(0,0,0,0.9);"], function (props) {
  return props.zIndex;
});

exports.StyledModalBackdrop = StyledModalBackdrop;