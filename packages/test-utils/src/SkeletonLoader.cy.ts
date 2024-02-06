import { extractDeclaration } from "@braze/cypress-utils";

export const skeletonLoader = extractDeclaration({
  skeleton: () => cy.get(".bcl-skeleton-loader"),
  imageSkeleton: () => cy.get(".bcl-skeleton-loader-image"),
  imageRoundSkeleton: () => cy.get(".bcl-skeleton-loader-image-round"),
  checkboxSkeleton: () => cy.get(".bcl-skeleton-loader-checkbox"),
  textSkeleton: () => cy.get(".bcl-skeleton-loader-text"),
});
