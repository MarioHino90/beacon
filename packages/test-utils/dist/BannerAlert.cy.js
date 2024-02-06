"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untransitionedBannerAlert = exports.bannerAlertLink = exports.bannerAlertIcon = exports.bannerAlertBodyChildren = exports.bannerAlertBody = exports.bannerAlertAccordion = exports.bannerAlert = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _Icon = require("./Icon.cy");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bannerAlertIcon = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-banner-alert-icon");
  },
  children: {
    icon: _Icon.icon
  }
});
exports.bannerAlertIcon = bannerAlertIcon;

var bannerAlertLink = function bannerAlertLink() {
  return cy.get(".bcl-banner-alert-link");
};

exports.bannerAlertLink = bannerAlertLink;
var bannerAlertAccordionChildren = (0, _cypressUtils.extractDeclaration)({
  header: function header() {
    return cy.get(".bcl-banner-alert-accordion-header");
  },
  body: function body() {
    return cy.get(".bcl-banner-alert-accordion-body");
  },
  footer: {
    self: function self() {
      return cy.get(".bcl-banner-alert-accordion-footer");
    },
    children: {
      action: function action() {
        return cy.get(".bcl-banner-alert-action");
      }
    }
  }
});
var bannerAlertAccordion = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-banner-alert-accordion");
  },
  children: bannerAlertAccordionChildren
});
exports.bannerAlertAccordion = bannerAlertAccordion;
var bannerAlertBodyChildren = (0, _cypressUtils.extractDeclaration)({
  icon: {
    self: function self() {
      return cy.get(".bcl-banner-alert-body-icon");
    },
    children: {
      bannerAlertIcon: bannerAlertIcon
    }
  },
  content: {
    self: function self() {
      return cy.get(".bcl-banner-alert-body-children-wrapper");
    },
    children: {
      title: function title() {
        return cy.get(".bcl-banner-alert-title");
      },
      description: {
        self: function self() {
          return cy.get(".bcl-banner-alert-description");
        },
        children: {
          text: function text() {
            return cy.get(".bcl-banner-alert-description-text");
          },
          link: bannerAlertLink
        }
      },
      link: bannerAlertLink,
      accordion: bannerAlertAccordion
    }
  }
});
exports.bannerAlertBodyChildren = bannerAlertBodyChildren;
var bannerAlertBody = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-banner-alert-body");
  },
  children: _objectSpread(_objectSpread({}, bannerAlertBodyChildren), {}, {
    innerBody: {
      self: function self() {
        return cy.get(".bcl-banner-alert-inner-body");
      },
      children: bannerAlertBodyChildren
    },
    close: {
      self: function self() {
        return cy.get(".bcl-banner-alert-close");
      },
      children: {
        icon: _Icon.icon
      }
    }
  })
});
exports.bannerAlertBody = bannerAlertBody;
var bannerAlert = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-banner-alert-transition");
  },
  children: {
    body: bannerAlertBody
  }
});
exports.bannerAlert = bannerAlert;
var untransitionedBannerAlert = (0, _cypressUtils.extractSelector)({
  self: function self() {
    return cy.get(".bcl-banner-alert-untransitioned");
  },
  children: {
    body: bannerAlertBody
  }
});
exports.untransitionedBannerAlert = untransitionedBannerAlert;