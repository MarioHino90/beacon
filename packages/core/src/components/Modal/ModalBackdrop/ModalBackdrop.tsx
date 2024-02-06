import React from "react";
import classNames from "classnames";

import { ModalBackdropProps } from "../types";

import { StyledModalBackdrop } from "./StyledModalBackdrop";

export const ModalBackdrop = React.forwardRef(
  (
    { className, zIndex = 1040, ...props }: ModalBackdropProps,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <StyledModalBackdrop
      {...props}
      zIndex={zIndex}
      ref={ref}
      className={classNames(["bcl-modal-backdrop", className])}
    />
  )
);

ModalBackdrop.displayName = "ModalBackdrop";
