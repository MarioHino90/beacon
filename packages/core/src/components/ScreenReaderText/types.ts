import { HTMLAttributes, ReactNode } from "react";

export interface ScreenReaderTextProps extends HTMLAttributes<HTMLElement> {
  /** child elements to be rendered inside the component tree */
  children?: ReactNode | ReactNode[];
}
