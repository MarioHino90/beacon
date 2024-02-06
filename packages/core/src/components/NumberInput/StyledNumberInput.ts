import styled from "styled-components";

import { StyledInput } from "../Input";

import { StyledNumberInputProps } from "./types";
import { StyledNumberInputButton } from "./NumberInputButton";

export const StyledNumberInput = styled.div<StyledNumberInputProps>`
  position: relative;
  display: inline-block;
  user-select: none;
  width: fit-content;

  ${StyledNumberInputButton} {
    opacity: 0;
  }

  &:hover ${StyledNumberInputButton} {
    opacity: 1;
  }

  ${StyledInput} {
    &[type="number"] {
      appearance: textfield;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;
