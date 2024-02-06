"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledModalBody = _styledComponents["default"].div.withConfig({
  displayName: "StyledModalBody",
  componentId: "sc-13ht26b-0"
})(["font-family:", ";font-weight:", ";font-size:", ";position:relative;flex:1 1 auto;overflow-y:scroll;"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getFontSize)("body", "md"));

exports.StyledModalBody = StyledModalBody;