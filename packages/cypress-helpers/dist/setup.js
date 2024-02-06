"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visualTest = exports.setupVisualTesting = exports.mountWithTheme = void 0;

require("@braze/beacon-fonts/Sailec.css");

require("./styles.css");

var _react = _interopRequireDefault(require("react"));

var _beaconStyling = _interopRequireDefault(require("@braze/beacon-styling"));

var _reactI18next = require("react-i18next");

var _beaconI18nDev = require("@braze/beacon-i18n-dev");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />
var setupVisualTesting = function setupVisualTesting(component) {
  beforeEach(function () {
    cy.eyesOpen({
      testName: Cypress.currentTest.titlePath.join(" - "),
      appName: "beacon",
      properties: [{
        name: "Component",
        value: component
      }]
    });
  });
  afterEach(function () {
    cy.eyesClose();
  });
};

exports.setupVisualTesting = setupVisualTesting;

var visualTest = function visualTest() {
  var _cy;

  (_cy = cy).eyesCheckWindow.apply(_cy, arguments);
};
/**
 * for component testing only.
 *
 * Requiring anything from `@cypress/react` will overwrite `cy.visit()` to throw
 * To allow visual testing setup to work in both component tests, and in integration tests,
 * this requires mount just-in-time
 */


exports.visualTest = visualTest;

var mountWithTheme = function mountWithTheme(children, options) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  var _require = require("@cypress/react"),
      mount = _require.mount;

  return mount( /*#__PURE__*/_react["default"].createElement(_reactI18next.I18nextProvider, {
    i18n: _beaconI18nDev.i18n
  }, /*#__PURE__*/_react["default"].createElement(_beaconStyling["default"], null, children)), options);
};

exports.mountWithTheme = mountWithTheme;