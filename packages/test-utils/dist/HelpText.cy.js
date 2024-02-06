"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nthHelpText = exports.helpText = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var helpText = function helpText() {
  return cy.get(".bcl-help-text");
};

exports.helpText = helpText;
var nthHelpText = (0, _cypressUtils.extractSelector)({
  self: function self(num) {
    return cy.get(".bcl-help-text:nth-child(".concat(num, ")"));
  },
  needsParams: true,
  children: {}
});
exports.nthHelpText = nthHelpText;