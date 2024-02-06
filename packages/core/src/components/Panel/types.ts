import React from "react";

export interface PanelProps extends StyledPanelProps {}

export interface StyledPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** background color for panel */
  background?: "default" | "light";
}
