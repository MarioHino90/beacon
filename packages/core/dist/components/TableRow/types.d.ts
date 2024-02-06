/// <reference types="react" />
import { SizeType } from "../../services/getSizeSpacing";
export interface StyledTableRowProps<E = HTMLTableRowElement> extends React.TableHTMLAttributes<E> {
    /** spacing for the cells in the row */
    size?: SizeType;
}
export interface TableRowProps<E = HTMLTableRowElement> extends StyledTableRowProps<E> {
}
