"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconHooks = require("@braze/beacon-hooks");

var _StyledTextarea = require("./StyledTextarea");

var _excluded = ["vSize", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$vSize = _ref.vSize,
      vSize = _ref$vSize === void 0 ? "md" : _ref$vSize,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var imeProps = (0, _beaconHooks.useIME)({
    onChange: props.onChange,
    value: props.value,
    defaultValue: props.defaultValue,
    ref: ref
  });
  return /*#__PURE__*/_react["default"].createElement(_StyledTextarea.StyledTextarea, _extends({}, props, imeProps, {
    forwardedAs: "textarea",
    className: (0, _classnames["default"])(["bcl-textarea", className]),
    vSize: vSize
  }));
});

exports.Textarea = Textarea;
Textarea.displayName = "Textarea";