import { extractDeclaration, extractSelector } from "@braze/cypress-utils";

export const individualIcons = extractDeclaration({
  "add-document": () => cy.get("svg.bcl-add-document"),
  "add-image-or-document": () => cy.get("svg.bcl-add-image-or-document"),
  "arrow-toggle": () => cy.get("svg.bcl-arrow-toggle-icon"),
  "campaign-comparison": () => cy.get("svg.bcl-campaign-comparison"),
  content: () => cy.get("svg.bcl-content-icon"),
  "email-settings": () => cy.get("svg.bcl-email-settings-icon"),
  "empty-table": () => cy.get("svg.bcl-empty-table-icon"),
  "funnel-report": () => cy.get("svg.bcl-funnel-report"),
  mms: () => cy.get("svg.bcl-mms-icon"),
  preview: () => cy.get("svg.bcl-preview-icon"),
  "retention-report": () => cy.get("svg.bcl-retention-report"),
  sms: () => cy.get("svg.bcl-sms-icon"),
});

export const brazeIcon = extractSelector({
  self: () => cy.get(".bcl-braze-icon"),
  children: individualIcons,
});
