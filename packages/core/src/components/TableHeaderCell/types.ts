import { TooltipProps } from "../Tooltip";
import { TableCellProps } from "../TableCell";
import { IconProps } from "../Icon";

export type SortDirection = "asc" | "desc" | undefined | false;

export type SortDirectionOrder = ["asc", "desc"] | ["desc", "asc"];

export interface SortIconProps extends IconProps {
  /** whether the sort is inactive (no sorting on the column) */
  inactive?: boolean;
  /** the next sort direction if the heading is clicked */
  sortDirection: SortDirection;
}

export interface SortMessages {
  /** message to display in aria-label for screen readers when the column is sorted in ascending order */
  asc: string;
  /** message to display in aria-label for screen readers when the column is sorted in descending order */
  desc: string;
  /** message to display in aria-label for screen readers when the column is not sorted */
  none: string;
}

export interface StyledTableHeaderCellProps
  extends TableCellProps,
    React.TableHTMLAttributes<HTMLTableCellElement> {}

export interface TableHeaderCellProps extends StyledTableHeaderCellProps {
  /** indicates how the heading cell is being used */
  scope?: "row" | "col" | "rowgroup" | "colgroup";
  /** direction this column should display it is being sorted */
  sortDirection?: SortDirection;
  /** the order sorting direction should toggle. By default, it is ["desc", "asc"] */
  firstSortDirection?: "desc" | "asc";
  /** message to display for sorting ascending */
  sortMessages?: SortMessages;
  /** placement for the tooltip, default is "bottom" */
  sortTooltipPlacement?: TooltipProps["placement"];
  /** column name, used for aria-label, and only needed if the children are a React component */
  columnName?: string;
}
