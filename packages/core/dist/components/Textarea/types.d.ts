import { TextareaHTMLAttributes } from "react";
import { StyledInputProps } from "../Input";
export interface StyledTextareaProps<E = HTMLTextAreaElement> extends TextareaHTMLAttributes<E> {
    /** @deprecated size of the textarea component. Use vSize */
    bclSize?: "sm" | "md";
    /** size of the textarea component */
    vSize?: "md" | "lg" | "xl";
}
export interface TextareaProps<E = HTMLTextAreaElement> extends Omit<StyledInputProps, "vSize">, StyledTextareaProps<E> {
}
