"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableVariant = exports.InlineVariant = exports.DisabledUse = exports.BasicUse = void 0;

var _react = _interopRequireDefault(require("react"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../Icon");

var _Popover = require("../Popover");

var _PopoverBody = require("../PopoverBody");

var _LinkDocs = _interopRequireDefault(require("./Link.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Primitives/Link",
  component: _.Link,
  argTypes: {
    variant: {
      mapping: {
        undefined: undefined,
        table: "table",
        inline: "inline"
      },
      control: {
        type: "select",
        labels: {
          undefined: undefined,
          table: "table",
          inline: "inline"
        }
      }
    },
    disabled: {
      type: "checkbox"
    }
  },
  parameters: {
    docs: {
      page: _LinkDocs["default"]
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse(args) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, _extends({}, args, {
    href: "https://www.google.com",
    target: "_blank"
  }), "Click here");
};

exports.BasicUse = BasicUse;
BasicUse.args = {
  disabled: false
};
BasicUse.storyName = "basic use";

var TableVariant = function TableVariant(args) {
  return /*#__PURE__*/_react["default"].createElement(_.Link, _extends({
    variant: "table"
  }, args), "Click here");
};

exports.TableVariant = TableVariant;
TableVariant.storyName = "table variant";

var InlineVariant = function InlineVariant() {
  var _usePopover = (0, _Popover.usePopover)(),
      _usePopover2 = _slicedToArray(_usePopover, 2),
      popoverState = _usePopover2[0],
      targetRef = _usePopover2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    id: "info-icon",
    name: "info-circle",
    size: "1x",
    color: (0, _beaconStyling.getIntentColor)("primary", 500),
    ref: targetRef
  }), /*#__PURE__*/_react["default"].createElement(_Popover.Popover, _extends({
    interactive: true
  }, popoverState, {
    targetRef: targetRef,
    triggers: ["click", "mouseenter"],
    untriggers: ["mouseleave"]
  }), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, "Create Content Test Groups ", /*#__PURE__*/_react["default"].createElement(_.Link, {
    variant: "inline"
  }, "here"), ". Groups must have Content Test property enabled in order to send test messages. ", /*#__PURE__*/_react["default"].createElement(_.Link, {
    variant: "inline"
  }, "Learn More"))));
};

exports.InlineVariant = InlineVariant;
InlineVariant.storyName = "inline variant";

var DisabledUse = function DisabledUse() {
  return /*#__PURE__*/_react["default"].createElement(_.Link, {
    disabled: true
  }, "Click here");
};

exports.DisabledUse = DisabledUse;
DisabledUse.storyName = "disabled use";