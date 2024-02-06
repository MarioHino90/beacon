import React from "react";
import classNames from "classnames";

import { FormGroupProps } from "./types";
import { StyledFormGroup } from "./StyledFormGroup";

export const FormGroup = ({
  className,
  ...props
}: FormGroupProps): React.ReactElement => {
  return (
    <StyledFormGroup
      {...props}
      className={classNames(["bcl-FormGroup", "bcl-form-group", className])}
    />
  );
};
