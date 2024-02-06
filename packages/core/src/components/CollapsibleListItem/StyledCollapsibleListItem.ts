import styled from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledCollapsibleListItemProps } from "./types";

export const StyledCollapsibleListItem = styled.li<StyledCollapsibleListItemProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "md")};
`;
