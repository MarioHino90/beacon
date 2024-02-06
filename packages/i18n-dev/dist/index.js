"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setupI18n = require("./setupI18n");

Object.keys(_setupI18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setupI18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setupI18n[key];
    }
  });
});