"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyState = void 0;

var _cypressUtils = require("@braze/cypress-utils");

// TODO move these to beacon test-utils and import from there in future PR
var button = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-button");
  },
  children: {}
});
var buttonFromList = (0, _cypressUtils.extractSelector)({
  self: function self(ind) {
    return cy.get(".bcl-button:nth-child(".concat(ind, ")"));
  },
  needsParams: true,
  children: {}
});
var emptyState = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-empty-state");
  },
  children: {
    icon: function icon() {
      return cy.get(".bcl-empty-state-icon");
    },
    heading: function heading() {
      return cy.get(".bcl-empty-state-heading");
    },
    text: function text() {
      return cy.get(".bcl-empty-state-text");
    },
    buttons: {
      self: function self() {
        return cy.get(".bcl-empty-state-buttons");
      },
      children: {
        button: buttonFromList,
        buttons: button
      }
    }
  }
});
exports.emptyState = emptyState;