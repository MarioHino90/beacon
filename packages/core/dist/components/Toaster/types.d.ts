/// <reference types="react" />
import { ToastOptions as TO, ToastContainerProps } from "react-toastify";
export declare type ToastOptions = Pick<TO, "onClick" | "onOpen" | "onClose" | "toastId" | "containerId">;
export interface StyledToasterProps extends ToastContainerProps {
}
export interface ToasterProps extends Pick<StyledToasterProps, "autoClose" | "className" | "limit"> {
    /** DOM id for the component */
    id?: string;
}
export interface StyledToastProps extends React.HTMLAttributes<HTMLElement> {
    /** visually indicates the intent of the rendered component */
    intent: "danger" | "info" | "success" | "warning";
}
export interface ToastProps extends StyledToastProps {
}
export interface StyledToastCloseButtonProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface ToastCloseButtonProps extends StyledToastCloseButtonProps {
    /** click handler for the toast close */
    closeToast: (event: React.MouseEvent<HTMLDivElement>) => void;
}
