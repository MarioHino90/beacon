/// <reference types="react" />
import { CollapsibleContextProviderProps } from "../CollapsibleContext";
export interface CollapsibleProps extends StyledCollapsibleProps, CollapsibleContextProviderProps {
}
export interface StyledCollapsibleProps extends React.HTMLAttributes<HTMLElement> {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
    /** alignment of elements within the collapsible */
    alignment?: "left" | "center" | "right";
}
