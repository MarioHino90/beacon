"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SuccessText = exports.StackedFields = exports.Required = exports.Optional = exports.InfoIconPopoverWithAmbiguousChildren = exports.InfoIconPopover = exports.HelperText = exports.Formatlabel = exports.ErrorText = exports.BasicUse = exports.Accessibility = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Input = require("../Input");

var _BodyText = require("../BodyText");

var _RadioButton = require("../RadioButton");

var _BannerAlert = require("../BannerAlert");

var _BannerAlertBody = require("../BannerAlertBody");

var _BannerAlertDescription = require("../BannerAlertDescription");

var _BannerAlertDescriptionText = require("../BannerAlertDescriptionText");

var _FieldLabelDocs = _interopRequireDefault(require("./FieldLabel.docs.mdx"));

var _storybookHelpers = require("./storybookHelpers");

var _ = require(".");

var _excluded = ["tooltipDisplay"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Forms/FieldLabel",
  component: _.FieldLabel,
  parameters: {
    docs: {
      page: _FieldLabelDocs["default"]
    }
  }
};
exports["default"] = _default;

var MustBeCanvasMode = function MustBeCanvasMode() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 500
    }
  }, /*#__PURE__*/_react["default"].createElement(_BannerAlert.BannerAlert, {
    intent: "warning",
    isOpen: true
  }, /*#__PURE__*/_react["default"].createElement(_BannerAlertBody.BannerAlertBody, null, /*#__PURE__*/_react["default"].createElement(_BannerAlertDescription.BannerAlertDescription, null, /*#__PURE__*/_react["default"].createElement(_BannerAlertDescriptionText.BannerAlertDescriptionText, null, "Warning: This story only works in Canvas mode, click on the \"Canvas\" tab to view it.")))));
};

var InvisibleButton = function InvisibleButton() {
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      color: "transparent"
    }
  }, "invisible button");
};

var BasicUse = function BasicUse(_ref) {
  var tooltipDisplay = _ref.tooltipDisplay,
      args = _objectWithoutProperties(_ref, _excluded);

  var infoIconText = tooltipDisplay === "text" ? "Can be used across push, email, and in-app messages to send a rendered copy of the message." : tooltipDisplay === "react" ? /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Create Content Test Groups", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://example.com",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "here"), ". Groups must have Content Test property enabled in order to send test messages."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://example.com",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Learn more about Content Test Groups"))) : null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      placeContent: "center",
      padding: 300
    }
  }, /*#__PURE__*/_react["default"].createElement(_.FieldLabel, _extends({
    htmlFor: "basic-use-text-field"
  }, args, {
    infoIconPopoverContent: infoIconText
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "basic-use-text-field"
  })));
};

exports.BasicUse = BasicUse;
BasicUse.args = {
  label: "Name"
};
BasicUse.parameters = {
  controls: {
    exclude: ["infoIconText"]
  }
};
BasicUse.argTypes = {
  enforce: {
    options: ["none", "optional", "required"],
    mapping: {
      optional: "optional",
      required: "required",
      none: undefined
    },
    control: {
      type: "select",
      labels: {
        optional: "optional",
        required: "required",
        none: "none"
      }
    }
  },
  status: {
    options: ["none", "success", "danger"],
    mapping: {
      success: "success",
      danger: "danger",
      none: undefined
    },
    control: {
      type: "select",
      labels: {
        success: "success",
        danger: "danger",
        none: "none"
      }
    }
  },
  tooltipDisplay: {
    options: ["text", "react"],
    mapping: {
      text: "text",
      react: "react"
    },
    control: {
      type: "select",
      labels: {
        text: "text content",
        react: "React content"
      }
    }
  }
};
BasicUse.storyName = "basic use";

var Accessibility = function Accessibility() {
  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    htmlFor: "body-text-example",
    label: "Form Control"
  }, /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
    id: "body-text-example"
  }, "<", "Your-component-here using id: \"hello world\" ", "/>"));
};

exports.Accessibility = Accessibility;
Accessibility.storyName = "accessibility";

var HelperText = function HelperText(args) {
  var _React$useState = _react["default"].useState("000000000000-0000-0000-00000000"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, _extends({}, args, {
    htmlFor: "help-text-example-text-field"
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "help-text-example-text-field",
    value: value,
    onChange: handleChange
  }));
};

exports.HelperText = HelperText;
HelperText.args = {
  label: "GUID",
  helpText: "Remember, `GUID` does not rhyme with `squid`"
};
HelperText.storyName = "helper text";

var SuccessText = function SuccessText(args) {
  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, _extends({}, args, {
    helpText: "this should not appear",
    htmlFor: "success-text-field-example",
    status: "success"
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "success-text-field-example",
    value: "yes, I am!"
  }));
};

exports.SuccessText = SuccessText;
SuccessText.args = {
  label: "Are you doing a great job?",
  statusText: "You did it, great job!"
};
SuccessText.storyName = "success text";

var ErrorText = function ErrorText(args) {
  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, _extends({}, args, {
    helpText: "this should not appear",
    status: "danger"
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "error-text-field-example",
    value: "email address [at] domain dot com",
    invalid: true
  }));
};

exports.ErrorText = ErrorText;
ErrorText.args = {
  label: "Email",
  statusText: "Valid email addresses include the @ sign"
};
ErrorText.storyName = "error text";

var Optional = function Optional() {
  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    htmlFor: "basic-use-text-field",
    label: "Name",
    enforce: "optional"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "basic-use-text-field"
  }));
};

exports.Optional = Optional;
Optional.storyName = "optional";

var Required = function Required() {
  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    htmlFor: "basic-use-text-field",
    label: "Name",
    enforce: "required"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "basic-use-text-field"
  }));
};

exports.Required = Required;
Required.storyName = "required";

var StackedFields = function StackedFields(args) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.FieldLabel, _extends({}, args, {
    htmlFor: "stacked-text-field-1",
    label: "Name"
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "stacked-text-field-1",
    invalid: true
  })), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    htmlFor: "stacked-text-field-2",
    label: "Hat size"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "stacked-text-field-2",
    value: "59 1/2"
  })), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    label: "Coordinates",
    helpText: "Degrees, minutes, seconds (DMS)",
    htmlFor: "stacked-text-field-3"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "stacked-text-field-3",
    value: "40\xB045'10.5\"N 73\xB059'43.0\"W"
  })));
};

exports.StackedFields = StackedFields;
StackedFields.args = {
  status: "danger",
  statusText: "You must include your name"
};
StackedFields.storyName = "stacked fields";

var Formatlabel = function Formatlabel() {
  return /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    htmlFor: "basic-use-text-field",
    formatLabel: function formatLabel(_ref2) {
      var label = _ref2.label;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("i", null, label), " ", /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          color: "red"
        }
      }, "specially formatted!"));
    },
    label: "Name"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "basic-use-text-field"
  }));
};

exports.Formatlabel = Formatlabel;
Formatlabel.storyName = "formatLabel";

var InfoIconPopover = function InfoIconPopover() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      placeContent: "center",
      padding: 300,
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react["default"].createElement(MustBeCanvasMode, null), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    label: "text-based info popover",
    htmlFor: "info-icon-text-text-field",
    infoIconPopoverContent: _storybookHelpers.infoIconPopoverTextContent
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "info-icon-text-text-field",
    placeholder: "simple help text"
  })), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    infoIconVariant: "muted",
    label: "react-based info popover (click to trigger)",
    htmlFor: "info-icon-react-text-field",
    infoIconPopoverContent: _storybookHelpers.infoIconPopoverReactContent,
    infoIconTriggerVariant: "click"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "info-icon-react-text-field",
    placeholder: "react field label help text"
  })));
};

exports.InfoIconPopover = InfoIconPopover;
InfoIconPopover.storyName = "info icon popover";

var InfoIconPopoverWithAmbiguousChildren = function InfoIconPopoverWithAmbiguousChildren() {
  var ref = (0, _react.useRef)(null);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      placeContent: "center",
      padding: 200,
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react["default"].createElement(MustBeCanvasMode, null), /*#__PURE__*/_react["default"].createElement(InvisibleButton, null), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    label: "using ref",
    infoIconPopoverContent: _storybookHelpers.infoIconPopoverReactContent,
    controlRef: ref
  }, /*#__PURE__*/_react["default"].createElement("span", null, "This has ambiguous children and must have a ref to the control passed in"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    name: "first",
    value: "1",
    ref: ref
  }, "Item 1"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    name: "first",
    value: "2"
  }, "Item 2"), /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, {
    name: "first",
    value: "3"
  }, "Item 2")), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    label: "using htmlFor",
    htmlFor: "info-icon-react-text-field-2",
    infoIconPopoverContent: _storybookHelpers.infoIconPopoverReactContent
  }, /*#__PURE__*/_react["default"].createElement("span", null, "This has ambiguous children and no ref but can use htmlFor"), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "info-icon-react-text-field-2",
    placeholder: "using htmlFor"
  })), /*#__PURE__*/_react["default"].createElement(_.FieldLabel, {
    label: "broken example",
    infoIconPopoverContent: _storybookHelpers.infoIconPopoverReactContent
  }, /*#__PURE__*/_react["default"].createElement("span", null, "This has ambiguous children and no ref and no htmlFor - keyboard accessibility is broken!"), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    placeholder: "broken!"
  })));
};

exports.InfoIconPopoverWithAmbiguousChildren = InfoIconPopoverWithAmbiguousChildren;
InfoIconPopoverWithAmbiguousChildren.storyName = "info icon popover with ambiguous children";