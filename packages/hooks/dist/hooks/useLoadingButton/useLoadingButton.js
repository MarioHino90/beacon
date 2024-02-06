"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoadingButton = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Hook that acts as a state machine for a `Button` component via user supplied values
 *
 * @param status indicates that the resource triggered by the button click is currently loading
 * @param options additional options to help configure hook behavior
 */
var useLoadingButton = function useLoadingButton(status) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    timeout: 3000
  },
      ref = _ref.ref,
      resetOnError = _ref.resetOnError,
      timeout = _ref.timeout;

  // manage loading state
  var _useState = (0, _react.useState)("idle"),
      _useState2 = _slicedToArray(_useState, 2),
      loadingState = _useState2[0],
      setLoadingState = _useState2[1]; // state to manage the min width of the button to prevent jerkiness


  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      minWidth = _useState4[0],
      setMinWidth = _useState4[1]; // create a ref to use in case user hasn't provided one


  var innerRef = (0, _react.useRef)(null); // use user provided ref, if it exists; otherwise default to innerRef

  var activeRef = ref !== null && ref !== void 0 ? ref : innerRef; // effectively turn the loading state into a quasi-state machine

  (0, _react.useEffect)(function () {
    // if loading state is currently idle and the user provided status value is "loading"
    // then switch state to "loading"
    if (loadingState === "idle" && status === "loading") {
      return setLoadingState("loading");
    } // if loading state is currently loading and the user provided status value is "success"
    // then switch state to "success"


    if (loadingState === "loading" && status === "success") {
      return setLoadingState("success");
    } // if loading state is currently loading and the user provided status value is "error"
    // then switch state to "error"


    if (loadingState === "loading" && status === "error") {
      return setLoadingState("error");
    }
  }, [loadingState, status]); // effectively turn the loading state into a quasi-state machine (continued)

  (0, _react.useEffect)(function () {
    // if loading outcome is not defined, then bail
    if (loadingState === "idle" || loadingState === "loading") {
      return;
    } // if loading state is error but reset on error is disabled, then do not auto-reset back to idle


    if (loadingState === "error" && !resetOnError) {
      return;
    } // set a timeout to return loading state back to idle after timeout elapsed


    var timeoutRef = setTimeout(function () {
      setLoadingState("idle");
    }, timeout); // clear timeout on unmount to prevent memory leaks

    return function () {
      clearTimeout(timeoutRef);
    };
  }, [loadingState, resetOnError, status, timeout]);
  var observer = (0, _react.useRef)(new ResizeObserver(function (entries) {
    // extract resize observer target
    var target = entries[0].target; // grab the loading state from the DOM (the most currently up-to-date relative to min-width)

    var loadingState = target.getAttribute("data-loading-state"); // if the DOM loading state is NOT 'idle', bail

    if (loadingState !== "idle") {
      return;
    } // otherwise, get the bounding client rect of the target element


    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width; // use it to set min-width


    setMinWidth(width);
  }));
  (0, _react.useEffect)(function () {
    // if no button element found, then bail
    if (!activeRef.current) {
      return;
    } // save refs into local values to prevent unexpected errors


    var elem = activeRef.current;
    var obs = observer.current; // observe resize changes to the button element

    obs.observe(elem); // cleanup resize observer on unmount

    return function () {
      obs.unobserve(elem);
    };
  }, [activeRef]); // props to be passed directly into the button to manage its loading state

  var buttonProps = (0, _react.useMemo)(function () {
    return {
      loadingState: loadingState,
      ref: activeRef,
      minWidth: minWidth
    };
  }, [activeRef, loadingState, minWidth]); // reset function to imperatively reset loading state to 'idle'

  var handleReset = (0, _react.useCallback)(function () {
    setLoadingState("idle");
  }, []);
  return [buttonProps, handleReset];
};

exports.useLoadingButton = useLoadingButton;