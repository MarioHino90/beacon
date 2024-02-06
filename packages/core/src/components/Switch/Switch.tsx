import React, { forwardRef, useRef } from "react";
import classNames from "classnames";

import { Flex } from "../Flex";

import {
  HiddenCheckbox,
  StyledSwitch,
  StyledSwitchWrapper,
} from "./StyledSwitch";
import { SwitchKnob } from "./SwitchKnob";
import { SwitchLabel } from "./SwitchLabel";
import { SwitchProps } from "./types";

export const Switch = forwardRef(
  (
    {
      children,
      checked = false,
      className,
      disabled,
      onChange,
      label,
      "data-testid": testId,
      ...props
    }: SwitchProps,
    ref: React.RefObject<HTMLInputElement>
  ): React.ReactElement => {
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

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === " " && !disabled) {
        event.preventDefault();

        handleClick();
      }
    };

    const ariaLabel =
      // if 'label' prop is defined, use it
      label ||
      // otherwise, if 'children' is a string, use that
      (typeof children === "string" && children) ||
      // otherwise use 'aria-label' or nothing
      props["aria-label"];

    return (
      <Flex
        alignItems="center"
        className={classNames(["bcl-switch", className])}
        data-testid={testId}
      >
        <StyledSwitchWrapper
          disabled={disabled}
          aria-hidden
          className={classNames(["bcl-simple-switch", className])}
        >
          <HiddenCheckbox
            {...props}
            ref={activeRef}
            aria-label={ariaLabel}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <StyledSwitch
            className="bcl-styled-switch"
            tabIndex={0}
            active={checked}
            disabled={disabled}
            onClick={handleClick}
            onKeyPress={handleKeyPress}
          >
            <SwitchKnob
              className="bcl-styled-switch-knob"
              active={checked}
              disabled={disabled}
            />
          </StyledSwitch>
        </StyledSwitchWrapper>

        <SwitchLabel>{label || children}</SwitchLabel>
      </Flex>
    );
  }
);

Switch.displayName = "Switch";
