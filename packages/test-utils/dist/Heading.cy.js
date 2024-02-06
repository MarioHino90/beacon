"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headingByLevel = exports.heading = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var heading = function heading() {
  return cy.get(".bcl-heading");
};

exports.heading = heading;
var headingByLevel = (0, _cypressUtils.extractDeclaration)({
  level1: function level1() {
    return cy.get("h1.bcl-heading");
  },
  level2: function level2() {
    return cy.get("h2.bcl-heading");
  },
  level3: function level3() {
    return cy.get("h3.bcl-heading");
  },
  level4: function level4() {
    return cy.get("h4.bcl-heading");
  },
  level5: function level5() {
    return cy.get("h5.bcl-heading");
  },
  level6: function level6() {
    return cy.get("h6.bcl-heading");
  }
});
exports.headingByLevel = headingByLevel;