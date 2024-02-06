import React from "react";
import classNames from "classnames";

import { LabelProps } from "./types";
import { StyledLabel } from "./StyledLabel";

export const Label = ({
  className,
  ...props
}: LabelProps): React.ReactElement => (
  <StyledLabel {...props} className={classNames(["bcl-label", className])} />
);
