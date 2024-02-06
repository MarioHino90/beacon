"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuGroups = exports.menuGroup = exports.menuCategoryButtons = exports.menuCategoryButtonWithText = exports.menuCategoryButton = exports.menuButtons = exports.menuButtonWithText = exports.menuButton = exports.menu = exports.buttons = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _BrazeIcon = require("./BrazeIcon.cy");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menuButton = (0, _cypressUtils.extractSelector)({
  self: function self(num) {
    return cy.get("li:nth-child(".concat(num, ") .bcl-menu-button"));
  },
  needsParams: true,
  children: {
    brazeIcon: _BrazeIcon.brazeIcon
  }
});
exports.menuButton = menuButton;
var menuButtons = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-menu-button");
  },
  children: {
    brazeIcon: _BrazeIcon.brazeIcon
  }
});
exports.menuButtons = menuButtons;
var menuButtonWithText = (0, _cypressUtils.extractSelector)({
  self: function self(text) {
    return cy.get(".bcl-menu-button:contains(\"".concat(text, "\")"));
  },
  needsParams: true,
  children: {
    brazeIcon: _BrazeIcon.brazeIcon
  }
});
exports.menuButtonWithText = menuButtonWithText;
var menuCategoryButton = (0, _cypressUtils.extractSelector)({
  self: function self(num) {
    return cy.get(".bcl-menu-category-button:nth-child(".concat(num, ")"));
  },
  needsParams: true,
  children: {
    brazeIcon: _BrazeIcon.brazeIcon,
    header: function header() {
      return cy.get("h5.bcl-heading");
    },
    text: function text() {
      return cy.get("span.bcl-body.text");
    }
  }
});
exports.menuCategoryButton = menuCategoryButton;
var menuCategoryButtons = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-menu-category-button");
  },
  children: {
    brazeIcon: _BrazeIcon.brazeIcon,
    header: function header() {
      return cy.get("h5.bcl-heading");
    },
    text: function text() {
      return cy.get("span.bcl-body.text");
    }
  }
});
exports.menuCategoryButtons = menuCategoryButtons;
var menuCategoryButtonWithText = (0, _cypressUtils.extractSelector)({
  self: function self(text) {
    return cy.get(".bcl-menu-category-button:contains(\"".concat(text, "\")"));
  },
  needsParams: true,
  children: {
    brazeIcon: _BrazeIcon.brazeIcon,
    header: function header() {
      return cy.get("h5.bcl-heading");
    },
    text: function text() {
      return cy.get("span.bcl-body.text");
    }
  }
});
exports.menuCategoryButtonWithText = menuCategoryButtonWithText;
var buttons = (0, _cypressUtils.extractDeclaration)({
  menuButton: menuButton,
  menuButtons: menuButtons,
  menuButtonWithText: menuButtonWithText,
  menuCategoryButton: menuCategoryButton,
  menuCategoryButtons: menuCategoryButtons,
  menuCategoryButtonWithText: menuCategoryButtonWithText
});
exports.buttons = buttons;
var menuGroup = (0, _cypressUtils.extractSelector)({
  self: function self(num) {
    return cy.get(".bcl-menu-group:nth-child(".concat(num, ")"));
  },
  children: _objectSpread({
    // the first heading is the group heading
    groupHeader: function groupHeader() {
      return cy.get("h6.bcl-heading");
    }
  }, buttons)
});
exports.menuGroup = menuGroup;
var menuGroups = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-menu-group");
  },
  children: {}
});
exports.menuGroups = menuGroups;
var menu = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-menu");
  },
  children: _objectSpread(_objectSpread({}, buttons), {}, {
    menuGroup: menuGroup,
    menuGroups: menuGroups
  })
});
exports.menu = menu;