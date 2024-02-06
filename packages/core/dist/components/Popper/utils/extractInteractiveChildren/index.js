"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extractInteractiveChildren = require("./extractInteractiveChildren");

Object.keys(_extractInteractiveChildren).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _extractInteractiveChildren[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extractInteractiveChildren[key];
    }
  });
});