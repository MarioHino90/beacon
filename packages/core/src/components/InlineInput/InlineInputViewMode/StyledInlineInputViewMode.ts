import styled, { css } from "styled-components";
import { getSpacing, getIntentColor } from "@braze/beacon-styling";

import { StyledInlineInputViewModeProps } from "../types";
import { StyledIcon } from "../../Icon";

const getSize = ({ vSize }: StyledInlineInputViewModeProps) => {
  switch (vSize) {
    case "sm":
      return css`
        height: 32px;
      `;
    case "md":
    default:
      return css`
        height: 40px;
      `;
  }
};

export const StyledInlineInputViewMode = styled.div<StyledInlineInputViewModeProps>`
  display: inline-flex;
  align-items: center;
  width: fit-content;

  ${(props) =>
    props.disabled
      ? css`
          ${StyledIcon} {
            display: none;
          }
        `
      : css`
          ${StyledIcon} {
            opacity: 0;
            margin-left: ${getSpacing("sm")};
            color: ${getIntentColor("primary", 500)};
            cursor: pointer;
          }

          &:hover,
          &:focus {
            ${StyledIcon} {
              opacity: 1;
            }
          }
        `};

  ${getSize};
`;
