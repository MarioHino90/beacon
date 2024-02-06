import styled, { css } from "styled-components";
import { getColor, getSpacing } from "@braze/beacon-styling";

import { StyledHeading } from "../Heading";
import { StyledMenuButton } from "../MenuButton";

import { StyledMenuGroupProps } from "./types";

export const StyledMenuGroup = styled.div<StyledMenuGroupProps>`
  width: 100%;

  &:not(:last-of-type) {
    padding-bottom: ${getSpacing("md")};
    margin-bottom: ${getSpacing("md")};
    border-bottom: 1px solid ${getColor("gray", 100)};
  }

  & > ${StyledHeading} {
    padding: ${getSpacing("md")} ${getSpacing("xl")} ${getSpacing("sm")};
    color: ${getColor("gray", 500)};
    text-transform: uppercase;
  }

  ${(props) =>
    props.hasHeading &&
    css`
      &:last-of-type {
        margin-bottom: ${getSpacing("sm")};
      }

      & > ${StyledMenuButton} {
        padding-left: ${getSpacing("xxl")};
      }
    `};
`;
