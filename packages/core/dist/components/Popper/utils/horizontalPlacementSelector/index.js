"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horizontalPlacementSelector = require("./horizontalPlacementSelector");

Object.keys(_horizontalPlacementSelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _horizontalPlacementSelector[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _horizontalPlacementSelector[key];
    }
  });
});