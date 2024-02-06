/// <reference types="react" />
export interface CollapsibleBodyProps extends StyledCollapsibleBodyProps {
}
export interface StyledCollapsibleBodyProps extends React.HTMLAttributes<HTMLElement> {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
    /** indicates that the collapsible is currently being displayed */
    isOpen?: boolean;
}
