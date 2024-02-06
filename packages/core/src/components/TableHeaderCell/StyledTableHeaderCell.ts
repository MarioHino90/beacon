import classNames from "classnames";
import styled, { css } from "styled-components";
import {
  getFontSize,
  getColor,
  getFontFamily,
  getFontWeight,
  getSpacing,
} from "@braze/beacon-styling";

import { getSizeSpacing } from "../../services/getSizeSpacing";
import { TableCell } from "../TableCell";

import { SortIcon } from "./SortIcon";
import { StyledTableHeaderCellProps } from "./types";

export const StyledTableHeaderCell = styled(TableCell).attrs(
  ({ className, ...props }) => ({
    ...props,
    className: classNames(["bcl-th", className]),
  })
)<StyledTableHeaderCellProps>`
  ${({ size }) =>
    size &&
    css`
      &&& {
        padding-top: ${getSizeSpacing(size)};
      }
    `}

  cursor: default;
  line-height: normal;
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  font-size: ${getFontSize("body", "sm")};
  color: ${getColor("gray", 800)};
  &[data-sortable] {
    padding-right: 30px;
  }

  & ${SortIcon} {
    color: ${getColor("gray", 200)};
    position: absolute;
    padding-left: ${getSpacing("sm")};
    top: 40%;
  }

  &[data-sortable]:hover,
  & > button:hover,
  &[data-sortable]:focus-within {
    background-color: ${getColor("gray", 50)};
    & ${SortIcon} {
      color: ${getColor("gray", 300)};
    }
  }

  & > button {
    font-family: ${getFontFamily("base")};
    font-weight: ${getFontWeight("bold")};
    font-size: ${getFontSize("body", "sm")};
    color: ${getColor("gray", 800)};
    width: 100%;
    height: 100%;
    position: relative;
    text-align: ${(props) => props.textAlign || "center"};
    &:focus,
    &:hover {
      // edge 79+ supports :focus-within, so for users with older edge, put a background color on the button only
      background-color: ${getColor("gray", 50)};
    }
  }

  &[aria-sort],
  &[aria-sort]:hover {
    & ${SortIcon} {
      color: ${getColor("gray", 700)};
    }
  }
`;
