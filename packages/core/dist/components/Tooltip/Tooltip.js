"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTooltip = exports.Tooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _Popper = require("../Popper");

var _StyledTooltip = require("./StyledTooltip");

var _excluded = ["className", "children", "id", "placement", "style", "styledCss", "popperClassName", "popperId"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A function that abstracts the open/close logic of a tooltip component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the tooltip as its first element and the ref object to be passed to both the target and the tooltip
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
var useTooltip = _Popper.usePopper;
exports.useTooltip = useTooltip;

var Tooltip = function Tooltip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "bottom" : _ref$placement,
      style = _ref.style,
      styledCss = _ref.styledCss,
      popperClassName = _ref.popperClassName,
      popperId = _ref.popperId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_Popper.Popper, _extends({}, props, {
    className: popperClassName,
    id: popperId,
    placement: placement,
    tipVariant: "dark",
    role: "tooltip"
  }), /*#__PURE__*/_react["default"].createElement(_StyledTooltip.StyledTooltip, {
    className: className,
    id: id,
    style: style,
    styledCss: styledCss
  }, /*#__PURE__*/_react["default"].createElement("div", null, children)));
};

exports.Tooltip = Tooltip;