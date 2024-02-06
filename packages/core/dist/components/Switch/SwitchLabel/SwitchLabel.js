"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-switch-label", className)
  };
};

var SwitchLabel = _styledComponents["default"].div.attrs(getAttrs).withConfig({
  displayName: "SwitchLabel",
  componentId: "sc-1g0fb78-0"
})(["font-family:", ";font-weight:", ";font-size:", ";margin-left:", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), (0, _beaconStyling.getFontSize)("body", "md"), (0, _beaconStyling.getSpacing)("md"));

exports.SwitchLabel = SwitchLabel;
SwitchLabel.displayName = "SwitchLabel";