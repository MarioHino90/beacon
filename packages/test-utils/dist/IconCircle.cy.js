"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconCircle = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Icon = require("./Icon.cy");

var iconCircle = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-icon-circle");
  },
  children: {
    icon: _Icon.icon
  }
});
exports.iconCircle = iconCircle;