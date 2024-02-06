import React from "react";
import classNames from "classnames";
import styled, { css } from "styled-components";

import { StyledFlex } from "../Flex";
import { Label } from "../Label";
import { StatusText, StyledStatusText } from "../StatusText";
import { RadioButtonProps } from "../RadioButton";

import { StyledRadioButtonGroupProps, RadioButtonGroupProps } from "./types";

const horizontalGrid = css`
  .bcl-radio-button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 1.5rem;
    row-gap: 1rem;
    max-width: fit-content;
  }
`;

export const StyledRadioButtonGroup = styled.div<StyledRadioButtonGroupProps>`
  .bcl-radio-button-grid {
    margin-top: 0.25rem;
  }

  ${(props) => props.stacking === "horizontal" && horizontalGrid};

  ${StyledFlex} {
    max-width: ${(props) => (props.stacking === "horizontal" ? 350 : 450)}px;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  ${StyledStatusText} {
    margin-top: 1rem;
  }
`;

export const RadioButtonGroup = ({
  children,
  className,
  errorText,
  invalid,
  label,
  name,
  onChange,
  stacking = "vertical",
  value,
  ...props
}: RadioButtonGroupProps): React.ReactElement => {
  return (
    <StyledRadioButtonGroup
      {...props}
      className={classNames(["bcl-radio-button-group", className])}
      stacking={stacking}
    >
      {label && <Label>{label}</Label>}
      <div className="bcl-radio-button-grid">
        {React.Children.map(
          children,
          (child: React.ReactElement<RadioButtonProps>) =>
            React.cloneElement(child, {
              checked: value ? child.props.value === value : undefined,
              invalid,
              invalidRadioOnly: true,
              name,
              onChange,
            })
        )}
      </div>
      {invalid && errorText && <StatusText>{errorText}</StatusText>}
    </StyledRadioButtonGroup>
  );
};
