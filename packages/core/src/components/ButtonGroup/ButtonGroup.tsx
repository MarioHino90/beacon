import React from "react";
import classNames from "classnames";

import { StyledButtonGroup } from "./StyledButtonGroup";
import { ButtonGroupProps } from "./types";

export const ButtonGroup = ({
  className,
  ...props
}: ButtonGroupProps): React.ReactElement => {
  return (
    <StyledButtonGroup
      {...props}
      className={classNames(["bcl-button-group", className])}
    />
  );
};

ButtonGroup.displayName = "ButtonGroup";
