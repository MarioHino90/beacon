import { PlacementType } from "../../types";

/**
 * Function that returns a percent value to determine horizontal placement of the
 * tip based on the placement prop
 * @param placement string value for where popper should be placed
 * @returns a string containing a percentage value (e.g. "50%")
 */
export const horizontalPlacementSelector = (
  placement: PlacementType,
  targetDimensions: DOMRect | undefined,
  popperDimensions: DOMRect | undefined
): string => {
  if (placement && placement.includes("start")) {
    if (targetDimensions && popperDimensions) {
      const tipPlacement = Math.min(
        targetDimensions.height * 0.7,
        popperDimensions.height * 0.3
      );

      return `${Math.round(tipPlacement)}px`;
    }

    return "30%";
  }

  if (placement && placement.includes("end")) {
    if (targetDimensions && popperDimensions) {
      const tipPlacement = Math.max(
        popperDimensions.height - targetDimensions.height * 0.7,
        popperDimensions.height * 0.7
      );

      return `${Math.round(tipPlacement)}px`;
    }

    return "70%";
  }

  return "50%";
};
