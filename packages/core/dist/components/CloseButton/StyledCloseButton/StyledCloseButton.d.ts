/// <reference types="react" />
export interface StyledCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** sets the size of the button and its 'X' */
    size?: "sm" | "lg";
}
export declare const StyledCloseButton: import("styled-components").StyledComponent<"button", any, StyledCloseButtonProps, never>;
