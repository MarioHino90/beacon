"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithDefaultValue = exports.VerticalSize = exports.UncontrolledRerendering = exports.TypeNumber = exports.TypeDate = exports.Label = exports.Invalid = exports.FullWidth = exports.Disabled = exports.BasicUse = void 0;

var _react = _interopRequireWildcard(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _FieldLabel = require("../FieldLabel");

var _InputDocs = _interopRequireDefault(require("./Input.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Forms/Input",
  component: _.Input,
  parameters: {
    docs: {
      page: _InputDocs["default"]
    }
  },
  argTypes: {
    defaultValue: {
      control: {
        type: "text"
      }
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse(_ref) {
  var defaultValue = _ref.defaultValue;

  var _React$useState = _react["default"].useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setState = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setState(event.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: (0, _addonKnobs.text)("Placeholder", "Enter text in me!"),
    value: value,
    onChange: handleChange,
    defaultValue: defaultValue
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "basic-value"
  }, value));
};

exports.BasicUse = BasicUse;
BasicUse.args = {
  defaultValue: ""
};
BasicUse.storyName = "basic use";

var WithDefaultValue = function WithDefaultValue(_ref2) {
  var defaultValue = _ref2.defaultValue;
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me!",
    defaultValue: defaultValue
  });
};

exports.WithDefaultValue = WithDefaultValue;
WithDefaultValue.args = {
  defaultValue: ""
};
WithDefaultValue.storyName = "with default value";
/**
 * This story is used to verify that when the user uncontrollably re-renders the component
 * by passing in a new ref or a new onChange every render, it still preserves the
 * typing state
 */

var UncontrolledRerendering = function UncontrolledRerendering(_ref3) {
  var defaultValue = _ref3.defaultValue;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange() {
    return function (e) {
      setValue(e.target.value);
    };
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me!",
    defaultValue: defaultValue,
    ref: /*#__PURE__*/_react["default"].createRef(),
    onChange: handleChange()
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "rerender-value"
  }, value));
};

exports.UncontrolledRerendering = UncontrolledRerendering;
UncontrolledRerendering.args = {
  defaultValue: ""
};
UncontrolledRerendering.storyName = "uncontrolled rendering (re-render should preserve typing)";

var Disabled = function Disabled() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me!",
    disabled: true
  });
};

exports.Disabled = Disabled;
Disabled.storyName = "disabled";

var Invalid = function Invalid() {
  return /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Texty Input",
    htmlFor: "textInput",
    status: "danger",
    statusText: (0, _addonKnobs.text)("Error Message", "Please enter a valid value in this field")
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me!",
    invalid: true
  }));
};

exports.Invalid = Invalid;
Invalid.storyName = "invalid";

var FullWidth = function FullWidth() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me!",
    fullWidth: true
  });
};

exports.FullWidth = FullWidth;
FullWidth.storyName = "full width";

var VerticalSize = function VerticalSize() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me! (md)",
    vSize: "md"
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter text in me! (sm)",
    vSize: "sm"
  }));
};

exports.VerticalSize = VerticalSize;
VerticalSize.storyName = "vertical size";

var Label = function Label() {
  return /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    label: "Texty Input",
    htmlFor: "textInput"
  }, /*#__PURE__*/_react["default"].createElement(_.Input, {
    id: "textInput",
    placeholder: "Enter text in me!"
  }));
};

exports.Label = Label;
Label.storyName = "label";

var TypeNumber = function TypeNumber() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "See 'NumberInput' component");
};

exports.TypeNumber = TypeNumber;
TypeNumber.storyName = "type: number";

var TypeDate = function TypeDate() {
  return /*#__PURE__*/_react["default"].createElement(_.Input, {
    placeholder: "Enter a date in me!",
    type: "date",
    min: (0, _addonKnobs.text)("Min", "1999-12-31"),
    max: (0, _addonKnobs.text)("Max", "2019-12-18"),
    step: (0, _addonKnobs.number)("Step", 2)
  });
};

exports.TypeDate = TypeDate;
TypeDate.storyName = "type: date";