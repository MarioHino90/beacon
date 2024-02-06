declare const BASE_Z_INDEX = 1050;
declare const MODAL_LEVEL_TICK = 10;
/**
 * hook to handle finding the zIndex for a modal
 *
 * @param zIndex - custom zIndex to override other options
 *
 * @returns the zIndex to use on the modal
 */
export declare const useModalLevel: (zIndex?: number | undefined) => number;
export { BASE_Z_INDEX, MODAL_LEVEL_TICK };
