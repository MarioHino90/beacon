import styled, { css } from "styled-components";
import {
  getColor,
  getIntentColor,
  getBorderWidth,
  getBorderRadius,
  colorSelector,
} from "@braze/beacon-styling";

import { StyledIconButtonProps } from "./types";

const getMutedStyles = ({ muted, ...props }: StyledIconButtonProps) => {
  if (!muted) {
    return;
  }

  return css`
    color: ${colorSelector(props, "gray", 600)};

    &:hover:not(:disabled) {
      background: ${getColor("gray", 100)};
      color: ${getColor("gray", 800)};
    }
  `;
};

const getButtonSize = ({ size }: StyledIconButtonProps) => {
  if (size === "sm") {
    return css`
      min-height: 28px;
      min-width: 28px;
      max-height: 28px;
      max-width: 28px;
    `;
  }

  return css`
    min-height: 38px;
    min-width: 38px;
    max-height: 38px;
    max-width: 38px;
  `;
};

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  ${getButtonSize}
  background: ${getColor("gray", 0)};
  color: ${getIntentColor("primary", 500)};

  &:hover:not(:disabled) {
    background: ${getIntentColor("primary", 50)};
    color: ${getIntentColor("primary", 400)};
  }

  ${getMutedStyles};

  &:focus:not(:disabled) {
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: ${getBorderRadius("sm")};
      border: ${getBorderWidth("thick")} solid ${getIntentColor("primary", 200)};
    }
  }

  &:disabled {
    color: ${getColor("gray", 300)};
  }
`;
