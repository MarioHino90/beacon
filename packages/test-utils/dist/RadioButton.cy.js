"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioButtonGroup = exports.radioButton = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _StatusText = require("./StatusText.cy");

var radioButton = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-radio-button");
  },
  children: {
    label: function label() {
      return cy.get("label");
    },
    button: function button() {
      return cy.get("input[type='radio']");
    }
  }
});
exports.radioButton = radioButton;
var radioButtonGroup = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-radio-button-group");
  },
  children: {
    buttons: {
      self: function self() {
        return cy.get(".bcl-radio-button-grid");
      },
      children: {
        radioButtonWithValue: {
          self: function self(value) {
            return cy.get("input[type=\"radio\"][value=\"".concat(value, "\"]"));
          },
          needsParams: true,
          children: {}
        },
        selectedRadioButton: {
          self: function self() {
            return cy.get('input[type="radio"][checked]');
          },
          children: {}
        },
        radioButtonByNumber: {
          self: function self(num) {
            return cy.get(".bcl-radio-button:eq(".concat(num + 1, ")"));
          },
          needsParams: true,
          children: radioButton.children
        }
      }
    },
    errorText: _StatusText.statusText
  }
});
exports.radioButtonGroup = radioButtonGroup;