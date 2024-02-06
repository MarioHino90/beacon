import styled from "styled-components";
import { getColor, getSpacing, getFontSize } from "@braze/beacon-styling";

import { StyledPanelHeaderProps } from "./types";

export const StyledPanelHeader = styled.header<StyledPanelHeaderProps>`
  background: ${getColor("gray", 200)};
  color: ${getColor("gray", 900)};
  padding: ${getSpacing("lg")};
  border-radius: 3px 3px 0 0;
  font-size: ${getFontSize("heading", 4)};
  font-weight: bold;
`;
