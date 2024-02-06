"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.individualIcons = exports.brazeIcon = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var individualIcons = (0, _cypressUtils.extractDeclaration)({
  "add-document": function addDocument() {
    return cy.get("svg.bcl-add-document");
  },
  "add-image-or-document": function addImageOrDocument() {
    return cy.get("svg.bcl-add-image-or-document");
  },
  "arrow-toggle": function arrowToggle() {
    return cy.get("svg.bcl-arrow-toggle-icon");
  },
  "campaign-comparison": function campaignComparison() {
    return cy.get("svg.bcl-campaign-comparison");
  },
  content: function content() {
    return cy.get("svg.bcl-content-icon");
  },
  "email-settings": function emailSettings() {
    return cy.get("svg.bcl-email-settings-icon");
  },
  "empty-table": function emptyTable() {
    return cy.get("svg.bcl-empty-table-icon");
  },
  "funnel-report": function funnelReport() {
    return cy.get("svg.bcl-funnel-report");
  },
  mms: function mms() {
    return cy.get("svg.bcl-mms-icon");
  },
  preview: function preview() {
    return cy.get("svg.bcl-preview-icon");
  },
  "retention-report": function retentionReport() {
    return cy.get("svg.bcl-retention-report");
  },
  sms: function sms() {
    return cy.get("svg.bcl-sms-icon");
  }
});
exports.individualIcons = individualIcons;
var brazeIcon = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-braze-icon");
  },
  children: individualIcons
});
exports.brazeIcon = brazeIcon;