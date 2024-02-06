import styled from "styled-components";
import {
  colorSelector,
  getFontFamily,
  getFontWeight,
  getSpacing,
} from "@braze/beacon-styling";

import { StyledPanelProps } from "./types";

function getBackground({ background, ...props }: StyledPanelProps) {
  switch (background) {
    case "light":
      return colorSelector(props, "gray", 50);
    case "default":
    default:
      return colorSelector(props, "gray", 0);
  }
}

export const StyledPanel = styled.section<StyledPanelProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  margin-bottom: ${getSpacing("xxl")};
  background: ${getBackground};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  &:last-of-type {
    margin-bottom: ${getSpacing("none")};
  }
`;
