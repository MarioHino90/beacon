"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxLabel = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Label = require("../../Label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(className, "bcl-checkbox-label")
  };
};

var CheckboxLabel = (0, _styledComponents["default"])(_Label.Label).attrs(getAttrs).withConfig({
  displayName: "CheckboxLabel",
  componentId: "sc-1fzxqrg-0"
})(["margin-left:", ";font-family:", ";font-weight:", ";cursor:", ";"], (0, _beaconStyling.getSpacing)("sm"), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontWeight)("regular"), function (props) {
  return props.disabled ? "no-drop" : "pointer";
});
exports.CheckboxLabel = CheckboxLabel;
CheckboxLabel.displayName = "CheckboxLabel";