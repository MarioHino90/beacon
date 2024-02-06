"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperWithChildren = exports.popper = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _CloseButton = require("./CloseButton.cy");

/// <reference types="@testing-library/cypress" />
var popper = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-popper");
  },
  children: {
    heading: function heading() {
      return cy.get(".bcl-popover-heading");
    },
    body: function body() {
      return cy.get(".bcl-popover-body");
    },
    closeButton: _CloseButton.closeButton
  }
});
exports.popper = popper;

var popperWithChildren = function popperWithChildren(children) {
  return (0, _cypressUtils.selectorWithChildren)(function () {
    return cy.get(".bcl-popper");
  })({
    heading: function heading() {
      return cy.get(".bcl-popover-heading");
    },
    body: {
      self: function self() {
        return cy.get(".bcl-popover-body");
      },
      children: children
    }
  });
};

exports.popperWithChildren = popperWithChildren;