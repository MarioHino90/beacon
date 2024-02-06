"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipById = exports.tooltip = void 0;

var _cypressUtils = require("@braze/cypress-utils");

/// <reference types="@testing-library/cypress" />
var tooltip = function tooltip() {
  return cy.get(".bcl-popper");
};

exports.tooltip = tooltip;
var tooltipById = (0, _cypressUtils.extractSelector)({
  self: function self(id) {
    return cy.get("#".concat(id, ".bcl-popper"));
  },
  needsParams: true,
  children: {}
});
exports.tooltipById = tooltipById;