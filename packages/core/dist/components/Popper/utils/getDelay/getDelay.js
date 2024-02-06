"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDelay = void 0;

/**
* Function that returns an array of delay values if delay
* is defined, null otherwise
* @param delay an array of two numbers or a single number
*/
var getDelay = function getDelay(delay) {
  if (Array.isArray(delay)) {
    return delay;
  }

  if (typeof delay === "number") {
    return [delay, delay];
  }

  return null;
};

exports.getDelay = getDelay;