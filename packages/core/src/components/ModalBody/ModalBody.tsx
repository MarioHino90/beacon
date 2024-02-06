import React from "react";
import classNames from "classnames";

import { ModalBodyProps } from "./types";
import { StyledModalBody } from "./StyledModalBody";

export const ModalBody = ({
  className,
  ...props
}: ModalBodyProps): React.ReactElement => (
  <StyledModalBody
    {...props}
    className={classNames(["bcl-modal-body", className])}
  />
);
