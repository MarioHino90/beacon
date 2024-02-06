import styled, { css } from "styled-components";
import {
  getFontSize,
  getColor,
  getBorderRadius,
  colorSelector,
} from "@braze/beacon-styling";

import { StyledCloseButton } from "../CloseButton";
import {
  verticalPlacementSelector,
  horizontalPlacementSelector,
} from "../Popper";

import { StyledPopoverProps } from "./types";

export const StyledPopover = styled.div<Partial<StyledPopoverProps>>`
  padding: 0.75rem;
  min-width: 200px;
  max-width: 300px;
  font-size: ${getFontSize("body", "xs")};
  border: 1px solid ${getColor("gray", 100)};
  border-radius: ${getBorderRadius("sm")};
  box-shadow: 0px 5px 21px rgba(195, 195, 195, 0.5);

  ::after {
    content: "";
    display: ${(props) => (props.noArrow ? "none" : "block")};
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;

    ${({ placement, targetDimensions, popperDimensions, ...props }) =>
      placement &&
      placement.includes("top") &&
      css`
        top: calc(100% - 1px);
        border-top-color: ${colorSelector(props, "gray", 0)};
        left: calc(
          ${verticalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 5px
        );
      `};

    ${({ placement, targetDimensions, popperDimensions, ...props }) =>
      placement &&
      placement.includes("right") &&
      css`
        right: calc(100% - 1px);
        border-right-color: ${colorSelector(props, "gray", 0)};
        top: calc(
          ${horizontalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 5px
        );
      `};

    ${({ placement, targetDimensions, popperDimensions, ...props }) =>
      placement &&
      placement.includes("bottom") &&
      css`
        bottom: calc(100% - 1px);
        border-bottom-color: ${colorSelector(props, "gray", 0)};
        left: calc(
          ${verticalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 5px
        );
      `};

    ${({ placement, targetDimensions, popperDimensions, ...props }) =>
      placement &&
      placement.includes("left") &&
      css`
        left: calc(100% - 1px);
        border-left-color: ${colorSelector(props, "gray", 0)};
        top: calc(
          ${horizontalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 5px
        );
      `};
  }

  & + ${StyledCloseButton} {
    position: absolute;
  }

  ${(props) => props.styledCss};
`;
