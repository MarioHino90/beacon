"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "translations", {
  enumerable: true,
  get: function get() {
    return _translationsBraze["default"];
  }
});
Object.defineProperty(exports, "useI18nNamespace", {
  enumerable: true,
  get: function get() {
    return _useCoreI18nNamespace.useCoreI18nNamespace;
  }
});

var _translationsBraze = _interopRequireDefault(require("./translations.braze.json"));

var _useCoreI18nNamespace = require("./useCoreI18nNamespace");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }