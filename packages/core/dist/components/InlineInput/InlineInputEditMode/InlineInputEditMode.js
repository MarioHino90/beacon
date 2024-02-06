"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInputEditMode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Box = require("../../Box");

var _Button = require("../../Button");

var _Flex = require("../../Flex");

var _Icon = require("../../Icon");

var _Input = require("../../Input");

var _UncontrolledTooltip = require("../../UncontrolledTooltip");

var _StyledInlineInputEditMode = require("./StyledInlineInputEditMode");

var _excluded = ["cancelButtonRef", "className", "inputId", "inputRef", "invalid", "onChange", "onSaveClick", "onCancelClick", "onClearClick", "saveButtonRef", "value", "vSize"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InlineInputEditMode = function InlineInputEditMode(_ref) {
  var cancelButtonRef = _ref.cancelButtonRef,
      className = _ref.className,
      inputId = _ref.inputId,
      inputRef = _ref.inputRef,
      invalid = _ref.invalid,
      onChange = _ref.onChange,
      onSaveClick = _ref.onSaveClick,
      onCancelClick = _ref.onCancelClick,
      onClearClick = _ref.onClearClick,
      saveButtonRef = _ref.saveButtonRef,
      value = _ref.value,
      _ref$vSize = _ref.vSize,
      vSize = _ref$vSize === void 0 ? "md" : _ref$vSize,
      props = _objectWithoutProperties(_ref, _excluded);

  var handleChange = (0, _react.useCallback)(function (event) {
    onChange === null || onChange === void 0 ? void 0 : onChange(event, "change");
  }, [onChange]);
  return /*#__PURE__*/_react["default"].createElement(_StyledInlineInputEditMode.StyledInlineInputEditMode, {
    className: (0, _classnames["default"])(["bcl-inline-input-edit-mode", className]),
    vSize: vSize,
    isValueDefined: !!value
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxMargin: {
      right: "sm"
    },
    className: "inline-input-container"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, _extends({}, props, {
    id: inputId,
    value: value,
    vSize: vSize,
    ref: inputRef,
    invalid: invalid,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    className: "inline-input-clear-icon",
    name: "times-circle",
    size: "1x",
    onClick: onClearClick
  })), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    className: "inline-input-button-container"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    inline: true,
    boxMargin: {
      right: "sm"
    }
  }, /*#__PURE__*/_react["default"].createElement(_UncontrolledTooltip.UncontrolledTooltip, {
    label: "Save",
    targetRef: saveButtonRef
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "inline-input-save-button",
    variant: "primary",
    onClick: onSaveClick,
    disabled: invalid
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "check"
  })))), /*#__PURE__*/_react["default"].createElement(_UncontrolledTooltip.UncontrolledTooltip, {
    label: "Cancel",
    targetRef: cancelButtonRef
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "inline-input-cancel-button",
    variant: "secondary",
    onClick: onCancelClick,
    disabled: invalid
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "times"
  }))))));
};

exports.InlineInputEditMode = InlineInputEditMode;
InlineInputEditMode.displayName = "InlineInputEditMode";