"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelWithChildren = exports.label = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var label = function label() {
  return cy.get(".bcl-label");
};

exports.label = label;
var labelWithChildren = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get(".bcl-label");
});
exports.labelWithChildren = labelWithChildren;