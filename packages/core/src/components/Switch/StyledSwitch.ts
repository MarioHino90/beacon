import styled, { css } from "styled-components";
import {
  getBorderWidth,
  getColor,
  getIntentColor,
  intentColorSelector,
} from "@braze/beacon-styling";

import {
  HiddenCheckboxProps,
  StyledSwitchWrapperProps,
  StyledSwitchProps,
} from "./types";

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})<HiddenCheckboxProps>`
  position: absolute;
  opacity: 0;
  margin: 0;
  width: 0;
`;

const getStyles = ({ active, disabled, ...props }: StyledSwitchProps) => {
  if (disabled) {
    return css`
      background: ${getColor("gray", 300)};
      ${active ? "justify-content: flex-end;" : ""}
    `;
  }

  if (active) {
    return css`
      background: ${intentColorSelector(props, "primary", 500)};
      justify-content: flex-end;
    `;
  }

  return css`
    background: ${getColor("gray", 600)};
  `;
};

export const StyledSwitchWrapper = styled.button.attrs({
  type: "button",
})<StyledSwitchWrapperProps>`
  display: inline-block;
  cursor: ${(props) => props.disabled && "no-drop"};
`;

export const StyledSwitch = styled.div<StyledSwitchProps>`
  height: 20px;
  width: 38px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 100px;

  ${getStyles}

  &:focus-visible:not(:disabled),
  &:active:not(:disabled) {
    outline: ${getBorderWidth("thick")} solid ${getIntentColor("primary", 400)};
    outline-offset: 3px;

    /* prevents the outline from getting covered by adjacent elements */
    position: relative;
  }
`;
