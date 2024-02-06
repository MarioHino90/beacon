import { SizeType } from "../../services/getSizeSpacing";

export interface StyledTableCellProps<
  E = HTMLTableCellElement,
  C extends React.ElementType = "td"
> extends React.TableHTMLAttributes<E> {
  /** component / HTML tag to render component as instead of default */
  as?: C;
  /** spacing for the cell */
  size?: SizeType;
  /** text alignment within the cell */
  textAlign?: "center" | "left" | "right";
  /** indicates what kind of truncation to apply to the table cell */
  truncation?: "ellipsis" | "wrap" | "force-wrap";
}

export interface TableCellProps<E = HTMLTableCellElement>
  extends StyledTableCellProps<E> {
  /** number of columns spanned by the cell */
  colSpan?: number;
  /** number of rows spanned by the cell */
  rowSpan?: number;
  /** maximum width to apply to cell */
  maxWidth?: number | string;
}
