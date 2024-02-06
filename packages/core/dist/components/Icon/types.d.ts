import { HTMLAttributes } from "react";
import { TokenGetter } from "@braze/beacon-styling";
import { SizeProp, IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { IconName } from "@fortawesome/free-solid-svg-icons";
declare type Override<T1, T2> = {
    [K in Exclude<keyof T1, keyof T2>]: T1[K];
} & {
    [K in keyof T2]: T2[K];
};
export declare type BrazeDragAndDropIconName = "drag-and-drop";
export declare type BrazeHtmlIconName = "html";
export declare type BrazePushIconName = "push";
export declare type BrazeIconName = IconName | BrazeDragAndDropIconName | BrazeHtmlIconName | BrazePushIconName;
export declare type BrazeIconProps = {
    name: BrazeIconName;
    width: number;
    height: number;
    unicode: string;
    path: string;
};
export declare type BrazeIconDefinition = Override<IconDefinition, {
    iconName: BrazeIconName;
}>;
export declare type BrazeIconPack = {
    [key: string]: BrazeIconDefinition;
};
/** list of acceptable names for the Icon */
export declare type IconComponentName = IconProp | BrazeIconName;
export interface StyledIconProps extends HTMLAttributes<HTMLSpanElement> {
    /** the hex color of the component */
    getColor?: TokenGetter<object>;
}
export interface IconProps extends Omit<StyledIconProps, "color"> {
    /** the name key of the icon to display */
    name: IconComponentName;
    /** the class name of the component */
    className?: string;
    /** visual size of the icon */
    size?: SizeProp;
    /** the hex color of the component. */
    color?: TokenGetter<object>;
}
export {};
