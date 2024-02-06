import classNames from "classnames";
import styled from "styled-components";
import { getSpacing } from "@braze/beacon-styling";

import { ButtonGroup, ButtonGroupProps } from "../ButtonGroup";

import { EmptyStateButtonGroupProps } from "./types";

const getAttrs = ({
  className,
}: EmptyStateButtonGroupProps): ButtonGroupProps => ({
  className: classNames(["bcl-empty-state-buttons", className]),
  direction: "row",
});

export const EmptyStateButtonGroup = styled(ButtonGroup).attrs(
  getAttrs
)<ButtonGroupProps>`
  padding-top: ${getSpacing("lg")};
`;

EmptyStateButtonGroup.displayName = "EmptyStateButtonGroup";
