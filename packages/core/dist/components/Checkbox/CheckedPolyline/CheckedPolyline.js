"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckedPolyline = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(className, "bcl-checked-polyline"),
    points: "20 6 9 17 4 12"
  };
};

var CheckedPolyline = _styledComponents["default"].polyline.attrs(getAttrs).withConfig({
  displayName: "CheckedPolyline",
  componentId: "sc-184a8nl-0"
})(["display:", ";"], function (props) {
  return props.checked && !props.indeterminate ? "visible" : "none";
});

exports.CheckedPolyline = CheckedPolyline;
CheckedPolyline.displayName = "CheckedPolyline";