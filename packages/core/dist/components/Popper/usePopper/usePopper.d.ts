/// <reference types="react" />
import { PopperStateObject } from "../types";
/**
 * A function that abstracts the open/close logic of a popper component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the popper as its first element and the ref object to be passed to both the target and the popper
 */
export declare const usePopper: <E = HTMLElement>(targetRef?: import("react").RefObject<E> | undefined, initialState?: boolean, disabled?: boolean) => [PopperStateObject, import("react").RefObject<E>];
