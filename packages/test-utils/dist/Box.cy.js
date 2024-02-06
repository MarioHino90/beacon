"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nthBoxWithChildren = exports.nthBox = exports.boxWithChildren = exports.box = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var box = function box() {
  return cy.get(".bcl-box");
};

exports.box = box;
var nthBox = (0, _cypressUtils.extractSelector)({
  self: function self(num) {
    return cy.get(".bcl-box:nth-child(".concat(num, ")"));
  },
  needsParams: true,
  children: {}
});
exports.nthBox = nthBox;
var boxWithChildren = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get(".bcl-box");
});
exports.boxWithChildren = boxWithChildren;
var nthBoxWithChildren = (0, _cypressUtils.complexSelectorWithChildren)(function (num) {
  return cy.get(".bcl-box:nth-child(".concat(num, ")"));
});
exports.nthBoxWithChildren = nthBoxWithChildren;