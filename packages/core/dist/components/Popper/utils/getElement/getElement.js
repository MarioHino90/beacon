"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElement = void 0;

/**
 * Returns a DOM element by its ID, if `document` global object is defined
 * @param id string that corresponds to DOM id of object desired
 * @returns element that corresponds to the 'id' supplied, if exists
 */
var getElementById = function getElementById(id) {
  return typeof document !== "undefined" && typeof "window" !== "undefined" ? document.getElementById(id) : null;
};

var getElement = function getElement(_ref) {
  var targetRef = _ref.targetRef,
      target = _ref.target;

  // if targetRef is defined, get the element from it
  if (targetRef !== null && targetRef !== void 0 && targetRef.current) {
    return targetRef.current;
  } // if target is defined, get the element using ID


  if (target) {
    return getElementById(target);
  } // if neither is defined, return null


  return null;
};

exports.getElement = getElement;