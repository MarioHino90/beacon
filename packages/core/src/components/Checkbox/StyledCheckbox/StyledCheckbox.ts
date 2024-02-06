import styled, { css } from "styled-components";
import {
  getBorderWidth,
  getColor,
  colorSelector,
  getIntentColor,
  intentColorSelector,
} from "@braze/beacon-styling";

import { StyledCheckboxProps } from "../types";

const getCheckboxStyles = ({
  checked,
  disabled,
  indeterminate,
  invalid,
  ...props
}: StyledCheckboxProps) => {
  if (disabled) {
    return css`
      background: ${checked
        ? intentColorSelector(props, "primary", 500)
        : colorSelector(props, "gray", 100)};
      opacity: ${checked && "0.4"};
      border-color: ${checked && "transparent"};
    `;
  }

  if (invalid) {
    return css`
      border: ${getBorderWidth("thick")} solid ${getIntentColor("danger", 500)};

      &:focus {
        box-shadow: 0 0 0 5px ${getColor("gray", 100)};
      }
    `;
  }

  return css`
    background: ${checked || indeterminate
      ? intentColorSelector(props, "primary", 500)
      : "white"};

    border-color: ${checked
      ? intentColorSelector(props, "primary", 500)
      : colorSelector(props, "gray", 300)};

    &:focus {
      box-shadow: 0 0 0 5px ${getColor("gray", 100)};
    }
  `;
};

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "cursor")};
  border-radius: 2px;
  border: ${getBorderWidth("thin")} solid ${getColor("gray", 300)};
  transition: all 150ms;
  line-height: normal;

  &:hover,
  &:focus {
    outline: none;
  }

  ${getCheckboxStyles};
`;
