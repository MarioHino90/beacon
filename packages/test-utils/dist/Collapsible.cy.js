"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collapsibleIconButton = exports.collapsibleChildren = exports.collapsibleButton = exports.collapsible = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var collapsibleButton = function collapsibleButton() {
  return cy.get(".bcl-collapsible-button");
};

exports.collapsibleButton = collapsibleButton;

var collapsibleIconButton = function collapsibleIconButton() {
  return cy.get(".bcl-collapsible-icon-button");
};

exports.collapsibleIconButton = collapsibleIconButton;
var collapsibleChildren = (0, _cypressUtils.extractDeclaration)({
  button: collapsibleButton,
  iconButton: collapsibleIconButton,
  body: {
    self: function self() {
      return cy.get(".bcl-collapsible-body");
    },
    children: {
      list: {
        self: function self() {
          return cy.get(".bcl-collapsible-list");
        },
        children: {
          item: function item() {
            return cy.get(".bcl-collapsible-list-item");
          }
        }
      }
    }
  }
});
exports.collapsibleChildren = collapsibleChildren;
var collapsible = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-collapsible");
  },
  children: collapsibleChildren,
  header: {
    self: function self() {
      return cy.get(".collapsible-header");
    },
    children: {
      button: collapsibleButton,
      text: function text() {
        return cy.get(".bcl-collapsible-header-text");
      }
    }
  },
  actions: {
    /**
     * If a Collapsible uses a button with text, this will click the button to open/collapse the content
     * @example
     * context.collapsible.actions.clickButton();
     */
    clickButton: function clickButton(self, btn) {
      self.within(function () {
        (0, _cypressUtils.getActionContext)(collapsibleChildren, btn).button.click();
      });
    },

    /**
     * If a Collapsible uses no text with an icon button, this will click it to open/collapse the content
     * @example
     * context.collapsible.actions.clickIconButton();
     */
    clickIconButton: function clickIconButton(self, iconBtn) {
      self.within(function () {
        (0, _cypressUtils.getActionContext)(collapsibleChildren, iconBtn).iconButton.click();
      });
    }
  }
});
exports.collapsible = collapsible;