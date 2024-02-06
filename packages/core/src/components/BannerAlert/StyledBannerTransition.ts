import styled, { css } from "styled-components";

import { StyledBannerTransitionProps } from "./types";

/*
 * We have to transition on max-height to have the height of the banner at 0 AND
 * make the transition look good.
 */
const closeCss = css`
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  transition: opacity 0.5s ease-in-out, visibility 0.2s ease 0.6s,
    max-height 0.2s ease-out 0.6s;
`;

export const StyledBannerTransition = styled.div<StyledBannerTransitionProps>`
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  max-height: 1000px;

  ${({ isOpen }) => !isOpen && closeCss}
`;
