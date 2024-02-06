import styled, { css } from "styled-components";
import { getColor, getSpacing } from "@braze/beacon-styling";

import { StyledBodyText } from "../BodyText";
import { StyledHeading } from "../Heading";
import { StyledIcon } from "../Icon";

import { StyledMenuButtonProps } from "./types";

export const StyledMenuButton = styled.button<StyledMenuButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${getSpacing("sm")} ${getSpacing("xl")};
  text-align: left;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${getColor("gray", 100)};
  }

  ${StyledIcon} {
    margin-right: ${getSpacing("sm")};
    font-size: 1rem;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;

      ${StyledHeading}, ${StyledBodyText}, ${StyledIcon} {
        color: ${getColor("gray", 400)};
      }

      .bcl-braze-icon {
        opacity: 0.3;
      }
    `};
`;
