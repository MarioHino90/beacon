import styled, { css } from "styled-components";
import { getBorderRadius, getColor, getSpacing } from "@braze/beacon-styling";

import { StyledMenuButton } from "../MenuButton";

import { BaseStyledMenuProps, StyledMenuProps } from "./types";

export const popperOverrides = css`
  box-sizing: border-box;
  max-width: 460px;
  background: transparent;
`;

const getSize = ({ size }: BaseStyledMenuProps) => {
  if (size === "sm") {
    return css`
      max-width: 200px;
      max-height: 380px;
    `;
  }

  return css`
    min-width: 300px;
    max-width: 460px;
    max-height: 380px;
  `;
};

const getButtonOverrides = ({ variant }: BaseStyledMenuProps) => {
  switch (variant) {
    case "nav":
      return css`
        &:hover:not(:disabled),
        &:focus:not(:disabled) {
          background-color: ${getColor("blue", 50)};
        }
      `;
    default:
      return null;
  }
};

export const StyledMenu = styled.ul<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid ${getColor("gray", 100)};
  border-radius: ${getBorderRadius("sm")};
  padding: ${getSpacing("md")} 0;
  box-shadow: 0px 5px 21px rgba(195, 195, 195, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${getColor("gray", 0)};
  outline: none;
  margin-top: ${(props) => props.hideTopMargin && 0};

  ${getSize};

  & ${StyledMenuButton} {
    ${getButtonOverrides};
  }
`;
