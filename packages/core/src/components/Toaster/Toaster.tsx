import React from "react";
import classNames from "classnames";
import { toast, ToastContent, Slide, Id } from "react-toastify";

import { ToastOptions, ToastProps, ToasterProps } from "./types";
import { Toast } from "./Toast";
import { StyledToaster } from "./StyledToaster";
import { ToastCloseButton } from "./ToastCloseButton";

export const makeToast = (
  intent: ToastProps["intent"],
  content: ToastContent,
  options?: ToastOptions
): Id | null => {
  switch (intent) {
    case "danger":
      return toast.error(<Toast intent={intent}>{content}</Toast>, options);
    case "success":
      return toast.success(<Toast intent={intent}>{content}</Toast>, options);
    case "warning":
      return toast.warn(<Toast intent={intent}>{content}</Toast>, options);
    case "info":
    default:
      return toast.info(<Toast intent={intent}>{content}</Toast>, options);
  }
};

export const dismissToast = (toastId?: string | number | undefined) => {
  return toast.dismiss(toastId);
};

export const Toaster = ({
  autoClose = 5000,
  className,
  id,
  limit = 3,
  ...props
}: ToasterProps): React.ReactElement | null => (
  <StyledToaster
    {...props}
    className={classNames(["bcl-toaster", className])}
    closeOnClick={false}
    containerId={id}
    draggable={false}
    enableMultiContainer
    hideProgressBar
    closeButton={ToastCloseButton}
    newestOnTop
    limit={limit}
    autoClose={autoClose}
    transition={Slide}
  />
);

Toaster.displayName = "Toaster";
