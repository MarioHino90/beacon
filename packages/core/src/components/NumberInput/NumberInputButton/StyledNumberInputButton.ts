import styled, { css } from "styled-components";
import { getColor, getSpacing } from "@braze/beacon-styling";

import { StyledNumberInputButtonProps } from "../types";

const getDirectionStyles = ({ direction }: StyledNumberInputButtonProps) => {
  switch (direction) {
    case "down":
      return css`
        top: 50%;
        bottom: 1px;
        align-items: flex-start;
      `;
    case "up":
      return css`
        top: 1px;
        bottom: 50%;
        align-items: flex-end;
      `;
    default:
      return null;
  }
};

export const StyledNumberInputButton = styled.div<StyledNumberInputButtonProps>`
  position: absolute;
  display: inline-flex;
  right: 1px;
  padding: 0 ${getSpacing("sm")};
  color: ${getColor("gray", 300)};

  &:hover,
  &:active {
    color: ${getColor("gray", 900)};
  }

  &:active {
    background-color: ${getColor("gray", 100)};
  }

  ${getDirectionStyles};
`;
