import React from "react";
import { StyledCheckboxProps } from "./StyledCheckbox";
export interface CheckboxProps<E = HTMLInputElement> extends StyledCheckboxProps<E> {
    /** invoked when user clicks on the checkbox */
    onChange(event?: React.FormEvent<E>): void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
