import React from "react";
import classNames from "classnames";

import { StyledModalFooter } from "./StyledModalFooter";
import { ModalFooterProps } from "./types";

export const ModalFooter = ({
  className,
  ...props
}: ModalFooterProps): React.ReactElement => (
  <StyledModalFooter
    {...props}
    className={classNames(["bcl-modal-footer", className])}
  />
);

ModalFooter.displayName = "ModalFooter";
