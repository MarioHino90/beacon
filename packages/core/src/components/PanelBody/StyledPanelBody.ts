import styled from "styled-components";
import {
  getSpacing,
  getFontSize,
  getBorderWidth,
  getColor,
} from "@braze/beacon-styling";

import { StyledPanelBodyProps } from "./types";

export const insetSizes: Exclude<StyledPanelBodyProps["inset"], undefined>[] = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "xxxl",
];

export const StyledPanelBody = styled.div<StyledPanelBodyProps>`
  font-size: ${getFontSize("body", "md")};
  padding: ${({ inset }) => inset && getSpacing(inset)};
  text-align: ${({ textAlign }) => textAlign};
  border: ${getBorderWidth("thin")} solid ${getColor("gray", 100)};
  border-top: none;
  border-radius: 0 0 3px 3px;
`;
