import styled, { css, keyframes } from "styled-components";

import { StyledIcon } from "../../Icon";
import { StyledLoadedWithIconProps } from "../types";

const scale = keyframes`
  0% {
   transform: scale(10);
  }
  50% {
   transform: scale(0.2);
  }
  70% {
   transform: scale(1.2);
  }
  90% {
   transform: scale(0.7);
  }
  100% {
   transform: scale(1);
  }
`;

export const StyledLoadedWithIcon = styled.span<StyledLoadedWithIconProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledIcon} {
    ${({ isAnimated }) =>
      isAnimated &&
      css`
        animation: ${scale} 1s linear;
      `}

    i {
      transform-origin: center center;
    }
  }
`;
