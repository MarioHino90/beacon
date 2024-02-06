import styled from "styled-components";
import { getSpacing } from "@braze/beacon-styling";

import { StyledCloseButton } from "../../CloseButton";

export const StyledToastCloseButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${getSpacing("md")};

  ${StyledCloseButton} {
    height: inherit;
    width: inherit;

    &,
    &:hover {
      background: none;
    }
  }
`;
