"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberInput = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Input = require("./Input.cy");

var numberInput = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-number-input");
  },
  children: {
    input: _Input.input,
    upButton: function upButton() {
      return cy.get(".number-input--up-button");
    },
    downButton: function downButton() {
      return cy.get(".number-input--down-button");
    }
  }
});
exports.numberInput = numberInput;