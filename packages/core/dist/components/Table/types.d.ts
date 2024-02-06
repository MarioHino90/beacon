/// <reference types="react" />
import { SizeType } from "../../services/getSizeSpacing";
export interface StyledTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    /** indicates that the table should span the full width of the available area */
    fullWidth?: boolean;
    /** spacing for the cells in the table */
    size?: SizeType;
    /** indicates if there should be a vertical rule between the cells */
    verticalRule?: boolean;
    /** indicates if the table content is interactive */
    interactive?: boolean;
}
export interface TableProps extends StyledTableProps {
}
