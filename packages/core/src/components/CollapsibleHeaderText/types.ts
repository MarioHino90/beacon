import { HTMLAttributes, ReactNode } from "react";

export interface CollapsibleHeaderTextProps
  extends StyledCollapsibleHeaderTextProps {}

export interface StyledCollapsibleHeaderTextProps
  extends HTMLAttributes<HTMLElement> {
  /** child elements to be rendered inside the component tree */
  children?: ReactNode | ReactNode[];
}
