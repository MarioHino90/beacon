import styled from "styled-components";

import { StyledBoxProps } from "./types";
import { getBoxCss } from "./getBoxCss";

export const StyledBox = styled.div<StyledBoxProps>`
  display: ${(props) => (props.inline ? "inline-block" : "block")};

  ${({ boxMargin, boxPadding, ...props }) =>
    getBoxCss(boxMargin, boxPadding, props)};

  ${(props) => props.styledCss};
`;
