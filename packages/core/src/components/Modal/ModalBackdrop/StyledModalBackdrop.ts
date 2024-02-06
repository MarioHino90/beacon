import styled from "styled-components";

import { StyledModalBackdropProps } from "../types";

export const StyledModalBackdrop = styled.div<StyledModalBackdropProps>`
  opacity: 0.5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.zIndex};
  background-color: rgba(0, 0, 0, 0.9);
`;
