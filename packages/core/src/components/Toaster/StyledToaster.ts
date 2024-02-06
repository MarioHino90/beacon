import styled, { css } from "styled-components";
import {
  getColor,
  getIntentColor,
  getBorderRadius,
  getFontFamily,
  getFontSize,
  getSpacing,
  getFontWeight,
  IntentColorType,
} from "@braze/beacon-styling";
import { ToastContainer } from "react-toastify";

import { StyledToasterProps } from "./types";
import { StyledToastCloseButton } from "./ToastCloseButton";

const getToastIntentStyle = (intent: IntentColorType) => css`
  border: 1px solid ${getIntentColor(intent, 400)};
  border-left: 0.5rem solid ${getIntentColor(intent, 400)};

  ${StyledToastCloseButton} {
    &:hover,
    &:focus {
      background: ${getIntentColor(intent, 50)};
    }
  }
`;

export const StyledToaster = styled(ToastContainer)<StyledToasterProps>`
  box-sizing: border-box;

  @media (min-width: 481px) {
    width: 328px;
  }

  .Toastify__toast {
    padding: 0;
    background: ${getColor("gray", 0)};
    box-shadow: 0px 3px 7px rgba(46, 60, 71, 0.1);
    border-radius: ${getBorderRadius("md")};
    transition: all 100ms ease-in-out;

    &:hover {
      box-shadow: 0px 9px 7px rgba(46, 60, 71, 0.1);
    }

    @media (max-width: 480px) {
      margin-bottom: ${getSpacing("md")};
    }
  }

  .Toastify__toast--error {
    ${getToastIntentStyle("danger")};
  }

  .Toastify__toast--info {
    ${getToastIntentStyle("primary")};
  }

  .Toastify__toast--success {
    ${getToastIntentStyle("success")};
  }

  .Toastify__toast--warning {
    ${getToastIntentStyle("warning")};
  }

  .Toastify__toast-body {
    color: ${getColor("gray", 800)};
    font-family: ${getFontFamily("base")};
    font-weight: ${getFontWeight("bold")};
    font-size: ${getFontSize("body", "sm")};
    margin: 0;
  }
`;
