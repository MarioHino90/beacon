"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specificIcon = exports.icon = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var iconChildren = (0, _cypressUtils.extractDeclaration)({
  fontAwesomeSvg: function fontAwesomeSvg() {
    return cy.get("svg[aria-hidden]");
  }
});
var icon = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-icon");
  },
  children: iconChildren
});
exports.icon = icon;
var specificIcon = (0, _cypressUtils.extractSelector)({
  self: function self(icon) {
    return cy.get(".bcl-icon:has(svg[data-icon=".concat(icon, "])"));
  },
  needsParams: true,
  children: iconChildren
});
exports.specificIcon = specificIcon;