import styled, { css } from "styled-components";
import { getSpacing } from "@braze/beacon-styling";

import { StyledBannerBodyWrapperProps } from "./types";

const getPadding = ({ hasClose }: StyledBannerBodyWrapperProps) => {
  if (hasClose) return null;

  return css`
    padding-right: ${getSpacing("md")};
  `;
};

export const StyledBannerBodyWrapper = styled.div<StyledBannerBodyWrapperProps>`
  display: flex;
  align-items: stretch;

  ${getPadding}
`;
