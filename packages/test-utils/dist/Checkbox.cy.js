"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nthCheckbox = exports.checkboxChildren = exports.checkbox = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var checkboxChildren = (0, _cypressUtils.extractDeclaration)({
  hiddenCheckbox: function hiddenCheckbox() {
    return cy.get("input[type='checkbox']");
  },
  styledCheckbox: function styledCheckbox() {
    return cy.get(".bcl-styled-checkbox");
  },
  icon: {
    self: function self() {
      return cy.get(".bcl-checkbox-icon");
    },
    children: {
      checkedIcon: function checkedIcon() {
        return cy.get(".bcl-checked-polyline");
      },
      indeterminateIcon: function indeterminateIcon() {
        return cy.get(".bcl-indeterminate-polyline");
      }
    }
  },
  label: function label() {
    return cy.get(".bcl-checkbox-label");
  }
});
exports.checkboxChildren = checkboxChildren;
var checkbox = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-checkbox-container");
  },
  children: checkboxChildren
});
exports.checkbox = checkbox;
var nthCheckbox = (0, _cypressUtils.extractSelector)({
  self: function self(num) {
    return cy.get(".bcl-checkbox-container:nth-child(".concat(num, ")"));
  },
  needsParams: true,
  children: checkboxChildren
});
exports.nthCheckbox = nthCheckbox;