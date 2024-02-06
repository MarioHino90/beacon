/// <reference types="react" />
export interface MenuGroupProps extends Omit<StyledMenuGroupProps, "hasHeading"> {
    /** heading to be displayed in the group, if any */
    heading?: string;
}
export interface StyledMenuGroupProps extends React.HTMLAttributes<HTMLElement> {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
    /** indicates that the menu group has a heading */
    hasHeading?: boolean;
}
