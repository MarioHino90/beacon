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
export const getSortByMessages = (
  t: I18nT<"beacon-table">,
  columnName: string,
  sortDirection: SortDirection,
  nextSortDirection: SortDirection,
  sortMessages?: SortMessages
): { tooltip: string; ariaLabel: string } => {
  if (sortMessages) {
    switch (sortDirection) {
      case "asc":
        return {
          tooltip: t("sorted-tooltip-asc", "Sorted ascending"),
          ariaLabel: sortMessages.asc,
        };
      case "desc":
        return {
          tooltip: t("sorted-tooltip-desc", "Sorted descending"),
          ariaLabel: sortMessages.desc,
        };
      default: {
        if (nextSortDirection === "asc") {
          return {
            tooltip: t("sort-tooltip-asc", "Unsorted, Sort ascending"),
            ariaLabel: sortMessages.none,
          };
        }

        return {
          tooltip: t("sort-tooltip-desc", "Unsorted, Sort descending"),
          ariaLabel: sortMessages.none,
        };
      }
    }
  }

  switch (sortDirection) {
    case "asc":
      return {
        tooltip: t("sorted-tooltip-asc", "Sorted ascending"),
        ariaLabel: t(
          "sorted-aria-label-asc",
          "Sorted column { columnName } ascending. " +
            "{nextSortDirection, select, desc {Select to sort descending} asc {Select to remove sort} other {Select to remove sort}}",
          {
            columnName,
            nextSortDirection: nextSortDirection as "desc" | "asc",
          }
        ),
      };
    case "desc":
      return {
        tooltip: t("sorted-tooltip-desc", "Sorted descending"),
        ariaLabel: t(
          "sorted-aria-label-desc",
          "Sorted column { columnName } descending. " +
            "{nextSortDirection, select, asc {Select to sort ascending} desc {Select to remove sort} other {Select to remove sort}}",
          {
            columnName,
            nextSortDirection: nextSortDirection as "desc" | "asc",
          }
        ),
      };
    default:
      if (nextSortDirection === "asc") {
        return {
          tooltip: t("sort-tooltip-asc", "Unsorted, Sort ascending"),
          ariaLabel: t(
            "sort-aria-label-asc",
            "Column { columnName }. Select to sort ascending",
            { columnName }
          ),
        };
      }

      return {
        tooltip: t("sort-tooltip-desc", "Unsorted, Sort descending"),
        ariaLabel: t(
          "sort-aria-label-desc",
          "Column { columnName }. Select to sort descending",
          { columnName }
        ),
      };
  }
};
