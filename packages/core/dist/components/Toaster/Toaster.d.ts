import React from "react";
import { ToastContent, Id } from "react-toastify";
import { ToastOptions, ToastProps, ToasterProps } from "./types";
export declare const makeToast: (intent: ToastProps["intent"], content: ToastContent, options?: ToastOptions | undefined) => Id | null;
export declare const Toaster: {
    ({ autoClose, className, id, limit, ...props }: ToasterProps): React.ReactElement | null;
    displayName: string;
};
