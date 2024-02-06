"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Input = require("../Input");

var _StyledNumberInput = require("./StyledNumberInput");

var _NumberInputButton = require("./NumberInputButton");

var _excluded = ["containerClassName", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var dispatchChangeEvent = function dispatchChangeEvent(element) {
  var event = new Event("change", {
    bubbles: true,
    cancelable: true,
    composed: false
  });
  element.dispatchEvent(event);
};

var NumberInput = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var containerClassName = _ref.containerClassName,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  var newRef = _react["default"].useRef(null);

  var activeRef = ref || newRef;

  var handleIncrement = function handleIncrement() {
    if (!activeRef.current) {
      return;
    } // note: the DOM .stepUp() function does change the value, but it does not call onChange
    // see https://codesandbox.io/s/funny-monad-cns9o?file=/src/index.js


    activeRef.current.stepUp();
    dispatchChangeEvent(activeRef.current);
  };

  var handleDecrement = function handleDecrement() {
    if (!activeRef.current) {
      return;
    } // note: the DOM .stepDown() function does change the value, but it does not call onChange
    // see https://codesandbox.io/s/funny-monad-cns9o?file=/src/index.js


    activeRef.current.stepDown();
    dispatchChangeEvent(activeRef.current);
  };

  return /*#__PURE__*/_react["default"].createElement(_StyledNumberInput.StyledNumberInput, {
    className: (0, _classnames["default"])(["bcl-number-input", containerClassName])
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, _extends({
    type: "number"
  }, props, {
    ref: activeRef,
    disabled: disabled
  })), !disabled && /*#__PURE__*/_react["default"].createElement(_NumberInputButton.NumberInputButton, {
    className: "number-input--up-button",
    direction: "up",
    onClick: handleIncrement
  }), !disabled && /*#__PURE__*/_react["default"].createElement(_NumberInputButton.NumberInputButton, {
    className: "number-input--down-button",
    direction: "down",
    onClick: handleDecrement
  }));
});
exports.NumberInput = NumberInput;
NumberInput.displayName = "NumberInput";