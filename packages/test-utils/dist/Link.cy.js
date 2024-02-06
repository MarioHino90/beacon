"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkWithChildren = exports.link = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var link = function link() {
  return cy.get("a.bcl-link");
};

exports.link = link;
var linkWithChildren = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get("a.bcl-link");
});
exports.linkWithChildren = linkWithChildren;