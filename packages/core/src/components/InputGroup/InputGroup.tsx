import React, { forwardRef } from "react";
import classNames from "classnames";

import { InputGroupContextProvider } from "../InputGroupContext";

import { InputGroupProps } from "./types";
import { StyledInputGroup } from "./StyledInputGroup";

export const InputGroup = forwardRef(
  (
    {
      className,
      disabled,
      fullWidth,
      invalid,
      vSize,
      ...props
    }: InputGroupProps,
    ref: React.RefObject<HTMLDivElement>
  ): React.ReactElement => {
    return (
      <InputGroupContextProvider
        disabled={disabled}
        fullWidth={fullWidth}
        invalid={invalid}
        vSize={vSize}
      >
        <StyledInputGroup
          {...props}
          ref={ref}
          className={classNames(["bcl-input-group", className, { disabled }])}
          disabled={disabled}
          fullWidth={fullWidth}
          invalid={invalid}
          vSize={vSize}
        />
      </InputGroupContextProvider>
    );
  }
);

InputGroup.displayName = "InputGroup";
