import React from "react";
import { TooltipProps } from "./types";
/**
 * A function that abstracts the open/close logic of a tooltip component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the tooltip as its first element and the ref object to be passed to both the target and the tooltip
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
export declare const useTooltip: <E = HTMLElement>(targetRef?: React.RefObject<E> | undefined, initialState?: boolean, disabled?: boolean) => [import("../Popper").PopperStateObject, React.RefObject<E>];
export declare const Tooltip: ({ className, children, id, placement, style, styledCss, popperClassName, popperId, ...props }: TooltipProps) => React.ReactElement;
