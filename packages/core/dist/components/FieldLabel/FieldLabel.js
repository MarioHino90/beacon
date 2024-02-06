"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Flex = require("../Flex");

var _HelpText = require("../HelpText");

var _StatusText = require("../StatusText");

var _FieldLabelInfoIconAndPopover = require("./FieldLabelInfoIconAndPopover");

var _StyledFieldLabel = require("./StyledFieldLabel");

var _FieldLabelEnforceText = require("./FieldLabelEnforceText");

var _excluded = ["children", "className", "enforce", "formatLabel", "helpText", "label", "status", "statusText", "boxProps", "infoIconVariant", "infoIconPopoverContent", "infoIconTriggerVariant", "controlRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      enforce = _ref.enforce,
      formatLabel = _ref.formatLabel,
      helpText = _ref.helpText,
      label = _ref.label,
      status = _ref.status,
      statusText = _ref.statusText,
      boxProps = _ref.boxProps,
      _ref$infoIconVariant = _ref.infoIconVariant,
      infoIconVariant = _ref$infoIconVariant === void 0 ? "primary" : _ref$infoIconVariant,
      infoIconPopoverContent = _ref.infoIconPopoverContent,
      _ref$infoIconTriggerV = _ref.infoIconTriggerVariant,
      infoIconTriggerVariant = _ref$infoIconTriggerV === void 0 ? "hover" : _ref$infoIconTriggerV,
      controlRef = _ref.controlRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var controlRefIfNoRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var el = document.getElementById(props.htmlFor || "");

    if (el) {
      controlRefIfNoRef.current = el;
    }
  }, [props.htmlFor]);
  return /*#__PURE__*/_react["default"].createElement(_StyledFieldLabel.CustomBox, _extends({
    boxMargin: {
      bottom: "lg"
    }
  }, boxProps, {
    className: (0, _classnames["default"])(["bcl-field-label-container", boxProps === null || boxProps === void 0 ? void 0 : boxProps.className])
  }), label && /*#__PURE__*/_react["default"].createElement(_StyledFieldLabel.StyledFieldLabel, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-FieldLabel", "bcl-field-label", className])
  }), formatLabel ? formatLabel({
    label: label
  }) : label, /*#__PURE__*/_react["default"].createElement(_FieldLabelEnforceText.FieldLabelEnforceText, {
    enforce: enforce
  }), /*#__PURE__*/_react["default"].createElement(_FieldLabelInfoIconAndPopover.FieldLabelInfoIconAndPopover, {
    helpIconPopoverContent: infoIconPopoverContent,
    infoIconVariant: infoIconVariant,
    infoIconTriggerVariant: infoIconTriggerVariant,
    controlRef: controlRef || controlRefIfNoRef
  })), /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    direction: "column"
  }, children, !status && helpText && /*#__PURE__*/_react["default"].createElement(_HelpText.HelpText, null, helpText), status && statusText && /*#__PURE__*/_react["default"].createElement(_StatusText.StatusText, {
    status: status
  }, statusText)));
};

exports.FieldLabel = FieldLabel;