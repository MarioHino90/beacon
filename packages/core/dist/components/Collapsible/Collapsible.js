"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapsible = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CollapsibleContext = require("../CollapsibleContext");

var _StyledCollapsible = require("./StyledCollapsible");

var _excluded = ["className", "isOpen", "toggle", "alignment"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collapsible = function Collapsible(_ref) {
  var className = _ref.className,
      isOpen = _ref.isOpen,
      toggle = _ref.toggle,
      _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? "left" : _ref$alignment,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_CollapsibleContext.CollapsibleContextProvider, {
    isOpen: isOpen,
    toggle: toggle
  }, /*#__PURE__*/_react["default"].createElement(_StyledCollapsible.StyledCollapsible, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-collapsible", className]),
    alignment: alignment
  })));
};

exports.Collapsible = Collapsible;
Collapsible.displayName = "Collapsible";