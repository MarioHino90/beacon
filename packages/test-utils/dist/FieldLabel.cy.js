"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldLabelWithText = exports.fieldLabelContainer = exports.fieldLabel = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _StatusText = require("./StatusText.cy");

var _HelpText = require("./HelpText.cy");

// this allows (for instance)
// fieldLabel({ input })
var fieldLabel = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get(".bcl-field-label");
});
exports.fieldLabel = fieldLabel;
var fieldLabelContainer = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-field-label-container");
  },
  children: {
    statusText: _StatusText.statusText,
    helpText: _HelpText.helpText,
    infoIcon: function infoIcon() {
      return cy.get(".bcl-field-label-info-icon-button");
    },
    optional: function optional() {
      return cy.findByTestId("optional-field");
    },
    required: function required() {
      return cy.findByTestId("required-field");
    },
    fieldLabel: fieldLabel()
  }
});
exports.fieldLabelContainer = fieldLabelContainer;
var fieldLabelWithText = (0, _cypressUtils.extractSelector)({
  self: function self(text) {
    return cy.contains(".bcl-field-label-container", text);
  },
  needsParams: true,
  children: {
    statusText: _StatusText.statusText,
    helpText: _HelpText.helpText,
    infoIcon: function infoIcon() {
      return cy.get(".bcl-field-label-info-icon-button");
    },
    optional: function optional() {
      return cy.findByTestId("optional-field");
    },
    required: function required() {
      return cy.findByTestId("required-field");
    },
    fieldLabel: fieldLabel()
  }
});
exports.fieldLabelWithText = fieldLabelWithText;