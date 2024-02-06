"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputGroupChildren = exports.inputGroup = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _BodyText = require("./BodyText.cy");

var _Input = require("./Input.cy");

var _Icon = require("./Icon.cy");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputGroupChildren = (0, _cypressUtils.extractDeclaration)({
  inputGroupAddon: {
    self: function self() {
      return cy.get(".bcl-input-group-addon");
    },
    children: {
      bodyText: _BodyText.bodyText,
      icon: _Icon.icon,
      input: _Input.input
    }
  }
});
exports.inputGroupChildren = inputGroupChildren;
var inputGroup = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-input-group");
  },
  children: _objectSpread(_objectSpread({}, inputGroupChildren), {}, {
    input: _Input.input
  })
});
exports.inputGroup = inputGroup;