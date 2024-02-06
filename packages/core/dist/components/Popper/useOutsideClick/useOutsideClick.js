"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClick = void 0;

var _react = require("react");

var _PopperContext = require("../PopperContext");

var _useHandleClose3 = require("../useHandleClose");

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useOutsideClick = function useOutsideClick(popperRef) {
  // get the popper props that we need
  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      ignoreCloseOnClickOutsideClassName = _usePopperContext.ignoreCloseOnClickOutsideClassName,
      interactive = _usePopperContext.interactive,
      isIgnoreCloseOnClickOutsideEnabled = _usePopperContext.isIgnoreCloseOnClickOutsideEnabled,
      closeOnClickOutside = _usePopperContext.closeOnClickOutside,
      target = _usePopperContext.target,
      targetRef = _usePopperContext.targetRef; // get close handler fn


  var _useHandleClose = (0, _useHandleClose3.useHandleClose)(),
      _useHandleClose2 = _slicedToArray(_useHandleClose, 1),
      onClose = _useHandleClose2[0];
  /**
   * outside click handler
   */


  (0, _react.useEffect)(function () {
    // if closeOnClickOutside is false
    // then short circuit
    if (!closeOnClickOutside) {
      return;
    } // get element from targetRef or target


    var element = (0, _utils.getElement)({
      targetRef: targetRef,
      target: target
    });

    var listener = function listener(event) {
      // if 'ignoreCloseOnClickOutsideClassName' is defined AND
      // 'isIgnoreCloseOnClickOutsideEnabled' is true,
      // then check for elements containing the former
      if (ignoreCloseOnClickOutsideClassName && isIgnoreCloseOnClickOutsideEnabled) {
        // get all elements with ignored class name from the DOM
        var ignoredElements = Array.from(document.getElementsByClassName(ignoreCloseOnClickOutsideClassName)); // loop through elements with the ignore class name
        // and short-circuit if any contains the event target

        for (var i = 0; i < ignoredElements.length; i++) {
          // get current element from array using index
          var elem = ignoredElements[i]; // if ignored element contains the target
          // then short-circuit

          if (elem.contains(event.target)) {
            return;
          }
        }
      } // if element is not defined OR
      // the element contains the click target OR
      // interactive is enabled and the element is within the popper
      // then short circuit


      if (!element || element.contains(event.target) || !popperRef.current || interactive && popperRef.current.contains(event.target)) {
        return;
      }

      onClose(event);
    }; // add event listeners for outside click/tap


    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener); // cleanup stage

    return function () {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [target, targetRef, onClose, closeOnClickOutside, popperRef, interactive, ignoreCloseOnClickOutsideClassName, isIgnoreCloseOnClickOutsideEnabled]);
};

exports.useOutsideClick = useOutsideClick;