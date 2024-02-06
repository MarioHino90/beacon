import styled from "styled-components";
import { getFontSize } from "@braze/beacon-styling";

import { StyledIcon } from "../Icon";
import { StyledBodyText } from "../BodyText";

import { StyledStatusTextProps } from "./types";

export const StyledStatusText = styled.div<StyledStatusTextProps>`
  position: relative;
  margin-top: 6px;
  margin-left: 3px;

  ${StyledIcon} {
    margin-right: 0.5rem;
    transform: translateY(2px);
  }

  ${StyledBodyText} {
    font-size: ${getFontSize("body", "xs")};
    transform: translateY(-1px);
  }
`;
