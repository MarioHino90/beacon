import React from "react";
import classNames from "classnames";

import { RadioLabelProps } from "../types";

import { StyledRadioLabel } from "./StyledRadioLabel";

export const RadioLabel = ({
  children,
  className,
  ...props
}: RadioLabelProps): React.ReactElement => (
  <StyledRadioLabel {...props} className={classNames(["bcl-label", className])}>
    <span>{children}</span>
  </StyledRadioLabel>
);
