import styled, { css } from "styled-components";
import { getIntentColor } from "@braze/beacon-styling";

import { StyledIcon } from "../Icon";

import { StyledAnnotationProps } from "./types";

function getVariantCss({ variant }: StyledAnnotationProps) {
  switch (variant) {
    case "error":
      return css`
        color: ${getIntentColor("danger", 500)};

        &:hover {
          color: ${getIntentColor("danger", 400)};
        }
      `;
    case "warning":
      return css`
        color: ${getIntentColor("warning", 500)};

        &:hover {
          color: ${getIntentColor("warning", 400)};
        }
      `;
    case "info":
    default:
      return css`
        color: ${getIntentColor("info", 500)};

        &:hover {
          color: ${getIntentColor("info", 400)};
        }
      `;
  }
}

export const StyledAnnotation = styled.div<StyledAnnotationProps>`
  display: inline-block;
  position: relative;

  & > ${StyledIcon} {
    position: absolute;
    top: -8px;
    right: -8px;
    cursor: pointer;
    background: white;
    border-radius: 10px;
    padding: 2px;
    line-height: 0;

    ${getVariantCss}
  }
`;
