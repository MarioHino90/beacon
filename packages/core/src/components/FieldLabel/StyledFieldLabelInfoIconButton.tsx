import { getIntentColor, getColor, getSpacing } from "@braze/beacon-styling";
import styled from "styled-components";

import { StyledFieldLabelInfoIconButtonProps } from "./types";

export const StyledFieldLabelInfoIconButton = styled.button<StyledFieldLabelInfoIconButtonProps>`
  margin-left: ${getSpacing("xs")};
  font-size: 0.8em;
  cursor: pointer;
  color: ${({ variant }: StyledFieldLabelInfoIconButtonProps) =>
    variant === "muted"
      ? getColor("gray", 600)
      : getIntentColor("primary", 500)};
`;
