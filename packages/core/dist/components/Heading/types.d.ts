import { HTMLAttributes } from "react";
import { HeadingSizeTypeNumeric } from "@braze/beacon-theme";
/** variant options */
export declare type Variant = "default" | "light";
export interface StyledHeadingProps extends HTMLAttributes<HTMLElement> {
    /** which header level the component should use */
    level: HeadingSizeTypeNumeric;
    /** which variant the component should be */
    variant: Variant;
    /** what the component should be set as */
    as?: React.ElementType;
}
export interface HeadingProps extends Partial<StyledHeadingProps> {
}
