import React from "react";
import classNames from "classnames";

import { ModalDialogProps } from "../types";

import { StyledModalDialog } from "./StyledModalDialog";

export const ModalDialog = React.forwardRef(
  (
    { className, zIndex, ...props }: ModalDialogProps,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <StyledModalDialog
      {...props}
      ref={ref}
      zIndex={zIndex}
      className={classNames(["bcl-modal-dialog", className])}
    />
  )
);

ModalDialog.displayName = "ModalDialog";
