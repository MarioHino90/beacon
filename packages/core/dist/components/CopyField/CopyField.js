"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = require("styled-components");

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _Button = require("../Button");

var _Icon = require("../Icon");

var _Input = require("../Input");

var _Tooltip = require("../Tooltip");

var _StyledCopyField = require("./StyledCopyField");

var _excluded = ["containerClassName", "copyTooltipText", "onCopyClick", "onInputClick", "showTextInButton", "zIndex", "value", "vSize"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Map vertical size of input to button size
 * @param vSize vertical size prop for input field
 * @returns `size` prop to be passed to `Button`
 */
var mapVSizeToButtonSize = function mapVSizeToButtonSize(vSize) {
  switch (vSize) {
    case "sm":
      return "sm";

    case "md":
    default:
      return "lg";
  }
};

var mapVSizeToIconSize = function mapVSizeToIconSize(vSize) {
  switch (vSize) {
    case "sm":
      return "14px";

    case "md":
    default:
      return "16px";
  }
};

var pulseCss = (0, _styledComponents.css)(["animation:pulse 600ms ease-in-out;"]);

var CopyField = function CopyField(_ref) {
  var containerClassName = _ref.containerClassName,
      _ref$copyTooltipText = _ref.copyTooltipText,
      copyTooltipText = _ref$copyTooltipText === void 0 ? "Copy" : _ref$copyTooltipText,
      onCopyClick = _ref.onCopyClick,
      onInputClick = _ref.onInputClick,
      _ref$showTextInButton = _ref.showTextInButton,
      showTextInButton = _ref$showTextInButton === void 0 ? true : _ref$showTextInButton,
      zIndex = _ref.zIndex,
      value = _ref.value,
      vSize = _ref.vSize,
      props = _objectWithoutProperties(_ref, _excluded);

  var inputRef = (0, _react.useRef)(null);

  var _useTooltip = (0, _Tooltip.useTooltip)(),
      _useTooltip2 = _slicedToArray(_useTooltip, 2),
      tooltipState = _useTooltip2[0],
      buttonRef = _useTooltip2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];
  /**
   * Helper function to make text selection reusable
   */


  var handleSelect = (0, _react.useCallback)(function () {
    var _inputRef$current, _inputRef$current2;

    // select contents of the input field
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.select(); // For mobile devices

    (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(0, 99999);
  }, []);
  /**
   * Function to handle click on the input element
   * by selecting all the text when user clicks in it
   * @param event mouse event on the input element
   */

  var handleInputClick = (0, _react.useCallback)(function (event) {
    // first, select contents of the input field
    handleSelect(); // fire input click event, if defined

    onInputClick === null || onInputClick === void 0 ? void 0 : onInputClick(event);
  }, [handleSelect, onInputClick]);
  /**
   * Function to handle click on the copy button by
   * copying the text in the input (i.e. 'value' prop)
   * to clipboard
   * @param event mouse event on the button element
   */

  var handleCopyClick = (0, _react.useCallback)(function (event) {
    var _inputRef$current3;

    // first, select contents of the input field
    handleSelect(); // now copy the selection

    (0, _copyToClipboard["default"])((_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.value); // next, focus back on the button rather than selecting text

    event.currentTarget.focus(); // finally, set copied state to true

    setCopied(true); // fire button click event, if defined

    onCopyClick === null || onCopyClick === void 0 ? void 0 : onCopyClick(event);
  }, [handleSelect, onCopyClick]);
  /**
   * automatically reset copied state to false
   * after timeout
   */

  (0, _react.useEffect)(function () {
    if (!copied) {
      return;
    }

    var timeout = setTimeout(function () {
      setCopied(false);
    }, 1500);
    return function () {
      clearTimeout(timeout);
    };
  }, [copied, setCopied]);
  return /*#__PURE__*/_react["default"].createElement(_StyledCopyField.StyledCopyField, {
    className: (0, _classnames["default"])(["bcl-copy-field", containerClassName]),
    showTextInButton: showTextInButton,
    zIndex: zIndex
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, _extends({}, props, {
    ref: inputRef,
    onClick: handleInputClick,
    value: value,
    vSize: vSize
  })), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: handleCopyClick,
    ref: buttonRef,
    size: mapVSizeToButtonSize(vSize)
  }, copied ? /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: "check"
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    style: {
      fontSize: mapVSizeToIconSize(vSize)
    },
    name: ["far", "clone"]
  }), showTextInButton && /*#__PURE__*/_react["default"].createElement("span", null, "Copy"))), /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, _extends({}, tooltipState, {
    popperStyledCss: (0, _styledComponents.css)(["z-index:", ";", ""], zIndex ? zIndex + 1 : "auto", copied ? pulseCss : undefined),
    targetRef: buttonRef,
    placement: "bottom",
    closeOnClickOutside: false
  }), copied ? "Copied to Clipboard" : copyTooltipText));
};

exports.CopyField = CopyField;
CopyField.displayName = "CopyField";