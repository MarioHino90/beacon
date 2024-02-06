import styled, { css } from "styled-components";
import { getBreakpoint, getSpacing } from "@braze/beacon-styling";

import { StyledModalDialogProps } from "../types";

export const StyledModalDialog = styled.div<StyledModalDialogProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
  display: none;
  overflow: hidden;
  outline: 0;

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      justify-content: center;
      top: 60px;
      bottom: 60px;
      transform: translate(0, 0);

      @media (max-width: ${getBreakpoint("sm")}px) {
        top: ${getSpacing("xxxl")};
        bottom: ${getSpacing("xxxl")};
      }
    `};
`;
