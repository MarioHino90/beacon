import React from "react";

export type ButtonLoadingState = "idle" | "loading" | "success" | "error";

export interface UseLoadingOptions {
  /** ref object to pass into the button element */
  ref?: React.RefObject<HTMLButtonElement>;
  /** amount of time to wait in seconds after loading complete before switching back to idle state */
  timeout?: number;
  /** indicates that loading state should be reset to 'idle' after an error */
  resetOnError?: boolean;
}

export interface UseLoadingButtonResult {
  /** indicates that the button is currently in a idle, loading, success, or error state */
  loadingState: ButtonLoadingState;
  /** minimum width the button should take */
  minWidth: number | undefined;
  /** ref object to pass into the button element */
  ref: React.RefObject<HTMLButtonElement>;
}
