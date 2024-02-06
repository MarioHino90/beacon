import styled, { css, keyframes } from "styled-components";
import { colorSelector, intentColorSelector } from "@braze/beacon-styling";

import { StyledStopProps, StyledLoadingIconWithGradientProps } from "../types";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const getGradientId = ({ gradientId }): string => gradientId;

export const StyledLoadingSpinnerPath = styled.circle`
  stroke: url(#${getGradientId});
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
`;

const getIconSize = ({ size }: StyledLoadingIconWithGradientProps) => {
  switch (size) {
    case "sm":
      return css`
        width: 12px;
        height: 12px;
      `;
    case "lg":
    case "full":
    default:
      return css`
        width: 16px;
        height: 16px;
      `;
  }
};

export const StyledLoadingIconWithGradient = styled.svg<StyledLoadingIconWithGradientProps>`
  animation: ${rotate} 2s linear infinite;
  ${getIconSize};
`;

const get0StopColors = ({ intent, variant, ...props }: StyledStopProps) => {
  if (intent === "muted") {
    return colorSelector(props, "gray", 100);
  }

  switch (variant) {
    case "primary":
      return colorSelector(props, "gray", 0);
    case "secondary":
    case "tertiary":
    case "quaternary":
    default:
      return intentColorSelector(props, intent, 100);
  }
};

const get100StopColors = ({ intent, variant, ...props }: StyledStopProps) => {
  if (intent === "muted") {
    return colorSelector(props, "gray", 800);
  }

  switch (variant) {
    case "primary":
      return colorSelector(props, "gray", 0);
    case "secondary":
    case "tertiary":
    case "quaternary":
    default:
      return intentColorSelector(props, intent, 600);
  }
};

export const StyledLinearGradient0Stop = styled.stop<StyledStopProps>`
  stop-color: ${get0StopColors};
`;

export const StyledLinearGradient100Stop = styled.stop<StyledStopProps>`
  stop-color: ${get100StopColors};
`;
