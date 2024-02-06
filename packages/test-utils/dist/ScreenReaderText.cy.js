"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.screenReaderText = void 0;

var screenReaderText = function screenReaderText() {
  return cy.get(".bcl-screen-reader-text");
};

exports.screenReaderText = screenReaderText;