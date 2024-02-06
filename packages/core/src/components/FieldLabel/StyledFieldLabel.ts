import styled from "styled-components";
import { getColor, getSpacing, getFontSize } from "@braze/beacon-styling";

import { Box, BoxProps } from "../Box";
import { StyledFlex } from "../Flex";
import { Label } from "../Label";
import { StyledHelpText } from "../HelpText";

import { StyledFieldLabelProps } from "./types";

export const CustomBox = styled(Box)<BoxProps>`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const EnforceOptionalOrRequired = styled.span`
  height: ${getFontSize("body", "sm")};
  color: ${getColor("gray", 600)};
  font-weight: normal;
`;

export const StyledFieldLabel = styled(Label)<StyledFieldLabelProps>`
  display: block;
  margin-top: ${getSpacing("sm")};
  margin-bottom: 10px;
  height: ${getFontSize("body", "sm")};
  white-space: nowrap;

  & + ${StyledFlex} > ${StyledHelpText} {
    margin-top: 0.25rem;
  }
`;
