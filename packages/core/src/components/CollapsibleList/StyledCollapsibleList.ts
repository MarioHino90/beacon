import styled from "styled-components";

import { StyledCollapsibleListProps } from "./types";

export const StyledCollapsibleList = styled.div<StyledCollapsibleListProps>`
  & > ul {
    margin-bottom: 0;
  }
`;
