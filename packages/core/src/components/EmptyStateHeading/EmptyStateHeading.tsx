import classNames from "classnames";
import styled from "styled-components";
import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getSpacing,
} from "@braze/beacon-styling";

import { Box, BoxProps } from "../Box";

import { EmptyStateHeadingProps } from "./types";

const getAttrs = ({
  className,
  ...props
}: EmptyStateHeadingProps): BoxProps => ({
  ...props,
  className: classNames(["bcl-empty-state-heading", className]),
});

export const EmptyStateHeading = styled(Box).attrs(getAttrs)<BoxProps>`
  padding-top: ${getSpacing("lg")};
  font-family: ${getFontFamily("base")};
  font-size: ${getFontSize("heading", 4)};
  font-weight: ${getFontWeight("bold")};
  color: ${getColor("gray", 900)};
  max-width: 400px;
  text-align: center;
`;

EmptyStateHeading.displayName = "EmptyStateHeading";
