import classNames from "classnames";
import styled, { css, keyframes, StyledProps } from "styled-components";
import { getColor, getBorderRadius } from "@braze/beacon-styling";

import { SkeletonLoaderProps } from "./types";

const getVariantCss = ({ variant }: StyledProps<SkeletonLoaderProps>) => {
  switch (variant) {
    case "checkbox":
      return css`
        height: 18px;
        width: 18px;
      `;
    case "text":
      return css`
        height: 14px;
        width: 100%;
      `;
    case "image":
      return css`
        height: 26px;
        width: 26px;
      `;
    case "image-round":
      return css`
        height: 26px;
        width: 26px;

        border-radius: 100%;
      `;
    default:
      return css`
        height: 100%;
        width: 100%;
      `;
  }
};

const pulse = keyframes`
    0% {
      background-position: 0% 0%
    }
    100% {
      background-position: -135% 0%
    }
`;

export const SkeletonLoader = styled.div.attrs(
  ({ className, variant, ...props }: SkeletonLoaderProps) => ({
    ...props,
    variant,
    className: classNames([
      "bcl-skeleton-loader",
      variant ? `bcl-skeleton-loader-${variant}` : "",
      className,
    ]),
  })
)<SkeletonLoaderProps>`
  border-radius: ${getBorderRadius("sm")};

  background: linear-gradient(
    -90deg,
    ${getColor("gray", 100)} 0%,
    ${getColor("gray", 50)} 50%,
    ${getColor("gray", 100)} 100%
  );

  background-size: 400% 400%;

  animation: ${pulse} 1.2s ease-in-out infinite;

  ${getVariantCss}
`;
