"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRadioButtonGroup = exports.RadioButtonGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Flex = require("../Flex");

var _Label = require("../Label");

var _StatusText = require("../StatusText");

var _excluded = ["children", "className", "errorText", "invalid", "label", "name", "onChange", "stacking", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var horizontalGrid = (0, _styledComponents.css)([".bcl-radio-button-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;column-gap:1.5rem;row-gap:1rem;max-width:fit-content;}"]);

var StyledRadioButtonGroup = _styledComponents["default"].div.withConfig({
  displayName: "RadioButtonGroup__StyledRadioButtonGroup",
  componentId: "sc-rfs9w7-0"
})([".bcl-radio-button-grid{margin-top:0.25rem;}", ";", "{max-width:", "px;&:not(:last-of-type){margin-bottom:1rem;}}", "{margin-top:1rem;}"], function (props) {
  return props.stacking === "horizontal" && horizontalGrid;
}, _Flex.StyledFlex, function (props) {
  return props.stacking === "horizontal" ? 350 : 450;
}, _StatusText.StyledStatusText);

exports.StyledRadioButtonGroup = StyledRadioButtonGroup;

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      errorText = _ref.errorText,
      invalid = _ref.invalid,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$stacking = _ref.stacking,
      stacking = _ref$stacking === void 0 ? "vertical" : _ref$stacking,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(StyledRadioButtonGroup, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-radio-button-group", className]),
    stacking: stacking
  }), label && /*#__PURE__*/_react["default"].createElement(_Label.Label, null, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bcl-radio-button-grid"
  }, _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].cloneElement(child, {
      checked: value ? child.props.value === value : undefined,
      invalid: invalid,
      invalidRadioOnly: true,
      name: name,
      onChange: onChange
    });
  })), invalid && errorText && /*#__PURE__*/_react["default"].createElement(_StatusText.StatusText, null, errorText));
};

exports.RadioButtonGroup = RadioButtonGroup;