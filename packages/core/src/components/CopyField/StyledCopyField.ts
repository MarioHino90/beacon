import styled from "styled-components";
import {
  getIntentColor,
  getSpacing,
  getFontFamily,
} from "@braze/beacon-styling";

import { StyledButton } from "../Button";
import { StyledInput } from "../Input";

import { StyledCopyFieldProps } from "./types";

export const StyledCopyField = styled.div<StyledCopyFieldProps>`
  display: flex;
  align-items: center;

  z-index: ${(props) => props.zIndex || "auto"};

  ${StyledInput} {
    font-family: ${getFontFamily("code")};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    caret-color: transparent !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ::selection {
      background: ${getIntentColor("primary", 50)};
    }
  }

  ${StyledButton} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: ${getSpacing("md")};
    min-width: ${(props) => props.showTextInButton && "100px"};
  }

  @keyframes pulse {
    from {
      transform: scale(1);
    }

    33% {
      transform: scale(1.1);
    }

    67% {
      transform: scale(0.95);
    }

    to {
      transform: scale(1);
    }
  }
`;
