import React, { forwardRef } from "react";
import classNames from "classnames";

import { Input } from "../Input";

import { NumberInputProps } from "./types";
import { StyledNumberInput } from "./StyledNumberInput";
import { NumberInputButton } from "./NumberInputButton";

const dispatchChangeEvent = (element: HTMLInputElement): void => {
  const event = new Event("change", {
    bubbles: true,
    cancelable: true,
    composed: false,
  });

  element.dispatchEvent(event);
};

export const NumberInput = forwardRef(
  (
    { containerClassName, disabled, ...props }: NumberInputProps,
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const newRef = React.useRef<HTMLInputElement>(null);
    const activeRef = ref || newRef;

    const handleIncrement = () => {
      if (!activeRef.current) {
        return;
      }

      // note: the DOM .stepUp() function does change the value, but it does not call onChange
      // see https://codesandbox.io/s/funny-monad-cns9o?file=/src/index.js
      activeRef.current.stepUp();

      dispatchChangeEvent(activeRef.current);
    };

    const handleDecrement = () => {
      if (!activeRef.current) {
        return;
      }

      // note: the DOM .stepDown() function does change the value, but it does not call onChange
      // see https://codesandbox.io/s/funny-monad-cns9o?file=/src/index.js
      activeRef.current.stepDown();

      dispatchChangeEvent(activeRef.current);
    };

    return (
      <StyledNumberInput
        className={classNames(["bcl-number-input", containerClassName])}
      >
        <Input type="number" {...props} ref={activeRef} disabled={disabled} />
        {!disabled && (
          <NumberInputButton
            className="number-input--up-button"
            direction="up"
            onClick={handleIncrement}
          />
        )}
        {!disabled && (
          <NumberInputButton
            className="number-input--down-button"
            direction="down"
            onClick={handleDecrement}
          />
        )}
      </StyledNumberInput>
    );
  }
);

NumberInput.displayName = "NumberInput";
