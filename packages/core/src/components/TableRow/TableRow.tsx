import React from "react";

import { TableRowProps } from "./types";
import { StyledTableRow } from "./StyledTableRow";

export const TableRow = React.forwardRef(
  (props: TableRowProps, ref: React.RefObject<HTMLTableRowElement>) => (
    <StyledTableRow {...props} ref={ref} />
  )
);

TableRow.displayName = "TableRow";
