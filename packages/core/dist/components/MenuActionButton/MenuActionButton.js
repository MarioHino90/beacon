"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuActionButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

var _BodyText = require("../BodyText");

var _Flex = require("../Flex");

var _Icon = require("../Icon");

var _MenuButton = require("../MenuButton");

var _excluded = ["children", "className", "iconName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuActionButton = function MenuActionButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      iconName = _ref.iconName,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("li", {
    role: "menuitem"
  }, /*#__PURE__*/_react["default"].createElement(_MenuButton.MenuButton, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-menu-action-button", className]),
    "aria-label": typeof children === "string" ? children.toLowerCase() : undefined
  }), iconName && /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    style: {
      minWidth: 32
    },
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: iconName,
    color: (0, _beaconStyling.getColor)("gray", 600),
    size: "1x"
  })), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
    size: "md"
  }, children)));
};

exports.MenuActionButton = MenuActionButton;
MenuActionButton.displayName = "MenuActionButton";