"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotation = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Tooltip = require("./Tooltip.cy");

var _Icon = require("./Icon.cy");

var annotation = (0, _cypressUtils.extractDeclaration)({
  tooltip: _Tooltip.tooltip,
  tooltipById: _Tooltip.tooltipById,
  icon: _Icon.icon
});
exports.annotation = annotation;