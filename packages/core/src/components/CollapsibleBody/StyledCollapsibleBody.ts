import styled, { css } from "styled-components";
import {
  getBorderRadius,
  getBorderWidth,
  getColor,
  getSpacing,
} from "@braze/beacon-styling";

import { StyledCollapsibleList } from "../CollapsibleList";

import { StyledCollapsibleBodyProps } from "./types";

const getStyles = ({ isOpen }: StyledCollapsibleBodyProps) => {
  if (isOpen) {
    return css`
      padding: ${getSpacing("xl")};
      margin-top: ${getSpacing("sm")};
      height: auto;
      opacity: 1;
    `;
  }

  return css`
    height: 0;
    overflow: hidden;
    opacity: 0;
  `;
};

export const StyledCollapsibleBody = styled.div<StyledCollapsibleBodyProps>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${getColor("gray", 50)};
  border-radius: ${getBorderRadius("md")};
  transition: opacity 0.3s linear;
  ${getStyles};

  ${StyledCollapsibleList}:not(:last-of-type) {
    padding-bottom: ${getSpacing("xl")};
    border-bottom: ${getBorderWidth("thin")} solid ${getColor("gray", 200)};
    margin-bottom: ${getSpacing("xl")};
  }
`;
