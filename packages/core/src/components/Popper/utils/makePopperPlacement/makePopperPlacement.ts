import { PopperContextInterface, PopperPlacement } from "../../types";
import { getTargetCoordinates } from "../getTargetCoordinates";
import { getPopperDimensions } from "../getPopperDimensions";
import { getAutoPlacement } from "../getAutoPlacement";

export const makePopperPlacement = (
  element: HTMLElement | null,
  popperRef: React.RefObject<HTMLElement>,
  {
    defaultPlacement,
    distance = 0,
    interactive,
    placement,
    portalRef,
    skidding = 0,
  }: Partial<PopperContextInterface>
): PopperPlacement => {
  // if element is not defined, short-circuit
  if (!element) {
    return {
      left: 0,
      top: 0,
      activePlacement: "bottom",
    };
  }

  // calculate offset to ensure that overlap of popper when interactive
  const interactiveOffset = interactive ? -10 : 0;

  // get coordinates of target on the DOM
  const targetCoordinates = getTargetCoordinates(element, portalRef);

  // get the dimensions of the Popper element
  const [popperHeight, popperWidth] = getPopperDimensions(popperRef);

  // auto-placement calculations, if 'placement' is 'auto'
  const activePlacement =
    placement !== "auto"
      ? placement
      : getAutoPlacement(
          element,
          { popperHeight, popperWidth },
          defaultPlacement
        );

  // break up coords for easier readability
  const { top, right, bottom, left } = targetCoordinates;

  // determine final placement of Popper
  switch (activePlacement) {
    case "bottom":
      return {
        left: left + (right - popperWidth) / 2 + skidding,
        top: top + bottom + interactiveOffset + distance,
        activePlacement,
      };
    case "bottom-start":
      return {
        left: left + skidding + interactiveOffset,
        top: top + bottom + interactiveOffset + distance,
        activePlacement,
      };
    case "bottom-end":
      return {
        left: left - (popperWidth - right) + skidding - interactiveOffset,
        top: top + bottom + interactiveOffset + distance,
        activePlacement,
      };
    case "top":
      return {
        left: left + (right - popperWidth) / 2 + skidding,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement,
      };
    case "top-start":
      return {
        left: left + skidding + interactiveOffset,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement,
      };
    case "top-end":
      return {
        left: left - (popperWidth - right) + skidding - interactiveOffset,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement,
      };
    case "right":
      return {
        left: left + right + interactiveOffset + distance,
        top: top + (bottom - popperHeight) / 2 + skidding,
        activePlacement,
      };
    case "right-start":
      return {
        left: left + right + interactiveOffset + distance,
        top: top + skidding + interactiveOffset,
        activePlacement,
      };
    case "right-end":
      return {
        left: left + right + interactiveOffset + distance,
        top: top - (popperHeight - bottom) + skidding - interactiveOffset,
        activePlacement,
      };
    case "left":
      return {
        left: left - popperWidth - interactiveOffset - distance,
        top: top + bottom / 2 - popperHeight / 2 + skidding,
        activePlacement,
      };
    case "left-start":
      return {
        left: left - popperWidth - interactiveOffset - distance,
        top: top + skidding + interactiveOffset,
        activePlacement,
      };
    case "left-end":
      return {
        left: left - popperWidth - interactiveOffset - distance,
        top: top - (popperHeight - bottom) + skidding - interactiveOffset,
        activePlacement,
      };
    default:
      return {
        left: left + (right - popperWidth) / 2 + skidding,
        top: top - popperHeight - interactiveOffset - distance,
        activePlacement: "bottom",
      };
  }
};
