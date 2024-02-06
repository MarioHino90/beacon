"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabelInfoIconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../Icon");

var _StyledFieldLabelInfoIconButton = require("./StyledFieldLabelInfoIconButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FieldLabelInfoIconButton = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledFieldLabelInfoIconButton.StyledFieldLabelInfoIconButton, _extends({}, props, {
    type: "button",
    ref: ref,
    style: {
      zIndex: 1
    },
    className: "bcl-field-label-info-icon-button"
  }), /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "info-circle"
  }));
});

exports.FieldLabelInfoIconButton = FieldLabelInfoIconButton;
FieldLabelInfoIconButton.displayName = "FieldLabelInfoIconButton";