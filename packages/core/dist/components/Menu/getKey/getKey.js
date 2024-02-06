"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKey = void 0;

/**
 * Function that assigns a keyboard event's key to a predictable value,
 * while retaining backwards compatibility
 * @param event a KeyboardEvent object
 * @returns a string indicating the key that was in the event
 */
var getKey = function getKey(event) {
  if (event.key === "ArrowDown" || event.keyCode === 40) {
    return "arrowDown";
  }

  if (event.key === "ArrowUp" || event.keyCode === 38) {
    return "arrowUp";
  }

  if (event.key === "Enter" || event.keyCode === 13) {
    return "enter";
  }

  if (event.key === "Home" || event.keyCode === 36) {
    return "home";
  }

  if (event.key === "End" || event.keyCode === 35) {
    return "end";
  }

  if (event.key === "Escape" || event.keyCode === 27) {
    return "esc";
  }

  if (event.keyCode >= 65 && event.keyCode <= 90) {
    return "letter";
  }

  return undefined;
};

exports.getKey = getKey;