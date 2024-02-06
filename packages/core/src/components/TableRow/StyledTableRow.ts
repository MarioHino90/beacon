import classNames from "classnames";
import styled, { css } from "styled-components";
import { getBorderWidth, getColor } from "@braze/beacon-styling";

import { getSizeSpacing } from "../../services/getSizeSpacing";

import { StyledTableRowProps } from "./types";

export const StyledTableRow = styled.tr.attrs(({ className, ...props }) => ({
  ...props,
  className: classNames(["bcl-tr", className]),
}))<StyledTableRowProps>`
  border-top: ${getBorderWidth("thin")} solid ${getColor("gray", 100)};

  :last-child {
    border-bottom: ${getBorderWidth("thin")} solid ${getColor("gray", 100)};
  }

  :hover {
    background-color: ${getColor("gray", 50)};
  }

  ${({ size }) =>
    size &&
    css`
      & td,
      & th {
        padding: ${getSizeSpacing(size)};
      }
    `}
`;

StyledTableRow.displayName = "StyledTableRow";
