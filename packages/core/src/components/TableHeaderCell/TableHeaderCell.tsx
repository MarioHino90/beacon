import React, { forwardRef, useCallback, useRef, useState } from "react";
import { useI18nNamespace } from "@braze/beacon-translations";
import { useId } from "@braze/beacon-hooks";

import { Tooltip, useTooltip } from "../Tooltip";

import { SortIcon } from "./SortIcon";
import { StyledTableHeaderCell } from "./StyledTableHeaderCell";
import { getSortByMessages } from "./utils/tooltipText";
import { TableHeaderCellProps, SortDirection } from "./types";

/**
 * Given the current sort direction, return what the next one would be
 * @param sortDirection "asc", "desc" or undefined for no sort
 * @param order whether desc or asc should be first when transitioning from unsorted to sorted, represented as ["desc", "asc"] or ["asc", "desc"]
 */
const nextDirection = (
  sortDirection: SortDirection,
  firstSortDirection: "desc" | "asc"
): SortDirection => {
  if (!sortDirection) {
    return firstSortDirection;
  }

  if (sortDirection === firstSortDirection) {
    return firstSortDirection === "desc" ? "asc" : "desc";
  }

  return firstSortDirection;
};

const sortDirectionIcons = {
  asc: "sort-up",
  desc: "sort-down",
} as const;

const getIconName = (
  sortDirection: SortDirection,
  nextSortDirection: SortDirection,
  hovering: boolean
): typeof sortDirectionIcons[keyof typeof sortDirectionIcons] | "sort" => {
  if (sortDirection) {
    return sortDirectionIcons[sortDirection];
  }

  // we are unsorted, let's return the next sort direction on hover
  if (hovering) {
    if (nextSortDirection) {
      return sortDirectionIcons[nextSortDirection];
    }
  }

  // unsorted, not hovering, return the generic "unsorted" icon
  return "sort";
};

const ariaSort = {
  asc: "ascending",
  desc: "descending",
  none: undefined,
} as const;

export const TableHeaderCell = forwardRef(
  (
    {
      sortDirection,
      children,
      sortTooltipPlacement = "auto",
      firstSortDirection = "desc",
      columnName,
      sortMessages,
      onClick,
      ...props
    }: TableHeaderCellProps,
    ref: React.RefObject<HTMLTableCellElement>
  ): React.ReactElement => {
    const [hovering, setHovering] = useState(false);
    const nextSortDirection = nextDirection(sortDirection, firstSortDirection);
    const tooltipId = useId("header-tooltip");
    const buttonRef = useRef<HTMLButtonElement>(null);
    const headerRef = useRef<HTMLTableCellElement>(null);
    const [tooltipState, targetRef] = useTooltip<HTMLTableCellElement>(
      ref || headerRef
    );

    const { t } = useI18nNamespace("beacon-table");

    const sortBy = getSortByMessages(
      t,
      typeof children === "string" ? children : columnName || "",
      sortDirection,
      nextSortDirection,
      sortMessages
    );

    const handleMouseUp = useCallback(() => {
      buttonRef.current?.blur();
    }, []);

    // TODO: based on https://adrianroselli.com/2021/04/sortable-table-columns.html choose a way to implement
    // full screen reader compatibility. First step is bringing <ScreenReaderText> to beacon
    return (
      <StyledTableHeaderCell
        {...props}
        onClick={onClick}
        forwardedAs="th"
        ref={targetRef}
        aria-sort={onClick ? ariaSort[sortDirection || "none"] : undefined}
        data-sortable={onClick ? true : undefined}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {onClick ? (
          <>
            <button
              type="button"
              onMouseUp={handleMouseUp}
              // onKeyUp={handleBlurAfter}
              ref={buttonRef}
              aria-label={sortBy.ariaLabel}
              aria-live="polite"
            >
              {children}
            </button>

            <SortIcon
              sortDirection={sortDirection}
              aria-hidden
              inactive={sortDirection && true}
              name={getIconName(sortDirection, nextSortDirection, hovering)}
            />
            <Tooltip
              {...tooltipState}
              targetRef={targetRef}
              placement={sortTooltipPlacement}
              id={tooltipId}
            >
              {sortBy.tooltip}
            </Tooltip>
          </>
        ) : (
          children
        )}
      </StyledTableHeaderCell>
    );
  }
);

TableHeaderCell.displayName = "TableHeaderCell";
