import React from "react";
import classNames from "classnames";

import { FormGroupLegendProps } from "./types";
import { StyledFormGroupLegend } from "./StyledFormGroupLegend";

export const FormGroupLegend = ({
  className,
  ...props
}: FormGroupLegendProps): React.ReactElement => (
  <StyledFormGroupLegend
    {...props}
    className={classNames(["bcl-form-group-legend", className])}
  />
);
