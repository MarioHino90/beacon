import { getColor, getFontSize } from "@braze/beacon-styling";
import styled, { css } from "styled-components";
import classNames from "classnames";

import { Icon } from "../Icon";

import { SortIconProps } from "./types";

export const SortIcon = styled(Icon).attrs(
  ({ className, sortDirection, ...props }: SortIconProps) => ({
    ...props,
    className: classNames(["bcl-sort-icon", className]),
    ...(sortDirection && { "data-sort": sortDirection }),
  })
)`
  font-size: ${getFontSize("body", "sm")};
  ${({ inactive }: SortIconProps) =>
    inactive &&
    css`
      color: ${getColor("gray", 200)};
    `}
`;

SortIcon.displayName = "StyledSortIcon";
