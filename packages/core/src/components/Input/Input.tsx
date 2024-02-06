import React, { useContext } from "react";
import classNames from "classnames";
import { useIME } from "@braze/beacon-hooks";

import { InputGroupContext } from "../InputGroupContext";

import { InputProps } from "./types";
import { StyledInput } from "./StyledInput";

export const Input = React.forwardRef(
  (
    {
      className,
      invalid,
      type = "text",
      min,
      max,
      vSize,
      step,
      onChange,
      ...props
    }: InputProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const {
      invalid: contextInvalid,
      disabled,
      fullWidth,
      vSize: contextVSize,
    } = useContext(InputGroupContext);

    const imeProps = useIME<HTMLInputElement>({
      onChange,
      value: props.value,
      defaultValue: props.defaultValue,
      ref,
    });

    // combine vSize props from local and context
    const activeVSize = vSize || contextVSize || "md";

    return (
      <StyledInput
        disabled={disabled}
        fullWidth={fullWidth}
        {...props}
        {...imeProps}
        className={classNames([
          "bcl-input",
          // added because Bootstrap styles kill our styles, for cross compat reasons in platform
          // delete when bootstrap is removed from the platform stylesheet
          { "bcl-input-invalid": invalid || contextInvalid },
          { [`bcl-input-${activeVSize}`]: activeVSize },
          className,
        ])}
        invalid={invalid || contextInvalid}
        vSize={activeVSize}
        type={type}
        {...(type === "number" || type === "date" ? { min, max, step } : {})}
      />
    );
  }
);

Input.displayName = "Input";
