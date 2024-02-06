import styled from "styled-components";
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledModalBodyProps } from "./types";

export const StyledModalBody = styled.div<StyledModalBodyProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "md")};
  position: relative;
  flex: 1 1 auto;
  overflow-y: auto;
`;
