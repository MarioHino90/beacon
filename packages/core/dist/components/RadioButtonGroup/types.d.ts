import React from "react";
import { RadioButtonProps } from "../RadioButton";
export interface StyledRadioButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** indicates how the radio buttons should be stacked */
    stacking?: "vertical" | "horizontal";
}
export interface RadioButtonGroupProps extends StyledRadioButtonGroupProps {
    /** children must be 'RadioButton' component(s) */
    children: React.ReactElement<RadioButtonProps> | React.ReactElement<RadioButtonProps>[];
    /** text to be shown to the user if 'invalid' prop is true */
    errorText?: string;
    /** indicates that the radio button group as a whole is in invalid state */
    invalid?: boolean;
    /** name of the group of radio button inputs */
    name: string;
    /** label to be displayed above the radio button group */
    label?: string;
    /** value corresponding to that of the currently selected radio button */
    value?: string;
}
