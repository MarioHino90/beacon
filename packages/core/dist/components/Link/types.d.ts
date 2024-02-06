/// <reference types="react" />
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** indicates that the button should be visually and functionally disabled */
    disabled?: boolean;
    /** visual variant for the link component */
    variant?: "table" | "inline";
}
