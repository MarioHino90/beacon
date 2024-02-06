import React from "react";
import { InputGroupContextInterface } from "../InputGroupContext";
export interface InputProps extends StyledInputProps, React.InputHTMLAttributes<HTMLInputElement> {
    /** id to be passed to the DOM */
    id?: string;
    /** type of the input field */
    type?: "number" | "text" | "date" | "password";
    /** step to use when bumping up numbers */
    step?: number;
}
export interface StyledInputProps extends InputGroupContextInterface {
}
