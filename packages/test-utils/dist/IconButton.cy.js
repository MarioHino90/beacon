"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconButton = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Icon = require("./Icon.cy");

var iconButton = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get("button.bcl-icon-button");
  },
  children: {
    icon: _Icon.icon
  }
});
exports.iconButton = iconButton;