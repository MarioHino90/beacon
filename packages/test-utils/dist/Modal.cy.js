"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalHeader = exports.modalFooter = exports.modalDialog = exports.modalContent = exports.modalChildren = exports.modalBody = exports.modal = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _CloseButton = require("./CloseButton.cy");

var modalFooter = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-modal-footer");
  },
  children: {}
});
exports.modalFooter = modalFooter;
var modalHeader = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-modal-header");
  },
  children: {}
});
exports.modalHeader = modalHeader;
var modalBody = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-modal-body");
  },
  children: {}
});
exports.modalBody = modalBody;
var modalContent = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-modal-content");
  },
  children: {
    closeButton: _CloseButton.closeButton,
    footer: modalFooter,
    header: modalHeader,
    body: modalBody
  }
});
exports.modalContent = modalContent;
var modalDialog = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-modal-dialog");
  },
  children: {
    closeButton: _CloseButton.closeButton,
    content: modalContent,
    footer: modalFooter,
    header: modalHeader,
    body: modalBody
  }
});
exports.modalDialog = modalDialog;
var modalChildren = (0, _cypressUtils.extractDeclaration)({
  closeButton: _CloseButton.closeButton,
  dialog: modalDialog,
  content: modalContent,
  footer: modalFooter,
  header: modalHeader,
  body: modalBody,
  backdrop: function backdrop() {
    return cy.get(".bcl-modal-backdrop");
  }
});
exports.modalChildren = modalChildren;
var modal = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-modal");
  },
  children: modalChildren
});
exports.modal = modal;