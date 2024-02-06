"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeButton = void 0;

var closeButton = function closeButton() {
  return cy.get('button[aria-label="close"]');
};

exports.closeButton = closeButton;