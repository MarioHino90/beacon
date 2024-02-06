/**
 * @fileoverview the styled tab navigational element
 */
import styled, { css } from "styled-components";
import {
  getColor,
  getIntentColor,
  getSpacing,
  getBorderWidth,
  getFontFamily,
  getFontSize,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledTabProps } from "./types";

const commonInteractions = css`
  &:hover {
    color: ${getColor("gray", 900)};
    border-bottom-color: ${getColor("gray", 900)};
  }

  &:focus {
    outline: ${getBorderWidth("thick")} solid ${getIntentColor("primary", 200)};
    outline-offset: 2px;
  }
`;

const getTabState = ({ active, disabled }: StyledTabProps) => {
  if (disabled) {
    return css`
      color: ${getColor("gray", 400)};
      border-bottom-color: ${getColor("gray", 200)};

      &:focus {
        outline: none;
      }
    `;
  }

  if (active) {
    return css`
      color: ${getIntentColor("primary", 500)};
      border-bottom-color: ${getIntentColor("primary", 500)};

      ${commonInteractions};
    `;
  }

  return css`
    color: ${getColor("gray", 600)};

    ${commonInteractions};
  `;
};

export const StyledTab = styled.li<StyledTabProps>`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  margin: 0 ${getSpacing("lg")} 0 0;
  padding: ${getSpacing("xs")} ${getSpacing("lg")} ${getSpacing("xs")} 0;
  text-align: left;
  border-bottom-width: ${getBorderWidth("thick")};
  border-bottom-style: solid;
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  font-size: ${getFontSize("body", "md")};
  line-height: 16px;

  ${getTabState};
`;
