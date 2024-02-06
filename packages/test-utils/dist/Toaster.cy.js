"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toaster = exports.toastCloseButton = exports.toast = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var toastCloseButton = function toastCloseButton() {
  return cy.get(".bcl-toast-close-button");
};

exports.toastCloseButton = toastCloseButton;
var toast = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-toast");
  },
  children: {
    toastCloseButton: toastCloseButton
  }
});
exports.toast = toast;
var toaster = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-toaster");
  },
  children: {
    toast: toast,
    nthToast: {
      self: function self(ind) {
        return cy.get(".bcl-toast:nth-child(".concat(ind, ")"));
      },
      needsParams: true,
      children: {
        toastCloseButton: toastCloseButton
      }
    }
  }
});
exports.toaster = toaster;