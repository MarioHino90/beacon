import styled from "styled-components";
import { getSpacing } from "@braze/beacon-styling";

import { StyledTableHeaderCell } from "../TableHeaderCell/StyledTableHeaderCell";
import { StyledTableRow } from "../TableRow/StyledTableRow";

import { StyledTableHeaderProps } from "./types";

export const StyledTableHeader = styled.thead<StyledTableHeaderProps>`
  ${StyledTableHeaderCell} {
    padding-top: ${getSpacing("xl")};
  }

  /* 
   * NOTE: added .bcl-tr temporarily to also cover 'TableRow' in beacon-labs without needing to 
   * further complicate things. when 'TableRow' in beacon-labs is merged here, the explicit 
   * class reference should be removed. -Hal
   */
  ${StyledTableRow}, .bcl-tr {
    border-top: none;

    :hover {
      background: none;
    }
  }
`;
