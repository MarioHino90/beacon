import React from "react";
import classNames from "classnames";

import { TableHeaderProps } from "./types";
import { StyledTableHeader } from "./StyledTableHeader";

export const TableHeader = React.forwardRef(
  (
    { className, ...props }: TableHeaderProps,
    ref: React.RefObject<HTMLTableSectionElement>
  ) => (
    <StyledTableHeader
      {...props}
      ref={ref}
      className={classNames(["bcl-thead", className])}
    />
  )
);

TableHeader.displayName = "TableHeader";
