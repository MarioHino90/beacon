"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabs = exports.tabContentWithChildren = exports.tabContent = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var tabs = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-tabs");
  },
  children: {
    tab: function tab() {
      return cy.get(".bcl-tab");
    },
    nthTab: {
      self: function self(ind) {
        return cy.get(".bcl-tab:nth-child(".concat(ind, ")"));
      },
      needsParams: true,
      children: {}
    }
  }
});
exports.tabs = tabs;

var tabContent = function tabContent() {
  return cy.get(".bcl-tab-content");
};

exports.tabContent = tabContent;
var tabContentWithChildren = (0, _cypressUtils.selectorWithChildren)(function () {
  return cy.get(".bcl-tab-content");
});
exports.tabContentWithChildren = tabContentWithChildren;