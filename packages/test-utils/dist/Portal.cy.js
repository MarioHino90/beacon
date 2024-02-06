"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.portalWithChildren = exports.portal = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var portal = function portal() {
  return cy.get(".bcl-portal");
};

exports.portal = portal;
var portalWithChildren = (0, _cypressUtils.selectorWithChildren)(portal);
exports.portalWithChildren = portalWithChildren;