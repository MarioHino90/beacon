"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSortByMessages = void 0;

/**
 * Based on sorting state, retrieve the tooltip and aria-label for a header cell
 * @param t
 * @param columnName The column name to display in the tooltip and aria-label
 * @param sortDirection the current sort direction or `undefined` if unsorted
 * @param nextSortDirection the next sort direction that would happen if the header cell is selected
 * @param sortMessages customized messages for aria-label
 * @returns
 */
var getSortByMessages = function getSortByMessages(t, columnName, sortDirection, nextSortDirection, sortMessages) {
  if (sortMessages) {
    switch (sortDirection) {
      case "asc":
        return {
          tooltip: t("sorted-tooltip-asc", "Sorted ascending"),
          ariaLabel: sortMessages.asc
        };

      case "desc":
        return {
          tooltip: t("sorted-tooltip-desc", "Sorted descending"),
          ariaLabel: sortMessages.desc
        };

      default:
        {
          if (nextSortDirection === "asc") {
            return {
              tooltip: t("sort-tooltip-asc", "Unsorted, Sort ascending"),
              ariaLabel: sortMessages.none
            };
          }

          return {
            tooltip: t("sort-tooltip-desc", "Unsorted, Sort descending"),
            ariaLabel: sortMessages.none
          };
        }
    }
  }

  switch (sortDirection) {
    case "asc":
      return {
        tooltip: t("sorted-tooltip-asc", "Sorted ascending"),
        ariaLabel: t("sorted-aria-label-asc", "Sorted column { columnName } ascending. " + "{nextSortDirection, select, desc {Select to sort descending} other {Select to remove sort}}", {
          columnName: columnName,
          nextSortDirection: nextSortDirection === "desc" ? nextSortDirection : "other"
        })
      };

    case "desc":
      return {
        tooltip: t("sorted-tooltip-desc", "Sorted descending"),
        ariaLabel: t("sorted-aria-label-desc", "Sorted column { columnName } descending. " + "{nextSortDirection, select, asc {Select to sort ascending} other {Select to remove sort}}", {
          columnName: columnName,
          nextSortDirection: nextSortDirection === "asc" ? nextSortDirection : "other"
        })
      };

    default:
      if (nextSortDirection === "asc") {
        return {
          tooltip: t("sort-tooltip-asc", "Unsorted, Sort ascending"),
          ariaLabel: t("sort-aria-label-asc", "Column { columnName }. Select to sort ascending", {
            columnName: columnName
          })
        };
      }

      return {
        tooltip: t("sort-tooltip-desc", "Unsorted, Sort descending"),
        ariaLabel: t("sort-aria-label-desc", "Column { columnName }. Select to sort descending", {
          columnName: columnName,
          nextSortDirection: nextSortDirection
        })
      };
  }
};

exports.getSortByMessages = getSortByMessages;