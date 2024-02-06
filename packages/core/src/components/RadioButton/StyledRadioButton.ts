import styled from "styled-components";

import { StyledHelpText } from "../HelpText";

import { StyledRadioButtonProps } from "./types";
import { radioButtonShadowCss } from "./RadioLabel";

export const StyledRadioButton = styled.div<StyledRadioButtonProps>`
  position: relative;
  display: inline-flex;

  input[type="radio"] {
    opacity: 0;
    margin: 0;
    width: 0;

    &:focus + label:before {
      ${radioButtonShadowCss}
    }

    &:checked + label:after {
      opacity: 1;
    }
  }

  & + ${StyledHelpText} {
    margin-top: 0rem;
    padding-left: 30px;
  }
`;
