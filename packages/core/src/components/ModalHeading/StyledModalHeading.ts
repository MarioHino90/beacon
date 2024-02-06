import styled from "styled-components";
import {
  intentColorSelector,
  getFontFamily,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledHeading } from "../Heading";
import { StyledIcon } from "../Icon";

import { StyledModalHeadingProps } from "./types";

const getIconColor = ({ iconType, ...props }: StyledModalHeadingProps) => {
  switch (iconType) {
    case "warning":
      return intentColorSelector(props, "warning", 500);
    default:
      return;
  }
};

export const StyledModalHeading = styled.div<StyledModalHeadingProps>`
  display: flex;

  ${StyledIcon}.optional-icon {
    margin-right: 0.5rem;
    color: ${getIconColor};
  }

  ${StyledHeading} {
    font-family: ${getFontFamily("base")};
    font-weight: ${getFontWeight("bold")};
    margin-right: auto;
  }
`;
