import { PlacementType } from "../../types";

/**
 * Function that returns a percent value to determine vertical placement of the
 * tip based on the placement prop
 * @param placement string value for where popper should be placed
 * @returns a string containing a percentage value (e.g. "50%")
 */
export const verticalPlacementSelector = (
  placement: PlacementType,
  targetDimensions: DOMRect | undefined,
  popperDimensions: DOMRect | undefined
): string => {
  if (placement && placement.includes("start")) {
    if (targetDimensions && popperDimensions) {
      const tipPlacement = Math.min(
        targetDimensions.width * 0.8,
        popperDimensions.width * 0.2
      );

      return `${Math.round(tipPlacement)}px`;
    }

    return "20%";
  }

  if (placement && placement.includes("end")) {
    if (targetDimensions && popperDimensions) {
      const tipPlacement = Math.max(
        popperDimensions.width - targetDimensions.width * 0.8,
        popperDimensions.width * 0.8
      );

      return `${Math.round(tipPlacement)}px`;
    }

    return "80%";
  }

  return "50%";
};
