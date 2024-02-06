import React from "react";
import { InputGroupContextInterface } from "../InputGroupContext";
export interface InputGroupProps extends StyledInputGroupProps {
}
export interface StyledInputGroupProps extends InputGroupContextInterface, React.HTMLAttributes<HTMLElement> {
    /** child elements to be rendered inside the component tree */
    children?: React.ReactNode | React.ReactNode[];
}
