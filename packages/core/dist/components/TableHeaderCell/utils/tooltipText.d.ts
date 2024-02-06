import { I18nT } from "@braze/beacon-translations";
import { SortDirection, SortMessages } from "../types";
/**
 * Based on sorting state, retrieve the tooltip and aria-label for a header cell
 * @param t
 * @param columnName The column name to display in the tooltip and aria-label
 * @param sortDirection the current sort direction or `undefined` if unsorted
 * @param nextSortDirection the next sort direction that would happen if the header cell is selected
 * @param sortMessages customized messages for aria-label
 * @returns
 */
export declare const getSortByMessages: (t: I18nT<"beacon-table">, columnName: string, sortDirection: SortDirection, nextSortDirection: SortDirection, sortMessages?: SortMessages | undefined) => {
    tooltip: string;
    ariaLabel: string;
};
