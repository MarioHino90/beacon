"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconHooks = require("@braze/beacon-hooks");

var _InputGroupContext = require("../InputGroupContext");

var _StyledInput = require("./StyledInput");

var _excluded = ["className", "invalid", "type", "min", "max", "vSize", "step", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      invalid = _ref.invalid,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      min = _ref.min,
      max = _ref.max,
      vSize = _ref.vSize,
      step = _ref.step,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_InputGroupContext.InputGroupContext),
      contextInvalid = _useContext.invalid,
      disabled = _useContext.disabled,
      fullWidth = _useContext.fullWidth,
      contextVSize = _useContext.vSize;

  var imeProps = (0, _beaconHooks.useIME)({
    onChange: onChange,
    value: props.value,
    defaultValue: props.defaultValue,
    ref: ref
  }); // combine vSize props from local and context

  var activeVSize = vSize || contextVSize || "md";
  return /*#__PURE__*/_react["default"].createElement(_StyledInput.StyledInput, _extends({
    disabled: disabled,
    fullWidth: fullWidth
  }, props, imeProps, {
    className: (0, _classnames["default"])(["bcl-input", // added because Bootstrap styles kill our styles, for cross compat reasons in platform
    // delete when bootstrap is removed from the platform stylesheet
    {
      "bcl-input-invalid": invalid || contextInvalid
    }, _defineProperty({}, "bcl-input-".concat(activeVSize), activeVSize), className]),
    invalid: invalid || contextInvalid,
    vSize: activeVSize,
    type: type
  }, type === "number" || type === "date" ? {
    min: min,
    max: max,
    step: step
  } : {}));
});

exports.Input = Input;
Input.displayName = "Input";