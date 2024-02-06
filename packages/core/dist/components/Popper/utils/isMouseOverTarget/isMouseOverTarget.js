"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMouseOverTarget = void 0;

var isMouseOverTarget = function isMouseOverTarget(event, target) {
  // get box coordinates for the target element
  var _target$getBoundingCl = target.getBoundingClientRect(),
      minX = _target$getBoundingCl.x,
      minY = _target$getBoundingCl.y,
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height; // compute max X and max Y allowed based on x,y coordinates and width,height


  var maxX = minX + width;
  var maxY = minY + height; // determine whether the mouse event is within bounds

  var withinX = event.clientX >= minX && event.clientX <= maxX;
  var withinY = event.clientY >= minY && event.clientY <= maxY; // return true if mouse is inside the target area

  return withinX && withinY;
};

exports.isMouseOverTarget = isMouseOverTarget;