import { usePopperContext } from "../PopperContext";
import { getElement, isMouseOverTarget } from "../utils";

/**
 * Hook that returns a 'mouseleave' event listener function for Popper
 * @param handleClose the function that should be invoked when all conditions to close popper have been satisfied
 * @param popperRef ref to the Popper DOM element
 */
export const useMouseLeave = (
  handleClose: (event) => void,
  popperRef: React.RefObject<HTMLDivElement>
): ((event) => void) => {
  // get props from context
  const { untriggers, target, targetRef, interactive } = usePopperContext();

  // mouse move listener for interactive state
  const handleMouseMove = (event: MouseEvent) => {
    // if 'mouseleave' is not defined as an untrigger, short circuit
    if (
      !untriggers ||
      !untriggers.includes("mouseleave") ||
      // if the popper is not visible, short-circuit
      !popperRef.current
    ) {
      return;
    }

    // get element from targetRef or target
    const element = getElement({ targetRef, target });

    // get the node that the mousemove event is spawned from
    const node = event.target as Node;

    if (
      // if element is not defined, short circuit
      !element ||
      // if element contains event node, then do nothing
      element.contains(node) ||
      // if popper contains node AND interactive, then do nothing
      (popperRef.current.contains(node) && interactive) ||
      isMouseOverTarget(event, element)
    ) {
      return;
    }

    // otherwise, call close fn
    handleClose(event);

    // finally, remove the event listener
    document.removeEventListener("mousemove", handleMouseMove);
  };

  /**
   * Set up mouse leave, which sets up an event listener
   * for the mouse move event that will remove this event
   * listener once the onClose event is called
   */
  const handleMouseLeave = (event) => {
    // add event listener for mouse move
    document.addEventListener("mousemove", handleMouseMove);

    // call it with this event to avoid skipping the initial destination
    handleMouseMove(event);
  };

  return handleMouseLeave;
};
