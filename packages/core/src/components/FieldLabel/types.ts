import React from "react";

import { BoxProps } from "../Box";
import { Status } from "../StatusText";

export interface FormatLabelProps {
  /** content that should be rendered inside the node returned by the 'formatLabel' function */
  label: string;
}

export interface StyledFieldLabelInfoIconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  /** controls the color of the icon */
  variant: "muted" | "primary";
}

export interface StyledFieldLabelProps
  extends React.HTMLAttributes<HTMLLabelElement> {}

export interface FieldLabelProps extends StyledFieldLabelProps {
  /** properties to pass to the containing Box */
  boxProps?: BoxProps;
  /** field labels are intended to be used only with a single element. When used with multiple, this ref will be used to control focus when tabbing forwards */
  controlRef?: React.RefObject<HTMLElement>;
  /** indicates whether the field is optional, required, or neither */
  enforce?: "optional" | "required";
  /** If infoIconPopoverContent is specified, this prop controls the color of the info icon */
  infoIconVariant?: "primary" | "muted";
  /** help text to display in a tooltip or popover */
  infoIconPopoverContent?: string | React.ReactNode;
  /** how the info popover or tooltip should be triggered. Default is on hover */
  infoIconTriggerVariant?: "hover" | "click";
  /** function that renders takes in props and returns a react node */
  formatLabel?: (props: FormatLabelProps) => React.ReactNode;
  /** succinct help text to be displayed below the field when no error/success present */
  helpText?: string;
  /** DOM id of the target input element */
  htmlFor?: string;
  /** label to be displayed on top of the field */
  label?: string;
  /** indicates the current status of the form, if any */
  status?: Status;
  /** indicates what message should be displayed as part of the status, if any */
  statusText?: string;
}

export interface FieldLabelInfoIconAndPopoverProps {
  /** if helpIconPopoverContent is specified, this prop controls the color of the info icon */
  infoIconVariant: "primary" | "muted";
  /** help text to display in a tooltip or popover */
  helpIconPopoverContent: string | React.ReactNode | undefined;
  /** how the info popover or tooltip should be triggered. Default is on hover */
  infoIconTriggerVariant: "hover" | "click";
  /** a reference to the form field this label wraps */
  controlRef: React.RefObject<HTMLElement>;
}
