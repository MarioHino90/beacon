/**
 * Given a popper, iterate over its children to find all interactive elements
 *
 * This list is used to control keyboard blur. When focus lands on one of these elements,
 * it will keep the popper open. When focus leaves, it will close the popper
 */
export declare const extractInteractiveChildren: (popperRef: HTMLElement | null) => HTMLElement[];
