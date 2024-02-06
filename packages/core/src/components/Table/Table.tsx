import React from "react";
import classNames from "classnames";

import { TableProps } from "./types";
import { StyledTable } from "./StyledTable";

export const Table = React.forwardRef(
  (
    { className, interactive = true, ...props }: TableProps,
    ref: React.RefObject<HTMLTableElement>
  ) => (
    <StyledTable
      {...props}
      ref={ref}
      interactive={interactive}
      className={classNames(["bcl-Table", "bcl-table", className])}
    />
  )
);

Table.displayName = "Table";
