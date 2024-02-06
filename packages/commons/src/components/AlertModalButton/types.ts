import { ButtonProps } from "@braze/beacon-core";
import { ReactNode } from "react";

export interface AlertModalButtonProps extends Omit<ButtonProps, "intent"> {
  /** children to render */
  children?: ReactNode;
}
