"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loremIpsum = void 0;

var loremIpsum = function loremIpsum() {
  return cy.get(".bcl-lorem-ipsum");
};

exports.loremIpsum = loremIpsum;