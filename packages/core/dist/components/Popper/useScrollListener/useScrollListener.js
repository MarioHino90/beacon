"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollListener = void 0;

var _react = require("react");

var _PopperContext = require("../PopperContext");

var _this = void 0;

var debounce = function debounce(func, delay) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var boundFunc = func.bind.apply(func, [_this].concat(args));
    clearTimeout(timerId);
    timerId = setTimeout(boundFunc, delay);
  };
};
/**
 * scroll listener
 */


var useScrollListener = function useScrollListener(placementCallback) {
  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      isOpen = _usePopperContext.isOpen;

  (0, _react.useEffect)(function () {
    // if popper is not open, then bail to avoid unnecessary ops
    if (!isOpen) {
      return;
    } // debounce the placement callback to happen every 25 milliseconds
    // to prevent jaggy behavior


    var debouncedCallback = debounce(function () {
      placementCallback();
    }, 25); // on user scroll, update placement

    document.addEventListener("scroll", debouncedCallback, true); // cleanup stage

    return function () {
      document.removeEventListener("scroll", debouncedCallback, true);
    };
  }, [isOpen, placementCallback]);
};

exports.useScrollListener = useScrollListener;