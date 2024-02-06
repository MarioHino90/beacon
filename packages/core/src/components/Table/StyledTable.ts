import styled, { css } from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getBorderWidth,
  getColor,
  getFontWeight,
} from "@braze/beacon-styling";

import { getSizeSpacing } from "../../services/getSizeSpacing";

import { StyledTableProps } from "./types";

export const StyledTable = styled.table<StyledTableProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "md")};
  border-collapse: collapse;
  width: ${({ fullWidth }) => fullWidth && "100%"};
  table-layout: ${({ fixed }) => (fixed ? "fixed" : "auto")};

  td,
  th {
    box-sizing: border-box;
    padding: ${({ size }) => getSizeSpacing(size)};
  }

  .bcl-spanned-cell:not(:last-child) {
    padding-bottom: ${({ size }) => getSizeSpacing(size)};
  }

  ${({ interactive }) =>
    !interactive &&
    css`
      .bcl-tr:hover {
        background-color: transparent;
      }
    `}

  td:not(:first-child) {
    ${({ verticalRule }) =>
      verticalRule &&
      css`
        border-left: ${getBorderWidth("thin")} solid ${getColor("gray", 100)};
      `}
  }
`;
