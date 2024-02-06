import styled, { css } from "styled-components";
import {
  getColor,
  intentColorSelector,
  colorSelector,
  getFontSize,
  fontFamilySelector,
  getFontWeight,
  fontWeightSelector,
} from "@braze/beacon-styling";

import { StyledBodyTextProps } from "./types";

function getBodyStyles({ size }: StyledBodyTextProps) {
  switch (size) {
    case "sm":
      return css`
        color: ${getColor("gray", 900)};
        font-size: ${getFontSize("body", "xs")};
        line-height: 18px;
      `;
    case "label":
      return css`
        font-size: ${getFontSize("body", "sm")};
        color: ${getColor("gray", 800)};
        font-weight: ${getFontWeight("bold")};
      `;
    case "md":
    default:
      return css`
        color: ${getColor("gray", 900)};
        font-size: ${getFontSize("body", "md")};
        line-height: 20px;
      `;
  }
}

function getBodyVariant({ variant, ...props }: StyledBodyTextProps) {
  switch (variant) {
    case "success":
    case "danger":
    case "warning":
      return css`
        color: ${intentColorSelector(props, variant, 500)};
      `;
    case "info":
      return css`
        color: ${intentColorSelector(props, "primary", 500)};
      `;
    case "hint":
      return css`
        color: ${colorSelector(props, "gray", 600)};
      `;
    default:
      return null;
  }
}

const getBodyFontFamily = ({
  fontFamily = "base",
  ...props
}: StyledBodyTextProps) => {
  return css`
    font-family: ${fontFamilySelector(props, fontFamily)};
  `;
};

const getBodyFontWeight = ({ fontWeight, ...props }: StyledBodyTextProps) => {
  if (!fontWeight) {
    return null;
  }

  return css`
    font-weight: ${fontWeightSelector(props, fontWeight)};
  `;
};

export const StyledBodyText = styled.span<StyledBodyTextProps>`
  ${getBodyFontFamily};
  ${getBodyStyles};
  ${getBodyVariant};
  ${getBodyFontWeight};

  font-style: ${(props) => props.italic && "italic"};
  text-decoration: ${(props) => props.decoration};
`;
