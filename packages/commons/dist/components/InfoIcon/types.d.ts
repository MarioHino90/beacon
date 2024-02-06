import { IconProps } from "@braze/beacon-core";
export interface InfoIconProps extends Omit<IconProps, "name" | "color"> {
    /** indicates which variant to use */
    variant?: "regular" | "muted";
    /** alt text for the info icon */
    altText?: string;
}
