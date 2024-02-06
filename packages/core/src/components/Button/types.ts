import React from "react";
import { IntentColorType } from "@braze/beacon-styling";
import { ButtonLoadingState } from "@braze/beacon-hooks";

import { IconProps } from "../Icon";

export interface BaseButtonProps {
  /** indicates to the user the the possible outcome of clicking the button */
  intent: IntentColorType | "muted";
  /** size of the button */
  size: "sm" | "lg" | "full";
  /** visually indicate to the user the relative importance/impact of the button */
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
}

export interface StyledButtonContentProps {
  /** indicates that this is the first time the component has been rendered */
  firstRender: boolean;
  /** indicates that the icon should be animated */
  isAnimated: boolean;
}

export interface StyledStopProps extends BaseButtonProps {}

export interface StyledLoadingIconWithGradientProps
  extends Pick<BaseButtonProps, "size"> {}

export interface LoadingIconWithGradientProps
  extends StyledLoadingIconWithGradientProps,
    BaseButtonProps {}

export interface StyledLoadedWithIconProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** indicates that the icon should be animated */
  isAnimated?: boolean;
}

export interface LoadedWithIconProps
  extends Pick<IconProps, "name">,
    StyledLoadedWithIconProps {}

export interface ButtonContentProps extends BaseButtonProps {
  /** children to render within button*/
  children?: React.ReactNode | React.ReactNode[];
  /** indicates that the button is currently in a pending, active, or recently completed loading state */
  loadingState?: ButtonLoadingState;
  /** message to display in the button alongside spinner while loading */
  loadingMessage?: string;
}

export interface ButtonProps
  extends Partial<StyledButtonProps>,
    Partial<Omit<ButtonContentProps, "children">> {
  /** callback function to get aria label for different loading states; should typically only return something for 'error' and 'success' states */
  getAriaLabel?: (
    loadingState: ButtonLoadingState | undefined
  ) => string | undefined;
}

export interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  /** indicates that the button should be visually and functionally disabled */
  disabled?: boolean;
  /** minimum width the button should take */
  minWidth?: number;
}
