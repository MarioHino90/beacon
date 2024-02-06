"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _beaconHooks = require("@braze/beacon-hooks");

var _Flex = require("../Flex");

var _StyledCheckbox = require("./StyledCheckbox");

var _CheckboxContainer = require("./CheckboxContainer");

var _CheckboxIcon = require("./CheckboxIcon");

var _CheckboxLabel = require("./CheckboxLabel");

var _CheckedPolyline = require("./CheckedPolyline");

var _HiddenCheckbox = require("./HiddenCheckbox");

var _IndeterminatePolyline = require("./IndeterminatePolyline");

var _excluded = ["id", "children", "className", "name", "checked", "disabled", "indeterminate", "value", "onChange", "aria-label", "data-testid"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      name = _ref.name,
      checked = _ref.checked,
      disabled = _ref.disabled,
      indeterminate = _ref.indeterminate,
      value = _ref.value,
      onChange = _ref.onChange,
      ariaLabel = _ref["aria-label"],
      testId = _ref["data-testid"],
      props = _objectWithoutProperties(_ref, _excluded);

  var inputRef = (0, _react.useRef)(null);
  var activeRef = ref || inputRef;

  var handleChange = function handleChange(event) {
    if (!disabled) {
      onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }
  };

  var handleClick = function handleClick() {
    // if activeRef.current not defined, bail
    if (!activeRef.current) {
      return;
    } // grab the setter function for the `checked` value


    var _ref2 = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked"),
        nativeCheckboxCheckedSetter = _ref2.set; // set the checkbox `checked` to the reverse of the current


    nativeCheckboxCheckedSetter === null || nativeCheckboxCheckedSetter === void 0 ? void 0 : nativeCheckboxCheckedSetter.call(activeRef.current, !activeRef.current.checked); // create an event that bubbles up

    var e2 = new InputEvent("input", {
      bubbles: true
    }); // dispatch the event

    activeRef.current.dispatchEvent(e2); // call the change handler

    handleChange(e2);
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === " " && !disabled) {
      event.preventDefault();
      handleClick();
    }
  };

  var defaultId = (0, _beaconHooks.useId)("bc-checkbox");
  var guaranteedId = id || defaultId;
  return /*#__PURE__*/_react["default"].createElement(_CheckboxContainer.CheckboxContainer, {
    className: className,
    disabled: disabled,
    "data-testid": testId
  }, /*#__PURE__*/_react["default"].createElement(_Flex.Flex, null, /*#__PURE__*/_react["default"].createElement(_HiddenCheckbox.HiddenCheckbox, {
    "aria-label": ariaLabel,
    ref: activeRef,
    id: guaranteedId,
    checked: checked,
    disabled: disabled,
    name: name,
    value: value,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    tabIndex: -1,
    className: "bcl-hidden-checkbox"
  }), /*#__PURE__*/_react["default"].createElement(_StyledCheckbox.StyledCheckbox, _extends({}, props, {
    className: "bcl-styled-checkbox",
    tabIndex: 0,
    indeterminate: indeterminate,
    checked: checked,
    disabled: disabled,
    onClick: handleClick,
    onKeyPress: handleKeyPress
  }), /*#__PURE__*/_react["default"].createElement(_CheckboxIcon.CheckboxIcon, {
    "aria-hidden": true
  }, indeterminate ? /*#__PURE__*/_react["default"].createElement(_IndeterminatePolyline.IndeterminatePolyline, {
    indeterminate: indeterminate
  }) : /*#__PURE__*/_react["default"].createElement(_CheckedPolyline.CheckedPolyline, {
    checked: checked,
    "aria-hidden": true
  }))), children && /*#__PURE__*/_react["default"].createElement(_CheckboxLabel.CheckboxLabel, {
    htmlFor: guaranteedId,
    disabled: disabled
  }, children)));
});

exports.Checkbox = Checkbox;
Checkbox.displayName = "Checkbox";