import { HTMLAttributes } from "react";
import { TokenGetter } from "@braze/beacon-styling";
import { SizeProp, IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { IconName } from "@fortawesome/free-solid-svg-icons";

// Taken from https://stackoverflow.com/a/54774013
type Override<T1, T2> = { [K in Exclude<keyof T1, keyof T2>]: T1[K] } & {
  [K in keyof T2]: T2[K];
};

// START: icon names
export type BrazeDragAndDropIconName = "drag-and-drop";

export type BrazeHtmlIconName = "html";

export type BrazePushIconName = "push";
// END: icon names

export type BrazeIconName =
  | IconName
  | BrazeDragAndDropIconName
  | BrazeHtmlIconName
  | BrazePushIconName;

export type BrazeIconProps = {
  name: BrazeIconName;
  width: number;
  height: number;
  unicode: string;
  path: string;
};

export type BrazeIconDefinition = Override<
  IconDefinition,
  {
    iconName: BrazeIconName;
  }
>;

export type BrazeIconPack = { [key: string]: BrazeIconDefinition };

/** list of acceptable names for the Icon */
export type IconComponentName = IconProp | BrazeIconName;

export interface StyledIconProps extends HTMLAttributes<HTMLSpanElement> {
  /** the hex color of the component */
  getColor?: TokenGetter<object>; // eslint-disable-line @typescript-eslint/ban-types
}

export interface IconProps extends Omit<StyledIconProps, "color"> {
  /** the name key of the icon to display */
  name: IconComponentName;
  /** the class name of the component */
  className?: string;
  /** visual size of the icon */
  size?: SizeProp;
  /** the hex color of the component. */
  color?: TokenGetter<object>; // eslint-disable-line @typescript-eslint/ban-types
}
