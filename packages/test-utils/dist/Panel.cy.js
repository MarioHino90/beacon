"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.panelHeader = exports.panelBody = exports.panel = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var panelHeader = function panelHeader() {
  return cy.get(".bcl-panel-header");
};

exports.panelHeader = panelHeader;

var panelBody = function panelBody() {
  return cy.get(".bcl-panel-body");
};

exports.panelBody = panelBody;
var panel = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-panel");
  },
  children: {
    header: panelHeader,
    body: panelBody
  }
});
exports.panel = panel;