"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuCategoryButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BodyText = require("../BodyText");

var _Box = require("../Box");

var _BrazeIcon = require("../BrazeIcon");

var _Flex = require("../Flex");

var _FlexBox = require("../FlexBox");

var _Heading = require("../Heading");

var _MenuButton = require("../MenuButton");

var _excluded = ["children", "className", "heading", "iconName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuCategoryButton = function MenuCategoryButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      heading = _ref.heading,
      iconName = _ref.iconName,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react["default"].createElement(_MenuButton.MenuButton, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-menu-category-button", className]),
    role: "menuitem",
    tabIndex: -1,
    "aria-label": typeof children === "string" ? children.toLowerCase() : undefined
  }), iconName && /*#__PURE__*/_react["default"].createElement(_FlexBox.FlexBox, {
    style: {
      minWidth: 32
    },
    justifyContent: "center",
    alignItems: "center",
    boxMargin: {
      right: "lg"
    }
  }, /*#__PURE__*/_react["default"].createElement(_BrazeIcon.BrazeIcon, {
    name: iconName
  })), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxMargin: {
      bottom: "xs"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Heading.Heading, {
    level: 5,
    variant: "light"
  }, heading)), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
    size: "sm"
  }, children))));
};

exports.MenuCategoryButton = MenuCategoryButton;
MenuCategoryButton.displayName = "MenuCategoryButton";