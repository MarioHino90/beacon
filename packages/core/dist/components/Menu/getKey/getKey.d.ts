import { KeyboardKey } from "../types";
/**
 * Function that assigns a keyboard event's key to a predictable value,
 * while retaining backwards compatibility
 * @param event a KeyboardEvent object
 * @returns a string indicating the key that was in the event
 */
export declare const getKey: (event: KeyboardEvent) => KeyboardKey | undefined;
