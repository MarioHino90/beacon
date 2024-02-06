import styled from "styled-components";
import { getColor, getFontSize, getBorderRadius } from "@braze/beacon-styling";

import { StyledTooltipProps } from "./types";

export const StyledTooltip = styled.div<StyledTooltipProps>`
  padding: 0.5rem 0.75rem 0.25rem;
  opacity: 0.95;
  color: ${getColor("gray", 0)};
  background-color: ${getColor("gray", 900)};
  text-align: center;
  min-width: 60px;
  max-width: 200px;
  font-size: ${getFontSize("body", "xs")};
  border-radius: ${getBorderRadius("sm")};
  box-shadow: 0px 10px 15px rgba(46, 60, 71, 0.1);

  & > div {
    transform: translateY(-1px);
  }

  ${(props) => props.styledCss};
`;
