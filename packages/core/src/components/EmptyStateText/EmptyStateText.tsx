import classNames from "classnames";
import styled from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getColor,
} from "@braze/beacon-styling";

import { Box, BoxProps } from "../Box";

import { EmptyStateTextProps } from "./types";

const getAttrs = ({ className, ...props }: EmptyStateTextProps): BoxProps => ({
  ...props,
  className: classNames(["bcl-empty-state-text", className]),
  boxPadding: {
    top: "sm",
  },
});

export const EmptyStateText = styled(Box).attrs(getAttrs)<BoxProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "md")};
  color: ${getColor("gray", 800)};
  max-width: 400px;
  text-align: center;
`;

EmptyStateText.displayName = "EmptyStateText";
