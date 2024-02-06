import styled, { css } from "styled-components";
import { getSpacing, getColor } from "@braze/beacon-styling";

import { StyledInlineInputEditModeProps } from "../types";
import { StyledButton } from "../../Button";
import { StyledIcon } from "../../Icon";
import { StyledInput } from "../../Input";

const getSize = ({ vSize }: StyledInlineInputEditModeProps) => {
  switch (vSize) {
    case "sm":
      return css`
        .inline-input-container ${StyledIcon} {
          right: ${getSpacing("sm")};
          top: 25%;
        }

        ${StyledButton} {
          height: 32px;
          width: 32px;
        }
      `;
    case "md":
    default:
      return css`
        .inline-input-container ${StyledIcon} {
          right: ${getSpacing("md")};
          top: 33%;
        }

        ${StyledButton} {
          height: 40px;
          width: 40px;
        }
      `;
  }
};

export const StyledInlineInputEditMode = styled.div<StyledInlineInputEditModeProps>`
  @media (max-width: 624px) {
    .inline-input-button-container {
      justify-content: flex-end;
    }
  }

  .inline-input-container {
    display: inline-block;
    position: relative;

    ${StyledIcon} {
      position: absolute;
      color: ${getColor("gray", 300)};
      cursor: pointer;
      opacity: ${(props) => (props.isValueDefined ? 1 : 0)};

      &:hover {
        color: ${getColor("gray", 200)};
      }
    }
  }

  ${StyledButton} {
    padding: ${getSpacing("md")};
  }

  ${StyledInput} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &,
    &:focus {
      padding-right: ${getSpacing("xxl")};
    }
  }

  ${getSize};
`;
