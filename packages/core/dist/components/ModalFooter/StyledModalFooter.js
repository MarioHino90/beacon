"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalFooter = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonGroup = require("../ButtonGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs() {
  return {
    direction: "row"
  };
};

var StyledModalFooter = (0, _styledComponents["default"])(_ButtonGroup.StyledButtonGroup).attrs(getAttrs).withConfig({
  displayName: "StyledModalFooter",
  componentId: "sc-cu2wj0-0"
})([""]);
exports.StyledModalFooter = StyledModalFooter;