"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoIconPopoverTextContent = exports.infoIconPopoverReactContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _PopoverHeading = require("../PopoverHeading");

var _PopoverBody = require("../PopoverBody");

var _BodyText = require("../BodyText");

var _Link = require("../Link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var infoIconPopoverTextContent = "Can be used across push, email, and in-app messages to send a rendered copy of the message.";
exports.infoIconPopoverTextContent = infoIconPopoverTextContent;

var infoIconPopoverReactContent = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PopoverHeading.PopoverHeading, null, "Content test groups"), /*#__PURE__*/_react["default"].createElement(_PopoverBody.PopoverBody, null, /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
  size: "sm"
}, "Create Content Test Groups", " ", /*#__PURE__*/_react["default"].createElement(_Link.Link, {
  href: "http://example.com",
  target: "_blank",
  rel: "noreferrer noopener",
  variant: "inline"
}, "here"), ". Groups must have Content Test property enabled in order to send test messages.", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Link.Link, {
  href: "http://example.com",
  target: "_blank",
  rel: "noreferrer noopener",
  variant: "inline"
}, "Learn more about Content Test Groups"))));

exports.infoIconPopoverReactContent = infoIconPopoverReactContent;