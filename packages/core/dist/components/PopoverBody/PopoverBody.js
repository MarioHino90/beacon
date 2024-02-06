"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])("bcl-popover-body", className)
  };
};

var PopoverBody = _styledComponents["default"].div.attrs(getAttrs).withConfig({
  displayName: "PopoverBody",
  componentId: "sc-1fdmztn-0"
})(["font-family:", ";font-weight:", ";"], (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"));

exports.PopoverBody = PopoverBody;