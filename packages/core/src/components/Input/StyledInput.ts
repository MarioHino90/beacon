import styled, { css } from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getBorderWidth,
  colorSelector,
  getBorderRadius,
  getColor,
  intentColorSelector,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledInputProps } from "./types";

export const getSize = ({ vSize }: StyledInputProps): string | null => {
  switch (vSize) {
    case "sm":
      return "32px";
    case "md":
      return "40px";
    default:
      return null;
  }
};

export const inputFocusCss = css<StyledInputProps>`
  padding: 0 11px 2px;
  border-width: ${getBorderWidth("thick")};
  border-color: ${({ invalid, ...props }) =>
    intentColorSelector(props, invalid ? "danger" : "primary", 500)};
  background: ${getColor("gray", 0)};
  caret-color: ${({ invalid, ...props }) =>
    intentColorSelector(props, invalid ? "danger" : "primary", 500)};
`;

export const StyledInput = styled.input<StyledInputProps>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};
  display: inline-block;
  box-sizing: border-box;
  font-size: ${getFontSize("body", "md")};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  border: ${getBorderWidth("thin")} solid
    ${({ invalid, ...props }) =>
      invalid
        ? intentColorSelector(props, "danger", 500)
        : colorSelector(props, "gray", 300)};
  border-radius: ${getBorderRadius("sm")};
  background: ${getColor("gray", 0)};
  color: ${getColor("gray", 900)};
  height: ${getSize};
  padding: 2px 12px 4px;

  &::placeholder {
    color: ${getColor("gray", 400)};
    font-style: italic;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${getColor("gray", 100)};
    cursor: not-allowed;
    color: ${getColor("gray", 300)};
    font-style: italic;
  }

  &:hover:not(:disabled) {
    border-color: ${({ invalid, ...props }) =>
      invalid
        ? intentColorSelector(props, "danger", 500)
        : colorSelector(props, "gray", 800)};
  }

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    ${inputFocusCss};
  }
`;
