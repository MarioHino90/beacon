"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndeterminatePolyline = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])(className, "bcl-indeterminate-polyline"),
    points: "4 12 20 12",
    "aria-hidden": true
  };
};

var IndeterminatePolyline = _styledComponents["default"].polyline.attrs(getAttrs).withConfig({
  displayName: "IndeterminatePolyline",
  componentId: "sc-1v4xkvt-0"
})(["display:", ";"], function (props) {
  return props.indeterminate ? "visible" : "none";
});

exports.IndeterminatePolyline = IndeterminatePolyline;
IndeterminatePolyline.displayName = "IndeterminatePolyline";