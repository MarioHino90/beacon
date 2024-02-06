import React from "react";
import { SpacingType } from "@braze/beacon-theme";
export interface PanelBodyProps extends StyledPanelBodyProps {
}
export interface StyledPanelBodyProps extends React.HTMLAttributes<HTMLElement> {
    /** inner spacing for the panel body */
    inset?: SpacingType;
    /** text alignment within the panel body */
    textAlign?: "center" | "left" | "right";
}
