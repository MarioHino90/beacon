import React from "react";
export interface RadioButtonProps<E = HTMLInputElement> extends React.HTMLAttributes<E> {
    /** indicates whether the radio button should be marked as checked */
    checked?: boolean;
    /** class name to be passed into the radio button container; use as escape hatch */
    containerClassName?: string;
    /** indicates whether the radio button should be disabled */
    disabled?: boolean;
    /** text to be shown to the user if 'invalid' prop is true */
    errorText?: string;
    /** text to be shown to the user if 'invalid' prop is false */
    helpText?: string;
    /** class name to be passed into the help text; use as escape hatch */
    helpTextClassName?: string;
    /** DOM id for the radio button */
    id?: string;
    /** indicates that the current state of the radio button is invalid */
    invalid?: boolean;
    /** only set the radio to invalid state, don't display the error text */
    invalidRadioOnly?: boolean;
    /** label to be displayed alongside radio button */
    label?: string;
    /** class name to be passed into the label; use as escape hatch */
    labelClassName?: string;
    /** DOM name for the radio button; a group of radio buttons affecting the same input should have the same 'name' prop */
    name?: string;
    /** value to be passed to the change event */
    value: string;
}
export interface StyledRadioButtonProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface RadioLabelProps extends StyledRadioLabelProps {
}
export interface StyledRadioLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** indicates whether the radio button should be marked as checked */
    checked?: boolean;
    /** indicates whether the radio button should be disabled */
    disabled?: boolean;
    /** indicates that the current state of the radio button is invalid */
    invalid?: boolean;
}
