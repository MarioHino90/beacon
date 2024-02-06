"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonLoader = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var skeletonLoader = (0, _cypressUtils.extractDeclaration)({
  skeleton: function skeleton() {
    return cy.get(".bcl-skeleton-loader");
  },
  imageSkeleton: function imageSkeleton() {
    return cy.get(".bcl-skeleton-loader-image");
  },
  imageRoundSkeleton: function imageRoundSkeleton() {
    return cy.get(".bcl-skeleton-loader-image-round");
  },
  checkboxSkeleton: function checkboxSkeleton() {
    return cy.get(".bcl-skeleton-loader-checkbox");
  },
  textSkeleton: function textSkeleton() {
    return cy.get(".bcl-skeleton-loader-text");
  }
});
exports.skeletonLoader = skeletonLoader;