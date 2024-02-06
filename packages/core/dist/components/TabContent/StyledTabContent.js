"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTabContent = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @fileoverview the styled tab content container
 */
var StyledTabContent = _styledComponents["default"].div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(className, "bcl-tab-content")
  };
}).withConfig({
  displayName: "StyledTabContent",
  componentId: "sc-1vndvjq-0"
})(["margin:", " 0;"], (0, _beaconStyling.getSpacing)("xl"));

exports.StyledTabContent = StyledTabContent;