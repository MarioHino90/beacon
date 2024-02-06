import classNames from "classnames";
import styled, { css } from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getColor,
  getFontWeight,
  getSpacing,
} from "@braze/beacon-styling";

import { LinkProps } from "./types";

const getLinkStyles = ({ disabled }: LinkProps) => {
  if (disabled) {
    return css`
      cursor: no-drop;
      color: ${getColor("gray", 400)};
    `;
  }

  return css`
    &:focus,
    &:hover {
      color: ${getColor("blue", 600)};
      text-decoration: underline;
    }
  `;
};

const getAttrs = ({ className }: LinkProps) => ({
  className: classNames(className, "bcl-link"),
});

export const StyledLink = styled.a.attrs(getAttrs)<LinkProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  font-size: ${(props) =>
    props.variant === "inline" ? "inherit" : getFontSize("body", "md")};
  text-decoration: ${(props) =>
    props.variant === "table" ? "none" : "underline"};
  color: ${getColor("blue", 400)};
  cursor: pointer;
  vertical-align: baseline;
  ${(props) =>
    props.isCTA &&
    css`
      white-space: nowrap;
    `}

  .external-link-icon {
    margin-left: ${getSpacing("xs")};
  }

  ${getLinkStyles};
`;
