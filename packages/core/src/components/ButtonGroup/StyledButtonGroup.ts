import classNames from "classnames";
import styled, { css } from "styled-components";
import { getBreakpoint, getSpacing } from "@braze/beacon-styling";

import { Flex, FlexProps } from "../Flex";

import { StyledButtonGroupProps } from "./types";

const mapSideToMargin = ({ aligner, side }: StyledButtonGroupProps) => {
  if (!aligner) {
    return;
  }

  if (side === "left") {
    return css`
      margin-right: auto;
    `;
  }

  if (side === "right") {
    return css`
      margin-left: auto;
    `;
  }

  return;
};

const getAttrs = ({
  aligner,
  className,
}: StyledButtonGroupProps): FlexProps => ({
  className: classNames(className, { aligner }),
});

const getColumnStyle = ({ direction }: StyledButtonGroupProps) => {
  if (direction === "column") {
    return css<StyledButtonGroupProps>`
      flex-direction: column-reverse;

      & > :not(:first-child) {
        margin-bottom: ${getSpacing("sm")};
      }
    `;
  }

  return css<StyledButtonGroupProps>`
    @media (max-width: ${getBreakpoint("sm")}px) {
      flex-direction: column-reverse;

      & > :not(:first-child) {
        margin-bottom: ${getSpacing("sm")};
      }
    }

    @media (min-width: calc(${getBreakpoint("sm")}px + 1px)) {
      flex-direction: row;

      & > :not(:first-child) {
        margin-left: ${getSpacing("md")};
      }

      ${mapSideToMargin};
    }
  `;
};

export const StyledButtonGroup = styled(Flex).attrs(
  getAttrs
)<StyledButtonGroupProps>`
  ${getColumnStyle};
`;
