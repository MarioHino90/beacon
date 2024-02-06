"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopperEvents = void 0;

var _react = require("react");

var _PopperContext = require("../PopperContext");

var _useHandleClose3 = require("../useHandleClose");

var _useHandleOpen3 = require("../useHandleOpen");

var _useMouseLeave = require("../useMouseLeave");

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// these untriggers cause buggy behavior when included as is
// and need to be handled separately
var excludedUntriggers = ["mouseleave"];
/**
 * Hook that handles event subscription for the popper
 * component and updates its placement when changes are made
 * as necessary
 * @param popperRef ref object pointing to the popper element
 * @param placementCallback function that will recalculate the
 * placement of the popper when invokes
 */

var usePopperEvents = function usePopperEvents(popperRef) {
  // get props from context
  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      placement = _usePopperContext.placement,
      triggers = _usePopperContext.triggers,
      untriggers = _usePopperContext.untriggers,
      target = _usePopperContext.target,
      targetRef = _usePopperContext.targetRef,
      closeOnClickOutside = _usePopperContext.closeOnClickOutside,
      interactive = _usePopperContext.interactive,
      isOpen = _usePopperContext.isOpen; // get open handler fn


  var _useHandleOpen = (0, _useHandleOpen3.useHandleOpen)(),
      _useHandleOpen2 = _slicedToArray(_useHandleOpen, 1),
      handleOpen = _useHandleOpen2[0]; // whether the event came from a keyboard or a mouse/touch event


  var fromKeyboard = (0, _react.useRef)(false); // get close handler fn

  var _useHandleClose = (0, _useHandleClose3.useHandleClose)(),
      _useHandleClose2 = _slicedToArray(_useHandleClose, 1),
      closePopper = _useHandleClose2[0]; // interactive elements inside the popper


  var interactiveElements = (0, _react.useRef)([]);
  var handleClose = (0, _react.useCallback)(function (event) {
    // get the popper if it's in the event path (i.e. is a parent of the target)
    var eventPath = event.path || event.composedPath && event.composedPath();
    var hasPopperParent = !!(eventPath !== null && eventPath !== void 0 && eventPath.find(function (item) {
      return item === popperRef.current;
    }));

    if (interactiveElements.current.includes(event.relatedTarget) || // if it is NOT a keyboard event and the target is the popper or is inside the popper
    !fromKeyboard.current && (hasPopperParent || event.relatedTarget === popperRef.current) || event.relatedTarget === (targetRef === null || targetRef === void 0 ? void 0 : targetRef.current)) {
      // abort - the newly focused element is in the list of elements inside the popper
      return;
    }

    closePopper(event);
  }, [closePopper, targetRef, popperRef, fromKeyboard]);
  (0, _react.useEffect)(function () {
    if (!interactive) {
      interactiveElements.current = [];
    } else {
      interactiveElements.current = (0, _utils.extractInteractiveChildren)(popperRef.current);
    }

    interactiveElements.current.forEach(function (node) {
      node.addEventListener("blur", handleClose);
    });
    var interactives = interactiveElements.current;
    return function () {
      interactives.forEach(function (node) {
        node.removeEventListener("blur", handleClose);
      });
    };
  }); // get mouse event listeners

  var handleMouseLeave = (0, _useMouseLeave.useMouseLeave)(handleClose, popperRef);
  /**
   * main event listeners to turn component display on/off
   *
   * This MUST be useEffect. In some cases, running useLayoutEffect will try to attach event listeners
   * before the target element has rendered. Examples are cases where the child elements call a setState
   * callback to add a new child which then renders a tooltip, using context to setup new children, and so on.
   */

  (0, _react.useEffect)(function () {
    // get element from targetRef or target
    var element = (0, _utils.getElement)({
      targetRef: targetRef,
      target: target
    }); // if element is not defined, short circuit

    if (!element) {
      return;
    }

    var detectKeyboardFocus = function detectKeyboardFocus() {
      fromKeyboard.current = true;
    };

    var detectMouseFocus = function detectMouseFocus() {
      fromKeyboard.current = false;
    };

    var ifClick = function ifClick(event) {
      if (fromKeyboard.current) {
        return;
      }

      if (isOpen) {
        handleClose(event);
      } else {
        handleOpen(event);
      }
    };

    var openIfFocus = function openIfFocus(event) {
      if (!fromKeyboard.current) {
        return;
      }

      handleOpen(event);
    };

    var closeIfBlur = function closeIfBlur(event) {
      if (!fromKeyboard.current) {
        return;
      }

      handleClose(event);
    }; // set a mousedown event on the popper


    if (popperRef.current) {
      popperRef.current.addEventListener("mousedown", detectMouseFocus);
    } // these triggers interfere, so we need to differentiate between keyboard and mouse focus


    element.addEventListener("mousedown", detectMouseFocus);
    document.addEventListener("keydown", detectKeyboardFocus); // exclude certain events to allow for custom handling

    var activeUntriggers = untriggers === null || untriggers === void 0 ? void 0 : untriggers.filter(function (untrigger) {
      // exclude if included in excludedUntriggers list
      if (excludedUntriggers.includes(untrigger)) {
        return false;
      } // exclude if untrigger is 'click' and 'closeOnClickOutside' is enabled


      if (untrigger === "click") {
        if (closeOnClickOutside) {
          return false;
        }

        if (triggers !== null && triggers !== void 0 && triggers.includes("click")) {
          return false;
        }
      }

      return true;
    }); // create trigger listeners

    triggers === null || triggers === void 0 ? void 0 : triggers.forEach(function (trigger) {
      if (trigger === "click") {
        element.addEventListener(trigger, ifClick);
      } else if (trigger === "focus") {
        element.addEventListener(trigger, openIfFocus);
      } else {
        element.addEventListener(trigger, handleOpen);
      }
    }); // create untrigger listeners

    activeUntriggers === null || activeUntriggers === void 0 ? void 0 : activeUntriggers.forEach(function (untrigger) {
      if (untrigger === "click") {
        element.addEventListener(untrigger, ifClick);
      } else if (untrigger === "blur") {
        element.addEventListener(untrigger, closeIfBlur);
      } else {
        element.addEventListener(untrigger, handleClose);
      }
    }); // create mouseleave listener

    element.addEventListener("mouseleave", handleMouseLeave); // cleanup stage

    return function () {
      element.removeEventListener("mousedown", detectMouseFocus);
      document.removeEventListener("keydown", detectKeyboardFocus); // remove trigger listeners

      triggers === null || triggers === void 0 ? void 0 : triggers.forEach(function (trigger) {
        if (trigger === "click") {
          element.removeEventListener(trigger, ifClick);
        } else if (trigger === "focus") {
          element.removeEventListener(trigger, openIfFocus);
        } else {
          element.removeEventListener(trigger, handleOpen);
        }
      }); // remove untrigger listeners

      activeUntriggers === null || activeUntriggers === void 0 ? void 0 : activeUntriggers.forEach(function (untrigger) {
        if (untrigger === "click") {
          element.removeEventListener(untrigger, ifClick);
        } else if (untrigger === "blur") {
          element.removeEventListener(untrigger, closeIfBlur);
        } else {
          element.removeEventListener(untrigger, handleClose);
        }
      }); // remove mouseleave listener

      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [closeOnClickOutside, triggers, untriggers, target, targetRef, handleOpen, handleClose, handleMouseLeave, placement, isOpen, popperRef]);
};

exports.usePopperEvents = usePopperEvents;