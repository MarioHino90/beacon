import React from "react";

import { TableCellProps } from "./types";
import { StyledTableCell } from "./StyledTableCell";

export const TableCell = React.forwardRef(
  (
    {
      textAlign = "left",
      truncation = "wrap",
      maxWidth,
      style,
      ...props
    }: TableCellProps,
    ref: React.RefObject<HTMLTableCellElement>
  ) => (
    <StyledTableCell
      {...props}
      ref={ref}
      textAlign={textAlign}
      truncation={truncation}
      style={{ ...style, ...(maxWidth !== undefined && { maxWidth }) }}
    />
  )
);

TableCell.displayName = "TableCell";
