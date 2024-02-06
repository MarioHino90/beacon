"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../Icon");

var _Tooltip = require("../Tooltip");

var _StyledIconButton = require("./StyledIconButton");

var _excluded = ["children", "className", "disabled", "distance", "name", "aria-label", "placement", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconButton = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _React$Children$map$r, _React$Children$map, _React$Children$map2;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      distance = _ref.distance,
      name = _ref.name,
      ariaLabel = _ref["aria-label"],
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "bottom" : _ref$placement,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useTooltip = (0, _Tooltip.useTooltip)(ref, false, disabled),
      _useTooltip2 = _slicedToArray(_useTooltip, 2),
      tooltipState = _useTooltip2[0],
      targetRef = _useTooltip2[1];

  if (!ariaLabel && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn("WARNING: You have not provided an aria-label for this `IconButton`. In the next version of Beacon, an aria-label will be required for `IconButton`s.");
  }

  var allChildrenAreText = (_React$Children$map$r = (_React$Children$map = _react["default"].Children.map(children, function (child) {
    return typeof child === "string";
  })) === null || _React$Children$map === void 0 ? void 0 : _React$Children$map.reduce(function (x, y) {
    return x && y;
  })) !== null && _React$Children$map$r !== void 0 ? _React$Children$map$r : false;
  var childAriaLabel = allChildrenAreText ? (_React$Children$map2 = _react["default"].Children.map(children, function (child) {
    return typeof child === "string" ? child : undefined;
  })) === null || _React$Children$map2 === void 0 ? void 0 : _React$Children$map2.join("") : undefined;
  return /*#__PURE__*/_react["default"].createElement(_StyledIconButton.StyledIconButton, _extends({}, props, {
    type: type,
    ref: targetRef,
    className: (0, _classnames["default"])(["bcl-icon-button", className]),
    disabled: disabled,
    "aria-label": ariaLabel || childAriaLabel,
    "aria-haspopup": !disabled && _react["default"].Children.count(children) > 0
  }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: name,
    size: props.size === "sm" ? "1x" : props.size
  }), !disabled && children && /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({}, tooltipState, {
    targetRef: targetRef,
    placement: placement,
    distance: distance
  }), children));
});

exports.IconButton = IconButton;
IconButton.displayName = "IconButton";