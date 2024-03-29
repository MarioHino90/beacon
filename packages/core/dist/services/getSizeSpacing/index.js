"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getSizeSpacing: true
};
Object.defineProperty(exports, "getSizeSpacing", {
  enumerable: true,
  get: function get() {
    return _getSizeSpacing.getSizeSpacing;
  }
});

var _getSizeSpacing = require("./getSizeSpacing");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});