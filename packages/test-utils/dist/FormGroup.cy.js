"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formGroupWithChildren = exports.formGroupLegend = exports.formGroup = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var formGroupLegend = function formGroupLegend() {
  return cy.get("legend.bcl-form-group-legend");
};

exports.formGroupLegend = formGroupLegend;

var formGroup = function formGroup() {
  return cy.get("fieldset.bcl-form-group");
};

exports.formGroup = formGroup;
var formGroupWithChildren = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get("fieldset.bcl-form-group");
});
exports.formGroupWithChildren = formGroupWithChildren;