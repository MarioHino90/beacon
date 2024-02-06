import styled, { css } from "styled-components";
import {
  getBorderRadius,
  getBorderWidth,
  getFontFamily,
  getFontSize,
  getSpacing,
  colorSelector,
  getColor,
  getIntentColor,
  intentColorSelector,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledIcon } from "../Icon";

import { StyledButtonProps } from "./types";

const getButtonSize = ({ size }: StyledButtonProps) => {
  switch (size) {
    case "sm":
      return css`
        font-size: ${getFontSize("body", "sm")};
        padding: 0 ${getSpacing("sm")};
        height: 32px;

        ${StyledIcon} {
          font-size: getFontSize("body", "xs");
        }

        & > *:not(:last-of-type) {
          margin-right: ${getSpacing("xs")};
        }
      `;
    case "lg":
      return css`
        padding: 0 ${getSpacing("xl")};
        height: 40px;
      `;
    case "full":
      return css`
        display: flex;
        height: 40px;
        width: 100%;
      `;
  }
};

const getButtonColors = ({ intent, variant, ...props }: StyledButtonProps) => {
  switch (variant) {
    case "primary":
      if (intent === "muted") {
        return css`
          border: none;
          color: ${colorSelector(props, "gray", 800)};

          &:hover:not(:disabled) {
            background: ${colorSelector(props, "gray", 100)};
          }

          &:active:not(:disabled) {
            background: ${colorSelector(props, "gray", 200)};
          }

          &[data-loading-state="idle"]:disabled {
            color: ${colorSelector(props, "gray", 300)};
          }
        `;
      }

      return css`
        background: ${intentColorSelector(props, intent, 500)};
        border-color: ${intentColorSelector(props, intent, 500)};
        color: ${colorSelector(props, "gray", 0)};

        &:hover:not(:disabled) {
          background: ${intentColorSelector(props, intent, 400)};
          border-color: ${intentColorSelector(props, intent, 400)};
        }

        &:active:not(:disabled) {
          background: ${intentColorSelector(props, intent, 600)};
          border-color: ${intentColorSelector(props, intent, 600)};
        }

        &[data-loading-state="idle"]:disabled {
          background: ${colorSelector(props, "gray", 200)};
          border-color: ${colorSelector(props, "gray", 200)};
        }
      `;
    case "secondary":
      if (intent === "muted") {
        return css`
          border-color: ${colorSelector(props, "gray", 200)};
          color: ${colorSelector(props, "gray", 800)};

          &:hover:not(:disabled) {
            background: ${colorSelector(props, "gray", 100)};
          }

          &:active:not(:disabled) {
            background: ${colorSelector(props, "gray", 200)};
          }

          &[data-loading-state="idle"]:disabled {
            color: ${colorSelector(props, "gray", 300)};
          }
        `;
      }

      return css`
        border-color: ${intentColorSelector(props, intent, 500)};
        color: ${intentColorSelector(props, intent, 500)};

        &:hover:not(:disabled) {
          background: ${intentColorSelector(props, intent, 50)};
        }

        &:active:not(:disabled) {
          background: ${intentColorSelector(props, intent, 100)};
        }

        &[data-loading-state="idle"]:disabled {
          border-color: ${colorSelector(props, "gray", 300)};
          color: ${colorSelector(props, "gray", 300)};
        }
      `;
    case "tertiary":
      return css`
        border: none;
        color: ${intent === "muted"
          ? colorSelector(props, "gray", 600)
          : intentColorSelector(props, intent, 500)};

        &:hover:not(:disabled) {
          background: ${intent === "muted"
            ? colorSelector(props, "gray", 100)
            : intentColorSelector(props, intent, 50)};
        }

        &:active:not(:disabled) {
          background: ${intent === "muted"
            ? colorSelector(props, "gray", 200)
            : intentColorSelector(props, intent, 100)};
        }

        &[data-loading-state="idle"]:disabled {
          color: ${colorSelector(props, "gray", 300)};
        }
      `;
    case "quaternary":
      return css`
        border: none;
        background: none;
        color: ${intent === "muted"
          ? colorSelector(props, "gray", 600)
          : intentColorSelector(props, intent, 500)};
        padding: 2px;
        height: unset;

        &:hover:not(:disabled) {
          text-decoration: underline;
        }

        &:active:not(:disabled) {
          text-decoration: underline;
          color: ${intent === "muted"
            ? colorSelector(props, "gray", 400)
            : intentColorSelector(props, intent, 400)};
        }

        &:focus:not(:disabled) {
          text-decoration: underline;
          color: ${intent === "muted" && colorSelector(props, "gray", 400)};
        }

        &[data-loading-state="idle"]:disabled {
          color: ${colorSelector(props, "gray", 300)};
        }
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  border-width: ${getBorderWidth("thin")};
  border-style: solid;
  border-radius: ${getBorderRadius("sm")};
  font-size: ${getFontSize("body", "md")};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  background: ${getColor("gray", 0)};
  position: relative;
  min-width: ${(props) => props.minWidth}px;

  ${StyledIcon} {
    font-size: 12px;
  }

  ${getButtonSize};
  ${getButtonColors};

  &:focus-visible:not(:disabled),
  &:active:not(:disabled) {
    outline: ${getBorderWidth("thick")} solid ${getIntentColor("primary", 200)};
    outline-offset: 2px;

    /* prevents the outline from getting covered by adjacent elements */
    position: relative;
  }
`;
