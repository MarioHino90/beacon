"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useId = void 0;

var _react = require("react");

/**
 * Generate an almost-definitely unique id for an element.
 * Prefix is very important for ensuring uniqueness across a document.
 * The probability that all ids generated for a given prefix are unique drops to 99.9% by ~450 instances
 * @param prefix a string to prepend the id with so it can be identified by css selectors or manual inspection
 */
var useId = function useId(prefix) {
  var randomPart = (0, _react.useRef)(Math.ceil(Math.random() * 10e8));
  return prefix ? "".concat(prefix, "-").concat(randomPart.current) : randomPart.current.toString();
};

exports.useId = useId;