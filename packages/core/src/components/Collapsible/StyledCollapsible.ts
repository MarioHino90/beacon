import styled, { css } from "styled-components";

import { StyledCollapsibleProps } from "./types";

const getAlignItems = ({ alignment }: StyledCollapsibleProps) => {
  switch (alignment) {
    case "center":
      return css`
        align-items: center;
      `;
    case "right":
      return css`
        align-items: flex-end;
      `;
    case "left":
    default:
      return css`
        align-items: flex-start;
      `;
  }
};

export const StyledCollapsible = styled.div<StyledCollapsibleProps>`
  display: flex;
  flex-direction: column;
  ${getAlignItems};
`;
