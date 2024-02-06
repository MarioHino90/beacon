import styled from "styled-components";
import {
  colorSelector,
  getFontFamily,
  fontSizeSelector,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledHeadingProps } from "./types";

const getVariantColor = ({ variant, ...props }: StyledHeadingProps) => {
  switch (variant) {
    case "light":
      return colorSelector(props, "gray", 800);
    case "default":
    default:
      return colorSelector(props, "gray", 900);
  }
};

const getLineHeight = ({ level }: StyledHeadingProps) => {
  switch (level) {
    case 1:
      return "40px";
    case 2:
      return "30px";
    case 3:
      return "24px";
    case 4:
      return "22px";
    case 5:
      return "20px";
    case 6:
      return "18px";
    default:
      return;
  }
};

export const StyledHeading = styled.span<StyledHeadingProps>`
  margin: 0;
  padding: 0;
  color: ${getVariantColor};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  font-size: ${(props) => fontSizeSelector(props, "heading", props.level)};
  line-height: ${getLineHeight};
`;
