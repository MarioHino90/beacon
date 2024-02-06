"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableRows = exports.tableRow = exports.tableHeaderCells = exports.tableHeaderCell = exports.tableHeader = exports.tableCells = exports.tableCell = exports.tableBody = exports.table = void 0;

var _cypressUtils = require("@braze/cypress-utils");

/// <reference types="@testing-library/cypress" />
var tableHeaderCells = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-th");
  },
  children: {}
});
exports.tableHeaderCells = tableHeaderCells;
var tableHeaderCell = (0, _cypressUtils.extractSelector)({
  self: function self(ind) {
    return cy.get(".bcl-th:nth-child(".concat(ind, ")"));
  },
  needsParams: true,
  children: {
    button: function button() {
      return cy.get("button");
    },
    sortIcon: {
      self: function self() {
        return cy.get(".bcl-sort-icon");
      },
      children: {
        icon: function icon() {
          return cy.get("svg");
        }
      }
    }
  }
});
exports.tableHeaderCell = tableHeaderCell;
var tableCells = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-td");
  },
  children: {}
});
exports.tableCells = tableCells;
var tableCell = (0, _cypressUtils.extractSelector)({
  self: function self(ind) {
    return cy.get(".bcl-td:nth-child(".concat(ind, ")"));
  },
  needsParams: true,
  children: {}
});
exports.tableCell = tableCell;
var tableRows = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-tr");
  },
  children: {
    cells: tableCells,
    cell: tableCell,
    headerCells: tableHeaderCells,
    headerCell: tableHeaderCell
  }
});
exports.tableRows = tableRows;
var tableRow = (0, _cypressUtils.extractSelector)({
  self: function self(ind) {
    return cy.get(".bcl-tr:nth-child(".concat(ind, ")"));
  },
  needsParams: true,
  children: {
    cells: tableCells,
    cell: tableCell,
    headerCells: tableHeaderCells,
    headerCell: tableHeaderCell
  }
});
exports.tableRow = tableRow;
var tableHeader = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-thead");
  },
  children: {
    rows: tableRows,
    row: tableRow,
    cells: tableCells,
    cell: tableHeaderCell
  }
});
exports.tableHeader = tableHeader;
var tableBody = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-tbody");
  },
  children: {
    rows: tableRows,
    row: tableRow,
    cells: tableCells,
    cell: tableCell
  }
});
exports.tableBody = tableBody;
var table = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-table");
  },
  children: {
    heading: tableHeader,
    body: tableBody,
    rows: tableRows,
    row: tableRow,
    cells: tableCells,
    cell: tableCell,
    headerCells: tableHeaderCells,
    headerCell: tableHeaderCell
  }
});
exports.table = table;