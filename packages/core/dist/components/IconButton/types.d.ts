import React from "react";
import { IconProps } from "../Icon";
import { TooltipProps } from "../Tooltip";
import { PlacementType } from "../Popper";
export interface IconButtonProps extends Omit<StyledIconButtonProps, "name">, Pick<IconProps, "name">, Pick<TooltipProps, "distance"> {
}
export interface StyledIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** indicates that the button should be visually and functionally disabled */
    disabled?: boolean;
    /** apply muted styles to the component, making it grab less of the user's attention */
    muted?: boolean;
    /** size of the button. Use "lg" or left undefined for most cases, "sm" in a table row context */
    size?: "lg" | "sm";
    /** placement of the tooltip */
    placement?: PlacementType;
}
