import { getSpacing } from "@braze/beacon-styling";
import styled, { css, keyframes } from "styled-components";

import { StyledButtonContentProps } from "../types";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledButtonContent = styled.span<StyledButtonContentProps>`
  display: inline-flex;
  opacity: ${({ firstRender }) => (firstRender ? 1 : 0)};

  ${({ isAnimated }) =>
    isAnimated &&
    css`
      animation: ${fadeIn} 0.3s linear;
      animation-fill-mode: forwards;
    `}

  & > *:not(:last-of-type) {
    margin-right: ${getSpacing("sm")};
  }
`;
