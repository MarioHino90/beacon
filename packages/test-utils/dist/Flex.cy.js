"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexWithChildren = exports.flex = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var flex = function flex() {
  return cy.get(".bcl-flex");
};

exports.flex = flex;
var flexWithChildren = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get(".bcl-flex");
});
exports.flexWithChildren = flexWithChildren;