import styled from "styled-components";

import { getBoxCss } from "../Box";
import { getFlexCss } from "../Flex";

import { StyledFlexBoxProps } from "./types";

export const StyledFlexBox = styled.div<StyledFlexBoxProps>`
  ${getFlexCss};
  ${({ boxMargin, boxPadding, ...props }) =>
    getBoxCss(boxMargin, boxPadding, props)};

  ${(props) => props.styledCss};
`;
