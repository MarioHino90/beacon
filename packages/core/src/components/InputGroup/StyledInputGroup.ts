import styled, { css } from "styled-components";
import {
  getBorderWidth,
  colorSelector,
  intentColorSelector,
} from "@braze/beacon-styling";

import { StyledInputGroupAddon } from "../InputGroupAddon";
import { StyledInput, getSize, inputFocusCss } from "../Input";
import { StyledNumberInput } from "../NumberInput";

import { StyledInputGroupProps } from "./types";

const notFirstChildCss = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  padding-left: 11px;
`;
const notLastChildCss = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  padding-right: 11px;
`;

export const StyledInputGroup = styled.div<StyledInputGroupProps>`
  display: inline-flex;
  flex-wrap: nowrap;
  height: ${getSize};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};

  & > ${StyledInput} {
    &:not(:first-child) {
      ${notFirstChildCss};
    }

    &:not(:last-child) {
      ${notLastChildCss};
    }
  }

  ${StyledNumberInput} {
    &:not(:first-child) > ${StyledInput} {
      ${notFirstChildCss};
    }

    &:not(:last-child) > ${StyledInput} {
      ${notLastChildCss};
    }
  }

  &:focus-within {
    ${StyledInput} {
      ${inputFocusCss};
    }

    ${StyledInputGroupAddon} {
      border-width: ${getBorderWidth("thick")};
      border-color: ${({ invalid, ...props }) =>
        intentColorSelector(props, invalid ? "danger" : "primary", 500)};

      &:first-of-type:first-child {
        margin-left: -1px;
      }

      &:last-of-type:last-child {
        margin-right: -1px;
      }
    }
  }

  &:hover:not(:focus-within):not(.disabled) {
    ${StyledInput}, ${StyledInputGroupAddon} {
      border-color: ${({ invalid, ...props }) =>
        invalid
          ? intentColorSelector(props, "danger", 500)
          : colorSelector(props, "gray", 800)};
    }
  }
`;
