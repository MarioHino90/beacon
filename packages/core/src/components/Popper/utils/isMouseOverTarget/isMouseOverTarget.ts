export const isMouseOverTarget = (
  event: MouseEvent,
  target: HTMLElement
): boolean => {
  // get box coordinates for the target element
  const { x: minX, y: minY, width, height } = target.getBoundingClientRect();

  // compute max X and max Y allowed based on x,y coordinates and width,height
  const maxX = minX + width;
  const maxY = minY + height;

  // determine whether the mouse event is within bounds
  const withinX = event.clientX >= minX && event.clientX <= maxX;
  const withinY = event.clientY >= minY && event.clientY <= maxY;

  // return true if mouse is inside the target area
  return withinX && withinY;
};
