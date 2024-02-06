"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusText = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _BodyText = require("./BodyText.cy");

var _Icon = require("./Icon.cy");

var statusChildren = (0, _cypressUtils.extractDeclaration)({
  icon: _Icon.icon,
  bodyText: _BodyText.bodyText
});
var statusText = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-status-text");
  },
  children: statusChildren,
  actions: {
    assertStatus: function assertStatus(self, context, status) {
      self.within(function () {
        (0, _cypressUtils.getActionContext)(statusChildren, context).icon["in"](function (icon) {
          icon.fontAwesomeSvg.should("have.attr", "data-icon", status === "success" ? "check-circle" : "exclamation-triangle");
        });
      });
    }
  }
});
exports.statusText = statusText;