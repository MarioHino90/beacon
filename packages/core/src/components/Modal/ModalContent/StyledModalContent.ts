import styled, { css } from "styled-components";
import {
  getColor,
  getBorderRadius,
  getSpacing,
  getBreakpoint,
} from "@braze/beacon-styling";

import { StyledCloseButton } from "../../CloseButton";
import { StyledModalBody } from "../../ModalBody";
import { StyledModalFooter } from "../../ModalFooter";
import { StyledModalHeading } from "../../ModalHeading";
import { StyledModalContentProps } from "../types";

const mapModalSizeToSpacing = ({ size }: StyledModalContentProps) => {
  switch (size) {
    case "md":
    case "lg":
    case "xl":
      return css`
        padding: ${getSpacing("xxl")};

        ${StyledModalHeading} {
          margin-bottom: ${getSpacing("xl")};
        }

        ${StyledModalBody} {
          padding: ${getSpacing("md")};
          margin: -${getSpacing("md")};
        }

        ${StyledModalFooter} {
          &:not(.aligner) {
            margin-top: ${getSpacing("xl")};
          }

          &.aligner {
            margin-top: ${getSpacing("sm")};
          }
        }

        ${StyledCloseButton} {
          top: ${getSpacing("xl")};
          right: ${getSpacing("xl")};
          font-size: 16px;
        }
      `;
    case "sm":
    default:
      return css`
        padding: ${getSpacing("xl")};

        ${StyledModalHeading} {
          margin: ${getSpacing("md")} ${getSpacing("md")} ${getSpacing("xs")};
        }

        ${StyledModalBody} {
          padding: ${getSpacing("md")} ${getSpacing("md")};
        }

        ${StyledModalFooter} {
          padding: 0 ${getSpacing("xs")};
          margin-bottom: ${getSpacing("xs")};

          &:not(.aligner) {
            margin-top: ${getSpacing("xl")};
          }

          &.aligner {
            margin-top: ${getSpacing("sm")};
          }
        }

        ${StyledCloseButton} {
          top: ${getSpacing("lg")};
          right: ${getSpacing("lg")};
          font-size: 12px;
        }
      `;
  }
};

const mapModalSizeToPx = ({ size }: StyledModalContentProps) => {
  switch (size) {
    case "md":
      return css`
        width: 760px;
      `;
    case "lg":
      return css`
        width: 920px;
      `;
    case "xl":
      return css`
        width: 1080px;
      `;
    case "sm":
    default:
      return css`
        width: 520px;
      `;
  }
};

export const StyledModalContent = styled.div<StyledModalContentProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: auto;
  background-color: ${getColor("gray", 0)};
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: ${getBorderRadius("md")};
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;

  max-width: 90vw;
  max-height: calc(100vh - 120px);

  ${mapModalSizeToPx};
  ${mapModalSizeToSpacing};

  @media (max-width: ${getBreakpoint("sm")}px) {
    width: 90vw;
  }
`;
