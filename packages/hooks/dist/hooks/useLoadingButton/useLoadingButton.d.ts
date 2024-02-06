import { ButtonLoadingState, UseLoadingButtonResult, UseLoadingOptions } from "./types";
/**
 * Hook that acts as a state machine for a `Button` component via user supplied values
 *
 * @param status indicates that the resource triggered by the button click is currently loading
 * @param options additional options to help configure hook behavior
 */
export declare const useLoadingButton: (status: ButtonLoadingState, { ref, resetOnError, timeout }?: UseLoadingOptions) => [UseLoadingButtonResult, () => void];
