import { ModalHeadingProps } from "@braze/beacon-core";
import { ReactNode } from "react";

export interface AlertModalHeadingProps
  extends Omit<ModalHeadingProps, "iconType"> {
  /** children to render */
  children?: ReactNode | ReactNode[];
}
