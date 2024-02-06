import React, { useContext } from "react";
import classNames from "classnames";

import { InputGroupContext } from "../InputGroupContext";

import { InputGroupAddonProps } from "./types";
import { StyledInputGroupAddon } from "./StyledInputGroupAddon";

export const InputGroupAddon = ({
  className,
  ...props
}: InputGroupAddonProps): React.ReactElement => {
  const { disabled, invalid } = useContext(InputGroupContext);

  return (
    <StyledInputGroupAddon
      disabled={disabled}
      invalid={invalid}
      {...props}
      className={classNames(["bcl-input-group-addon", className])}
    />
  );
};

InputGroupAddon.displayName = "InputGroupAddon";
