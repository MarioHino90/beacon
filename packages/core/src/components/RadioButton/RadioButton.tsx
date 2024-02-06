import React, { useRef } from "react";
import classNames from "classnames";

import { Flex } from "../Flex";
import { HelpText } from "../HelpText";
import { StatusText } from "../StatusText";

import { RadioButtonProps } from "./types";
import { RadioLabel } from "./RadioLabel";
import { StyledRadioButton } from "./StyledRadioButton";

export const RadioButton = React.forwardRef(
  (
    {
      children,
      id,
      containerClassName,
      checked,
      disabled,
      errorText,
      helpText,
      helpTextClassName,
      invalid,
      invalidRadioOnly,
      label,
      labelClassName,
      ...props
    }: RadioButtonProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const fakeId = useRef<string>(
      `radio-button-${Math.floor(Math.random() * 1000000000)}`
    );
    const activeId = id || fakeId.current;

    return (
      <Flex direction="column">
        <StyledRadioButton
          className={classNames("bcl-radio-button", containerClassName)}
        >
          <input
            {...props}
            ref={ref}
            type="radio"
            id={activeId}
            checked={checked}
            disabled={disabled}
          />
          {(children || label) && (
            <RadioLabel
              htmlFor={activeId}
              checked={checked}
              className={labelClassName}
              invalid={invalid}
              disabled={disabled}
            >
              {children || label}
            </RadioLabel>
          )}
        </StyledRadioButton>

        {helpText && (!invalid || invalidRadioOnly) && (
          <HelpText className={helpTextClassName} disabled={disabled}>
            {helpText}
          </HelpText>
        )}
        {invalid && errorText && !invalidRadioOnly && (
          <StatusText>{errorText}</StatusText>
        )}
      </Flex>
    );
  }
);

RadioButton.displayName = "RadioButton";
