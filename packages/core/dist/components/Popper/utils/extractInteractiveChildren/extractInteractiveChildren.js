"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractInteractiveChildren = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// HTML elements that can be interacted with using the keyboard
var interactiveNodeNames = ["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA", "DETAILS"];

var isHTMLElement = function isHTMLElement(node) {
  return node.nodeType === node.ELEMENT_NODE;
};

var isKeyboardInteractive = function isKeyboardInteractive(node) {
  if (!isHTMLElement(node)) {
    return false;
  }

  if (node.hasAttribute("tabindex")) {
    // anything with a tabIndex that isn't -1 can be tabbed to
    if (node.getAttribute("tabindex") !== "-1") {
      return true;
    }

    return false;
  }

  if (interactiveNodeNames.includes(node.nodeName)) {
    return true;
  }

  return false;
};
/**
 * Given a popper, iterate over its children to find all interactive elements
 *
 * This list is used to control keyboard blur. When focus lands on one of these elements,
 * it will keep the popper open. When focus leaves, it will close the popper
 */


var extractInteractiveChildren = function extractInteractiveChildren(popperRef) {
  if (popperRef !== null && popperRef !== void 0 && popperRef.hasChildNodes()) {
    var childNodes = [];
    popperRef.childNodes.forEach(function (node) {
      if (isKeyboardInteractive(node)) {
        childNodes.push(node);
      }

      if (isHTMLElement(node)) {
        var interactiveChildren = extractInteractiveChildren(node);

        if (interactiveChildren.length) {
          childNodes.push.apply(childNodes, _toConsumableArray(interactiveChildren));
        }
      }
    });
    return childNodes;
  } else {
    return [];
  }
};

exports.extractInteractiveChildren = extractInteractiveChildren;