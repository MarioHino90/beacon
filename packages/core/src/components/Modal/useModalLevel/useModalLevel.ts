import { useContext } from "react";

import { LevelsContext } from "../../LevelsContext";

const BASE_Z_INDEX = 1050;
const MODAL_LEVEL_TICK = 10;

/**
 * hook to handle finding the zIndex for a modal
 *
 * @param zIndex - custom zIndex to override other options
 *
 * @returns the zIndex to use on the modal
 */
export const useModalLevel = (zIndex?: number): number => {
  const level = useContext(LevelsContext);

  if (zIndex) {
    // we add the modal tick amount to keep backwards compatibillity
    // long term it would be best to remove this
    return zIndex + MODAL_LEVEL_TICK;
  }

  if (level) {
    return level;
  }

  return BASE_Z_INDEX;
};

export { BASE_Z_INDEX, MODAL_LEVEL_TICK };
