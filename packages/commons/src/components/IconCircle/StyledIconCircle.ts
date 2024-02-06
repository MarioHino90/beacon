import styled from "styled-components";
import { intentColorSelector } from "@braze/beacon-styling";
import { StyledIcon } from "@braze/beacon-core";

import { StyledIconCircleProps } from "./types";

export const StyledIconCircle = styled.div<StyledIconCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => intentColorSelector(props, props.intent, 100)};
  min-width: 28px;
  min-height: 28px;
  max-width: 28px;
  max-height: 28px;
  border-radius: 50%;

  ${StyledIcon} {
    color: ${(props) => intentColorSelector(props, props.intent, 500)};
    font-size: 1rem;
  }
`;
