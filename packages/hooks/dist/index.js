"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useId = require("./hooks/useId");

Object.keys(_useId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useId[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useId[key];
    }
  });
});

var _useIME = require("./hooks/useIME");

Object.keys(_useIME).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useIME[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useIME[key];
    }
  });
});

var _useLoadingButton = require("./hooks/useLoadingButton");

Object.keys(_useLoadingButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLoadingButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useLoadingButton[key];
    }
  });
});