import styled from "styled-components";

import { StyledFlexProps } from "./types";
import { getFlexCss } from "./getFlexCss";

export const StyledFlex = styled.div<StyledFlexProps>`
  ${getFlexCss};

  ${(props) => props.styledCss}
`;
