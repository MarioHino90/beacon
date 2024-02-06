"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHandleOpen = void 0;

var _react = require("react");

var _PopperContext = require("../PopperContext");

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 */
var useHandleOpen = function useHandleOpen() {
  // ref for timeouts
  var timerRef = (0, _react.useRef)(null); // get props from context

  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      delay = _usePopperContext.delay,
      onOpen = _usePopperContext.onOpen;
  /**
   * Function that handles opening the popper, including
   * taking into account a delay if defined
   */


  var handleOpen = function handleOpen(event) {
    var activeDelay = (0, _utils.getDelay)(delay); // if delay is defined, then implement open with delay

    if (!activeDelay) {
      // if no delay is defined, then just call onOpen
      onOpen(event);
      return;
    } // grab the first arg from activeDelay, which is the open delay


    var _activeDelay = _slicedToArray(activeDelay, 1),
        openDelay = _activeDelay[0]; // if openDelay is a nullish value, then just call onOpen immediately


    if (!openDelay) {
      onOpen(event);
      return;
    }

    if (timerRef.current) {
      // if the user triggers the timer while any are pending, clear the timer
      clearTimeout(timerRef.current);
    } // set timeout and also add it to the openTimerRef


    timerRef.current = setTimeout(function () {
      timerRef.current = null;
      onOpen(event);
    }, openDelay);
  };

  (0, _react.useEffect)(function () {
    // close over the ref
    var timer = timerRef;
    return function () {
      if (timer.current) {
        // ensure that when unmounted, we don't call setState
        clearTimeout(timer.current);
      }

      timer.current = null;
    };
  }, []);
  return [handleOpen, timerRef];
};

exports.useHandleOpen = useHandleOpen;