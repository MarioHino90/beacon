import styled from "styled-components";
import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledLabelProps } from "./types";

export const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  position: relative;
  margin-bottom: 0.5rem;
  vertical-align: bottom;
  color: ${getColor("gray", 800)};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  font-size: ${getFontSize("body", "sm")};
`;
