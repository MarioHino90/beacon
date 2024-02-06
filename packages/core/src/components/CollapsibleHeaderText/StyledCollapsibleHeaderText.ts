import styled from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getSpacing,
} from "@braze/beacon-styling";

import { StyledCollapsibleHeaderTextProps } from "./types";

export const StyledCollapsibleHeaderText = styled.span<StyledCollapsibleHeaderTextProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "sm")};
  margin-right: ${getSpacing("xs")};
`;
