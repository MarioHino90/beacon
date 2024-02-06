import styled, { css } from "styled-components";

import { StyledModalProps } from "./types";

export const StyledModal = styled.div<StyledModalProps>`
  ${(props) =>
    props.isOpen &&
    css`
      overflow-x: hidden;
      overflow-y: auto;
    `};
`;
