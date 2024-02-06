"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verticalPlacementSelector = require("./verticalPlacementSelector");

Object.keys(_verticalPlacementSelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _verticalPlacementSelector[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _verticalPlacementSelector[key];
    }
  });
});