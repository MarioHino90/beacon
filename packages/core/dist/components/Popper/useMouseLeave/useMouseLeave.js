"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMouseLeave = void 0;

var _PopperContext = require("../PopperContext");

var _utils = require("../utils");

/**
 * Hook that returns a 'mouseleave' event listener function for Popper
 * @param handleClose the function that should be invoked when all conditions to close popper have been satisfied
 * @param popperRef ref to the Popper DOM element
 */
var useMouseLeave = function useMouseLeave(handleClose, popperRef) {
  // get props from context
  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      untriggers = _usePopperContext.untriggers,
      target = _usePopperContext.target,
      targetRef = _usePopperContext.targetRef,
      interactive = _usePopperContext.interactive; // mouse move listener for interactive state


  var handleMouseMove = function handleMouseMove(event) {
    // if 'mouseleave' is not defined as an untrigger, short circuit
    if (!untriggers || !untriggers.includes("mouseleave") || // if the popper is not visible, short-circuit
    !popperRef.current) {
      return;
    } // get element from targetRef or target


    var element = (0, _utils.getElement)({
      targetRef: targetRef,
      target: target
    }); // get the node that the mousemove event is spawned from

    var node = event.target;

    if ( // if element is not defined, short circuit
    !element || // if element contains event node, then do nothing
    element.contains(node) || // if popper contains node AND interactive, then do nothing
    popperRef.current.contains(node) && interactive || (0, _utils.isMouseOverTarget)(event, element)) {
      return;
    } // otherwise, call close fn


    handleClose(event); // finally, remove the event listener

    document.removeEventListener("mousemove", handleMouseMove);
  };
  /**
   * Set up mouse leave, which sets up an event listener
   * for the mouse move event that will remove this event
   * listener once the onClose event is called
   */


  var handleMouseLeave = function handleMouseLeave(event) {
    // add event listener for mouse move
    document.addEventListener("mousemove", handleMouseMove); // call it with this event to avoid skipping the initial destination

    handleMouseMove(event);
  };

  return handleMouseLeave;
};

exports.useMouseLeave = useMouseLeave;