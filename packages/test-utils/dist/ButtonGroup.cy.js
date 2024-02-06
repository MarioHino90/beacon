"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonGroup = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Button = require("./Button.cy");

var buttonGroup = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-button-group");
  },
  children: {
    button: _Button.button
  }
});
exports.buttonGroup = buttonGroup;