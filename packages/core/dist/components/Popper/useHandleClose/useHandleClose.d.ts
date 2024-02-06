/// <reference types="node" />
/// <reference types="react" />
/**
 * Hook to create a close handler that takes an optional delay
 * into account when defined
 * @returns an array where the first elem is the close handler and the second elem is the timer ref
 */
export declare const useHandleClose: () => [(event: any) => void, import("react").RefObject<NodeJS.Timeout | null>];
