import classNames from "classnames";
import styled, { css } from "styled-components";

import { getSizeSpacing } from "../../services/getSizeSpacing";

import { StyledTableCellProps } from "./types";

const getTruncation = ({ truncation }: StyledTableCellProps) => {
  if (truncation === "ellipsis") {
    return css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `;
  }

  if (truncation === "force-wrap") {
    return css`
      overflow-wrap: anywhere;
    `;
  }

  return null;
};

export const StyledTableCell = styled.td.attrs(({ className, ...props }) => ({
  ...props,
  className: classNames(["bcl-td", className]),
}))<StyledTableCellProps>`
  text-align: ${(props) => props.textAlign};
  position: relative;

  ${({ size }) =>
    size &&
    css`
      && {
        padding: ${getSizeSpacing(size)};
      }
    `}

  ${getTruncation};
`;
