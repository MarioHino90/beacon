import styled, { css } from "styled-components";
import {
  colorSelector,
  getFontFamily,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledPopperProps } from "./types";
import {
  horizontalPlacementSelector,
  verticalPlacementSelector,
} from "./utils";

/**
 * Function that uses the StyledPopperProps to return a theme color
 * @param props props object for StyledPopperProps, must contain 'tipVariant'
 * @returns a theme color based on the input
 */
const tipVariantSelector = ({ tipVariant, ...props }: StyledPopperProps) => {
  return tipVariant === "dark"
    ? colorSelector(props, "gray", 900)
    : colorSelector(props, "gray", 100);
};

export const StyledPopper = styled.div<StyledPopperProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  top: ${(props) => props.top || 0}px;
  left: ${(props) => props.left || 0}px;
  position: absolute;
  display: block;
  max-width: 276px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: white;
  background-clip: padding-box;
  z-index: ${(props) => props.zIndex};
  overflow: visible;
  max-height: 30vh;
  border: ${(props) => props.interactive && "10px solid transparent"};

  ::before {
    content: "";
    display: ${(props) => (props.noArrow ? "none" : "block")};
    position: absolute;
    pointer-events: none;
    border: 6px solid transparent;
    width: 0;
    height: 0;
    opacity: ${(props) => props.tipVariant === "dark" && 0.95};

    ${({ placement, targetDimensions, popperDimensions }) =>
      placement &&
      placement.includes("top") &&
      css`
        top: 100%;
        border-top-color: ${tipVariantSelector};
        left: calc(
          ${verticalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 6px
        );
      `};

    ${({ placement, targetDimensions, popperDimensions }) =>
      placement &&
      placement.includes("right") &&
      css`
        right: 100%;
        border-right-color: ${tipVariantSelector};
        top: calc(
          ${horizontalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 6px
        );
      `};

    ${({ placement, targetDimensions, popperDimensions }) =>
      placement &&
      placement.includes("bottom") &&
      css`
        bottom: 100%;
        border-bottom-color: ${tipVariantSelector};
        left: calc(
          ${verticalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 6px
        );
      `};

    ${({ placement, targetDimensions, popperDimensions }) =>
      placement &&
      placement.includes("left") &&
      css`
        left: 100%;
        border-left-color: ${tipVariantSelector};
        top: calc(
          ${horizontalPlacementSelector(
              placement,
              targetDimensions,
              popperDimensions
            )} - 6px
        );
      `};
  }

  ${(props) => props.popperStyledCss};
`;
