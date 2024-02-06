import styled from "styled-components";
import classNames from "classnames";

import { FlexBox, FlexBoxProps } from "../FlexBox";

import { EmptyStateProps } from "./types";

const getAttrs = ({ className, ...props }: EmptyStateProps): FlexBoxProps => ({
  ...props,
  direction: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  boxPadding: { top: "xxl", bottom: "xxxl" },
  className: classNames(["bcl-empty-state", className]),
});

export const EmptyState = styled(FlexBox).attrs(getAttrs)<FlexBoxProps>``;

EmptyState.displayName = "EmptyState";
