"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TriggerOnlyOnHover = exports.TriggerOnlyOnFocus = exports.TriggerOnlyOnClick = exports.BasicUse = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

var _UncontrolledTooltipDocs = _interopRequireDefault(require("./UncontrolledTooltip.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// this is used to allow cypress tests to focus away from the popper without using realPress("Tab")
// it's invisible because it doesn't affect the story at all from an enduser perspective
var InvisibleButton = function InvisibleButton() {
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      color: "transparent"
    }
  }, "invisible button");
}; // eslint-disable-next-line import/no-default-export


var _default = {
  title: "Core/Overlay/UncontrolledTooltip",
  component: _.UncontrolledTooltip,
  parameters: {
    docs: {
      page: _UncontrolledTooltipDocs["default"]
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.UncontrolledTooltip, {
    placement: "bottom",
    label: "Tooltip"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    className: "focus-button"
  }, "Focus/hover to open")), /*#__PURE__*/_react["default"].createElement(InvisibleButton, null));
};

exports.BasicUse = BasicUse;
BasicUse.storyName = "basic use";

var TriggerOnlyOnClick = function TriggerOnlyOnClick() {
  return /*#__PURE__*/_react["default"].createElement(_.UncontrolledTooltip, {
    triggers: ["click"],
    untriggers: ["click"],
    placement: "bottom",
    label: "Tooltip"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Click to open/close"));
};

exports.TriggerOnlyOnClick = TriggerOnlyOnClick;
TriggerOnlyOnClick.storyName = "trigger only on click";

var TriggerOnlyOnFocus = function TriggerOnlyOnFocus() {
  return /*#__PURE__*/_react["default"].createElement(_.UncontrolledTooltip, {
    triggers: ["focus"],
    untriggers: ["blur"],
    placement: "bottom",
    label: "Tooltip"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Click to focus"));
};

exports.TriggerOnlyOnFocus = TriggerOnlyOnFocus;
TriggerOnlyOnFocus.storyName = "trigger only on focus";

var TriggerOnlyOnHover = function TriggerOnlyOnHover() {
  return /*#__PURE__*/_react["default"].createElement(_.UncontrolledTooltip, {
    triggers: ["mouseenter"],
    placement: "bottom",
    label: "Tooltip"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, null, "Hover to open"));
};

exports.TriggerOnlyOnHover = TriggerOnlyOnHover;
TriggerOnlyOnHover.storyName = "trigger only on hover";