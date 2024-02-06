import React, { forwardRef, useRef } from "react";
import { useId } from "@braze/beacon-hooks";

import { Flex } from "../Flex";
import { HelpText } from "../HelpText";
import { StatusText } from "../StatusText";

import { StyledCheckbox } from "./StyledCheckbox";
import { CheckboxContainer } from "./CheckboxContainer";
import { CheckboxIcon } from "./CheckboxIcon";
import { CheckboxLabel } from "./CheckboxLabel";
import { CheckedPolyline } from "./CheckedPolyline";
import { HiddenCheckbox } from "./HiddenCheckbox";
import { IndeterminatePolyline } from "./IndeterminatePolyline";
import { CheckboxProps } from "./types";

export const Checkbox = forwardRef(
  (
    {
      id,
      children,
      className,
      name,
      checked,
      disabled,
      indeterminate,
      value,
      onChange,
      "aria-label": ariaLabel,
      "data-testid": testId,
      helpText,
      invalid,
      invalidCheckboxOnly,
      helpTextClassName,
      errorText,
      ...props
    }: CheckboxProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const activeRef = ref || inputRef;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange?.(event);
      }
    };

    const handleClick = () => {
      // if activeRef.current not defined, bail
      if (!activeRef.current) {
        return;
      }

      // grab the setter function for the `checked` value
      const { set: nativeCheckboxCheckedSetter } =
        Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "checked"
        ) as PropertyDescriptor;

      // set the checkbox `checked` to the reverse of the current
      nativeCheckboxCheckedSetter?.call(
        activeRef.current,
        !activeRef.current.checked
      );

      // create an event that bubbles up
      const e2 = new InputEvent("input", { bubbles: true });

      // dispatch the event
      activeRef.current.dispatchEvent(e2);

      // call the change handler
      handleChange(e2 as unknown as React.ChangeEvent<HTMLInputElement>);
    };

    const handleKeyPress = (
      event: React.KeyboardEvent<HTMLInputElement>
    ): void => {
      if (event.key === " " && !disabled) {
        event.preventDefault();

        handleClick();
      }
    };

    const defaultId = useId("bc-checkbox");
    const guaranteedId = id || defaultId;

    return (
      <CheckboxContainer
        className={className}
        disabled={disabled}
        data-testid={testId}
      >
        <Flex>
          <HiddenCheckbox
            aria-label={ariaLabel}
            ref={activeRef}
            id={guaranteedId}
            checked={checked}
            disabled={disabled}
            name={name}
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            tabIndex={-1}
            className="bcl-hidden-checkbox"
          />
          <StyledCheckbox
            {...props}
            className="bcl-styled-checkbox"
            tabIndex={0}
            indeterminate={indeterminate}
            checked={checked}
            disabled={disabled}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
            invalid={invalid}
          >
            <CheckboxIcon aria-hidden>
              {indeterminate ? (
                <IndeterminatePolyline indeterminate={indeterminate} />
              ) : (
                <CheckedPolyline checked={checked} aria-hidden />
              )}
            </CheckboxIcon>
          </StyledCheckbox>
          {children && (
            <CheckboxLabel htmlFor={guaranteedId} disabled={disabled}>
              {children}
            </CheckboxLabel>
          )}
        </Flex>

        {helpText && (
          <HelpText className={helpTextClassName} disabled={disabled}>
            {helpText}
          </HelpText>
        )}
        {invalid && errorText && !invalidCheckboxOnly && (
          <StatusText>{errorText}</StatusText>
        )}
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";
