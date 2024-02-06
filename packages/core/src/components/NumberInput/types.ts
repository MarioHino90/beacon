import { InputProps } from "../Input";

export interface NumberInputProps extends Omit<InputProps, "type"> {
  /** class name to be passed to the container element */
  containerClassName?: string;
}

export interface StyledNumberInputProps
  extends React.HTMLAttributes<HTMLElement> {}

export interface NumberInputButtonProps extends StyledNumberInputButtonProps {
  /** direction that the arrow should point */
  direction?: "up" | "down";
}

export interface StyledNumberInputButtonProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** direction that the arrow should point */
  direction?: "up" | "down";
}
