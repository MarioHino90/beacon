"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxIcon = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(className, "bcl-checkbox-icon"),
    viewBox: "0 0 24 24"
  };
};

var CheckboxIcon = _styledComponents["default"].svg.attrs(getAttrs).withConfig({
  displayName: "CheckboxIcon",
  componentId: "sc-zi8qw0-0"
})(["fill:none;stroke:white;stroke-width:3px;"]);

exports.CheckboxIcon = CheckboxIcon;
CheckboxIcon.displayName = "CheckboxIcon";