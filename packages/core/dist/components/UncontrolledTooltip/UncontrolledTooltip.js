"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UncontrolledTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = require("../Tooltip");

var _excluded = ["children", "targetRef", "className", "label"];

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

var UncontrolledTooltip = function UncontrolledTooltip(_ref) {
  var children = _ref.children,
      targetRef = _ref.targetRef,
      className = _ref.className,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  // tooltip controls
  var _useTooltip = (0, _Tooltip.useTooltip)(targetRef),
      _useTooltip2 = _slicedToArray(_useTooltip, 2),
      state = _useTooltip2[0],
      ref = _useTooltip2[1]; // throw error if more than one child found


  if (_react["default"].Children.count(children) > 1) {
    throw new Error("ERROR: You can only use `UncontrolledTooltip` with a single child. If you need multiple child elements to be present, please wrap them all in a single HTML element.");
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].cloneElement(child, {
      ref: ref
    });
  }), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({}, props, state, {
    targetRef: ref,
    className: (0, _classnames["default"])(["bcl-uncontrolled-tooltip", className])
  }), label));
};

exports.UncontrolledTooltip = UncontrolledTooltip;