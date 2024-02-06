import styled, { css } from "styled-components";
import {
  getSpacing,
  getColor,
  getBorderWidth,
  colorSelector,
  intentColorSelector,
  getBorderRadius,
} from "@braze/beacon-styling";

import { StyledInputGroupAddonProps } from "./types";

const disabledStyles = ({ disabled }: StyledInputGroupAddonProps) => {
  if (!disabled) {
    return null;
  }

  return css`
    background: ${getColor("gray", 100)};
    cursor: not-allowed;
    color: ${getColor("gray", 300)};
    font-style: italic;
  `;
};

export const StyledInputGroupAddon = styled.div<StyledInputGroupAddonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${getSpacing("md")};
  background: ${getColor("gray", 0)};
  border-top-width: ${getBorderWidth("thin")};
  border-bottom-width: ${getBorderWidth("thin")};
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: ${({ invalid, ...props }) =>
    invalid
      ? intentColorSelector(props, "danger", 500)
      : colorSelector(props, "gray", 300)};

  &:first-child {
    border-left: ${getBorderWidth("thin")} solid
      ${({ invalid, ...props }) =>
        invalid
          ? intentColorSelector(props, "danger", 500)
          : colorSelector(props, "gray", 300)};
    border-top-left-radius: ${getBorderRadius("sm")};
    border-bottom-left-radius: ${getBorderRadius("sm")};
  }

  &:last-child {
    border-right: ${getBorderWidth("thin")} solid
      ${({ invalid, ...props }) =>
        invalid
          ? intentColorSelector(props, "danger", 500)
          : colorSelector(props, "gray", 300)};
    border-top-right-radius: ${getBorderRadius("sm")};
    border-bottom-right-radius: ${getBorderRadius("sm")};
  }

  ${disabledStyles};

  ${(props) => props.styledCss}
`;
