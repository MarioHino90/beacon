export interface SwitchLabelProps extends React.HTMLAttributes<HTMLElement> {}

export interface StyledSwitchWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface SwitchKnobProps extends React.HTMLAttributes<HTMLElement> {
  /** indicates if the switch is "active" */
  active: boolean;
  /** indicates that the component is disabled */
  disabled?: boolean;
}

export interface HiddenCheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export interface StyledSwitchProps extends React.HTMLAttributes<HTMLElement> {
  /** indicates if the switch is "active" */
  active: boolean;
  /** indicates that the switch is disabled */
  disabled?: boolean;
}

export interface SwitchProps extends HiddenCheckboxProps {
  /** label for the switch */
  label?: string;
  "data-testid"?: string;
}
