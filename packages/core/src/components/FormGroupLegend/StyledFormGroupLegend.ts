import styled from "styled-components";
import {
  getFontFamily,
  getSpacing,
  getFontSize,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledFormGroupLegendProps } from "./types";

export const StyledFormGroupLegend = styled.legend<StyledFormGroupLegendProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "md")};
  padding: 0;
  margin: 0;
  margin-bottom: ${getSpacing("lg")};
`;
