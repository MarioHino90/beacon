import React from "react";
export interface LabelProps extends StyledLabelProps {
}
export interface StyledLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** what the component should be set as */
    as?: React.ElementType;
}
