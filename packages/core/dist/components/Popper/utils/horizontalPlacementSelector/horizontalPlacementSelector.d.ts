import { PlacementType } from "../../types";
/**
 * Function that returns a percent value to determine horizontal placement of the
 * tip based on the placement prop
 * @param placement string value for where popper should be placed
 * @returns a string containing a percentage value (e.g. "50%")
 */
export declare const horizontalPlacementSelector: (placement: PlacementType, targetDimensions: DOMRect | undefined, popperDimensions: DOMRect | undefined) => string;
