import classNames from "classnames";
import styled from "styled-components";
import { getSpacing } from "@braze/beacon-styling";

import { BrazeIcon, BrazeIconProps } from "../BrazeIcon";

import { EmptyStateIconProps } from "./types";

const getAttrs = ({
  className,
  ...props
}: EmptyStateIconProps): BrazeIconProps => ({
  ...props,
  className: classNames(["bcl-empty-state-icon", className]),
});

export const EmptyStateIcon = styled(BrazeIcon).attrs(getAttrs)<BrazeIconProps>`
  padding-top: ${getSpacing("md")};
`;

EmptyStateIcon.displayName = "EmptyStateIcon";
