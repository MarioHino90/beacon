"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchComponent = exports.simpleSwitch = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var simpleSwitch = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-simple-switch");
  },
  children: {
    hiddenSwitch: function hiddenSwitch() {
      return cy.get("input[type='checkbox']");
    },
    styledSwitch: {
      self: function self() {
        return cy.get(".bcl-styled-switch");
      },
      children: {
        knob: function knob() {
          return cy.get(".bcl-styled-switch-knob");
        }
      }
    }
  }
});
exports.simpleSwitch = simpleSwitch;
var switchComponent = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-switch");
  },
  children: {
    simpleSwitch: simpleSwitch,
    switchLabel: function switchLabel() {
      return cy.get(".bcl-switch-label");
    }
  }
});
exports.switchComponent = switchComponent;