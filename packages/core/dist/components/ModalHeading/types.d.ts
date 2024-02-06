import React from "react";
export declare type IconTypes = "warning";
export interface StyledModalHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    /** type of icon to be rendered, if any */
    iconType?: IconTypes;
}
export interface ModalHeadingProps extends StyledModalHeadingProps {
    /** which heading level the component should use */
    level?: 2 | 3;
}
