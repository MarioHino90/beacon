import React from "react";
import { PopoverProps } from "./types";
/**
 * A function that abstracts the open/close logic of a popover component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the popover as its first element and the ref object to be passed to both the target and the popover
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
export declare const usePopover: <E = HTMLElement>(targetRef?: React.RefObject<E> | undefined, initialState?: boolean, disabled?: boolean) => [import("../Popper").PopperStateObject, React.RefObject<E>];
export declare const Popover: React.ForwardRefExoticComponent<PopoverProps<HTMLElement> & React.RefAttributes<HTMLDivElement>>;
