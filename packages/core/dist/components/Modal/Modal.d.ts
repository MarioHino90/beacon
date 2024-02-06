import React from "react";
import { ModalProps } from "./types";
/**
 * gets the index of the new focusable item to focus on
 *
 * @param currentFocus index of the currently focused item
 * @param totalFocusable number of total focusable items
 * @param isShifted indicates if the shift key is pressed
 *
 * @returns the index of the item to now focus on
 */
export declare const getNewFocusIndex: (currentFocus: number, totalFocusable: number, isShifted: boolean) => number;
export declare const ModalCloseButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("../CloseButton").CloseButtonProps & React.RefAttributes<HTMLButtonElement>>, any, {}, never>;
export declare const Modal: {
    ({ autoFocus, className, children, isOpen, keyboard, node, size, toggle, zIndex, ...props }: ModalProps): React.ReactElement;
    displayName: string;
};
