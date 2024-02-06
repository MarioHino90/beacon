import React from "react";
import { ThemedStyledProps } from "styled-components";
import { UntransitionedBannerAlertProps } from "../UntransitionedBannerAlert";
export declare type Intent = "success" | "warning" | "danger" | "info";
export interface BannerAlertProps extends UntransitionedBannerAlertProps, StyledBannerTransitionProps {
}
export interface StyledBannerTransitionProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
}
export interface IntentContextProviderProps {
    intent: Intent;
}
export interface IntentColorArgs extends ThemedStyledProps<any, any> {
    intent: Intent;
}
