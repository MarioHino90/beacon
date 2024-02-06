"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFieldLabelPopoverKeyboardAccessibilityEvents = void 0;

var _react = require("react");

var _Popper = require("../../Popper");

/**
 *
 * @param isOpen
 * @param controlRef
 * @param popperRef
 * @param targetRef
 */
var useFieldLabelPopoverKeyboardAccessibilityEvents = function useFieldLabelPopoverKeyboardAccessibilityEvents(isOpen, controlRef, popperRef, targetRef) {
  // interactive elements inside the popper
  var interactiveElements = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    var _interactiveElements$2, _interactiveElements$3;

    // find the first interactive child and focus it
    interactiveElements.current = (0, _Popper.extractInteractiveChildren)(popperRef.current); // extract the form control this label wraps, so that we can focus it when shift-tab is pressed in the popover

    var input = controlRef.current;

    if (isOpen) {
      var _interactiveElements$;

      // when the popover is opened, put focus on the first interactive element inside the popover so keyboard navigation will work
      (_interactiveElements$ = interactiveElements.current[0]) === null || _interactiveElements$ === void 0 ? void 0 : _interactiveElements$.focus();
    }
    /**
     * When the user is focused on the last interactive element in the popover and they hit "Tab"
     *
     * This will focus the input that the field label references, allowing tabbing forward through the form
     */


    var focusControlOnPopoverExit = function focusControlOnPopoverExit(e) {
      if (e.shiftKey) {
        // shift-tab does not need to be intercepted
        return;
      } else if (e.code === "Tab") {
        e.preventDefault();
        e.stopPropagation(); // user hit "tab" or "escape" to exit the popover, so focus the control this field label references

        input === null || input === void 0 ? void 0 : input.focus();
      }
    };
    /**
     * When the user is focused on the first interactive element in the popover and they hit "Shift-Tab"
     *
     * This will focus the icon that triggers the popover, allowing shift-tabbing backwards in the form
     */


    var focusIconOnPopoverExit = function focusIconOnPopoverExit(e) {
      if (!e.shiftKey) {
        // tab does not need to be intercepted
        return;
      } else if (e.code === "Tab") {
        var _targetRef$current;

        e.preventDefault();
        e.stopPropagation(); // user hit "shift-tab" to exit the popover, so focus the icon

        (_targetRef$current = targetRef.current) === null || _targetRef$current === void 0 ? void 0 : _targetRef$current.focus();
      }
    };
    /**
     * The user hit "Esc", so we will close the popover and focus the control this field label references
     */


    var escapeHit = function escapeHit(e) {
      if (e.shiftKey) {
        // shift-escape does not need to be intercepted
        return;
      } else if (e.code === "Escape") {
        e.preventDefault();
        e.stopPropagation(); // user hit "escape" to exit the popover, so focus the control this field label references

        input === null || input === void 0 ? void 0 : input.focus();
      }
    }; // we listen for keydown - blur/focus is too late to intercept these events
    // listen for "Esc" on all of the interactive elements in the popover


    interactiveElements.current.forEach(function (element) {
      return element.addEventListener("keydown", escapeHit);
    }); // on the last interactive element, listen for "Tab"

    (_interactiveElements$2 = interactiveElements.current[interactiveElements.current.length - 1]) === null || _interactiveElements$2 === void 0 ? void 0 : _interactiveElements$2.addEventListener("keydown", focusControlOnPopoverExit); // on the first interactive element, listen for "Shift-Tab"

    (_interactiveElements$3 = interactiveElements.current[0]) === null || _interactiveElements$3 === void 0 ? void 0 : _interactiveElements$3.addEventListener("keydown", focusIconOnPopoverExit);
    var elements = interactiveElements.current;
    return function () {
      var _elements, _elements$;

      elements.forEach(function (element) {
        return element.removeEventListener("keydown", escapeHit);
      });
      (_elements = elements[elements.length - 1]) === null || _elements === void 0 ? void 0 : _elements.removeEventListener("keydown", focusControlOnPopoverExit);
      (_elements$ = elements[0]) === null || _elements$ === void 0 ? void 0 : _elements$.removeEventListener("keydown", focusIconOnPopoverExit);
    };
  }, [controlRef, isOpen, popperRef, targetRef]);
};

exports.useFieldLabelPopoverKeyboardAccessibilityEvents = useFieldLabelPopoverKeyboardAccessibilityEvents;