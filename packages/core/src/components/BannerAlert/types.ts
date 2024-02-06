import React from "react";
import { ThemedStyledProps } from "styled-components";

import { UntransitionedBannerAlertProps } from "../UntransitionedBannerAlert";

export type Intent = "success" | "warning" | "danger" | "info";

export interface BannerAlertProps
  extends UntransitionedBannerAlertProps,
    Omit<StyledBannerTransitionProps, "children"> {}

export interface StyledBannerTransitionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export interface IntentContextProviderProps {
  intent: Intent;
}

// this uses <any, any> because the extra props in the themed styled component
// do not matter, just that it is themed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IntentColorArgs extends ThemedStyledProps<any, any> {
  intent: Intent;
}
