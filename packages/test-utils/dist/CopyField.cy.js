"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyFieldSelector = exports.copyField = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Button = require("./Button.cy");

var _Icon = require("./Icon.cy");

var _Input = require("./Input.cy");

var _Tooltip = require("./Tooltip.cy");

var copyFieldSelector = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-copy-field");
  },
  children: {
    input: _Input.input,
    button: {
      self: _Button.button,
      children: {
        icon: _Icon.icon
      }
    }
  }
});
exports.copyFieldSelector = copyFieldSelector;
var copyField = (0, _cypressUtils.extractDeclaration)({
  tooltip: _Tooltip.tooltip,
  tooltipById: _Tooltip.tooltipById,
  copyField: copyFieldSelector
});
exports.copyField = copyField;