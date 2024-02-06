"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Flex = require("../Flex");

var _HelpText = require("../HelpText");

var _StatusText = require("../StatusText");

var _RadioLabel = require("./RadioLabel");

var _StyledRadioButton = require("./StyledRadioButton");

var _excluded = ["children", "id", "containerClassName", "checked", "disabled", "errorText", "helpText", "helpTextClassName", "invalid", "invalidRadioOnly", "label", "labelClassName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RadioButton = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      id = _ref.id,
      containerClassName = _ref.containerClassName,
      checked = _ref.checked,
      disabled = _ref.disabled,
      errorText = _ref.errorText,
      helpText = _ref.helpText,
      helpTextClassName = _ref.helpTextClassName,
      invalid = _ref.invalid,
      invalidRadioOnly = _ref.invalidRadioOnly,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      props = _objectWithoutProperties(_ref, _excluded);

  var fakeId = (0, _react.useRef)("radio-button-".concat(Math.floor(Math.random() * 1000000000)));
  var activeId = id || fakeId.current;
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_StyledRadioButton.StyledRadioButton, {
    className: (0, _classnames["default"])("bcl-radio-button", containerClassName)
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({}, props, {
    ref: ref,
    type: "radio",
    id: activeId,
    checked: checked,
    disabled: disabled
  })), (children || label) && /*#__PURE__*/_react["default"].createElement(_RadioLabel.RadioLabel, {
    htmlFor: activeId,
    checked: checked,
    className: labelClassName,
    invalid: invalid,
    disabled: disabled
  }, children || label)), helpText && (!invalid || invalidRadioOnly) && /*#__PURE__*/_react["default"].createElement(_HelpText.HelpText, {
    className: helpTextClassName,
    disabled: disabled
  }, helpText), invalid && errorText && !invalidRadioOnly && /*#__PURE__*/_react["default"].createElement(_StatusText.StatusText, null, errorText));
});

exports.RadioButton = RadioButton;
RadioButton.displayName = "RadioButton";