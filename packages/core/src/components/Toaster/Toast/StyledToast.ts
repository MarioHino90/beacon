import styled from "styled-components";
import {
  getColor,
  getFontFamily,
  getFontSize,
  intentColorSelector,
  getSpacing,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledToastProps } from "../types";
import { StyledIcon } from "../../Icon";
import { StyledLink as Link } from "../../Link";

export const StyledToast = styled.div<StyledToastProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: ${getColor("gray", 800)};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  font-size: ${getFontSize("body", "sm")};
  margin: ${getSpacing("md")} 0;

  ${StyledIcon} {
    min-height: 28px;
    min-width: 28px;
    border-radius: 50%;
    font-size: 10px;
    margin: 0 ${getSpacing("md")};
    color: ${(props) => intentColorSelector(props, props.intent, 500)};
    background: ${(props) => intentColorSelector(props, props.intent, 100)};
  }

  ${Link}, .bcl-button-quaternary {
    font-size: ${getFontSize("body", "sm")};
    color: ${(props) => intentColorSelector(props, props.intent, 500)};

    &:hover {
      color: ${(props) => intentColorSelector(props, props.intent, 400)};
    }
  }

  .bcl-button-quaternary {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
