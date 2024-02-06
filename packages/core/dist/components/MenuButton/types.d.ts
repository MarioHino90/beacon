import React from "react";
export interface MenuButtonProps extends StyledMenuButtonProps {
}
export interface StyledMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
    /** indicates that the button is currently disabled */
    disabled?: boolean;
}
