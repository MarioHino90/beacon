"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopper = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * A function that abstracts the open/close logic of a popper component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the popper as its first element and the ref object to be passed to both the target and the popper
 */
var usePopper = function usePopper(targetRef) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var newRef = (0, _react.useRef)(null);
  var ref = targetRef || newRef;

  var _useState = (0, _react.useState)(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setState = _useState2[1];

  var onOpen = (0, _react.useCallback)(function () {
    if (!disabled) {
      setState(true);
    }
  }, [disabled]);
  var onClose = (0, _react.useCallback)(function () {
    if (!disabled) {
      setState(false);
    }
  }, [disabled]);
  (0, _react.useEffect)(function () {
    if (disabled) {
      setState(false);
    }
  }, [disabled]);
  return [{
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose
  }, ref];
};

exports.usePopper = usePopper;