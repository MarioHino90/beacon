import React from "react";

export interface StyledCheckboxProps<E = HTMLInputElement>
  extends React.HTMLAttributes<E> {
  /** indicates whether the checkbox should be marked as checked */
  checked?: boolean;
  /** indicates whether the checkbox should be marked as invalid */
  invalid?: boolean;
  /** indicates whether the checkbox should be disabled */
  disabled?: boolean;
  /** indicates that the checkbox is in an indeterminate state, see: https://css-tricks.com/indeterminate-checkboxes/ */
  indeterminate?: boolean;
}

export interface CheckboxProps extends StyledCheckboxProps {
  /** DOM id for the checkbox */
  id?: string;
  /** DOM name for the checkbox; a group of checkboxs affecting the same input should have the same 'name' prop */
  name?: string;
  /** value to be passed to the change event */
  value?: string | number;
  /** testing id for Cypress purposes */
  "data-testid"?: string;
  /** succinct help text to be displayed below the field when no error/success present */
  helpText?: string;
  /** only set the checkbox to invalid state, don't display the error text */
  invalidCheckboxOnly?: boolean;
  /** class name to be passed into the help text; use as escape hatch */
  helpTextClassName?: string;
  /** text to be shown to the user if 'invalid' prop is true */
  errorText?: string;
  /** invoked when user clicks on the checkbox */
  onChange(event?: React.FormEvent): void;
}

export interface CheckboxLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** indicates whether the radio button should be disabled */
  disabled?: boolean;
}
