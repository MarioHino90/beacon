/// <reference types="@testing-library/cypress" />
import { extractSelector } from "@braze/cypress-utils";

export const tableHeaderCells = extractSelector({
  self: () => cy.get(".bcl-th"),
  children: {},
});

export const tableHeaderCell = extractSelector({
  self: (ind: number) => cy.get(`.bcl-th:nth-child(${ind})`),
  needsParams: true,
  children: {
    button: () => cy.get("button"),
    sortIcon: {
      self: () => cy.get(".bcl-sort-icon"),
      children: {
        icon: () => cy.get("svg"),
      },
    },
  },
});

export const tableCells = extractSelector({
  self: () => cy.get(".bcl-td"),
  children: {},
});

export const tableCell = extractSelector({
  self: (ind: number) => cy.get(`.bcl-td:nth-child(${ind})`),
  needsParams: true,
  children: {},
});

export const tableRows = extractSelector({
  self: () => cy.get(".bcl-tr"),
  children: {
    cells: tableCells,
    cell: tableCell,
    headerCells: tableHeaderCells,
    headerCell: tableHeaderCell,
  },
});

export const tableRow = extractSelector({
  self: (ind: number) => cy.get(`.bcl-tr:nth-child(${ind})`),
  needsParams: true,
  children: {
    cells: tableCells,
    cell: tableCell,
    headerCells: tableHeaderCells,
    headerCell: tableHeaderCell,
  },
});

export const tableHeader = extractSelector({
  self: () => cy.get(".bcl-thead"),
  children: {
    rows: tableRows,
    row: tableRow,
    cells: tableCells,
    cell: tableHeaderCell,
  },
});

export const tableBody = extractSelector({
  self: () => cy.get(".bcl-tbody"),
  children: {
    rows: tableRows,
    row: tableRow,
    cells: tableCells,
    cell: tableCell,
  },
});

export const table = extractSelector({
  self: () => cy.get(".bcl-table"),
  children: {
    heading: tableHeader,
    body: tableBody,
    rows: tableRows,
    row: tableRow,
    cells: tableCells,
    cell: tableCell,
    headerCells: tableHeaderCells,
    headerCell: tableHeaderCell,
  },
});
