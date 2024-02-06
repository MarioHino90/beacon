/**
 * Hook that handles event subscription for the popper
 * component and updates its placement when changes are made
 * as necessary
 * @param popperRef ref object pointing to the popper element
 * @param placementCallback function that will recalculate the
 * placement of the popper when invokes
 */
export declare const usePopperEvents: (popperRef: React.RefObject<HTMLDivElement>) => void;
