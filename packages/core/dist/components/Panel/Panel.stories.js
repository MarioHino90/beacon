"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextAlignment = exports.Stacking = exports.NoHeader = exports.LightBackgroundWithFormElements = exports.LightBackground = exports.BasicUse = void 0;

var _react = _interopRequireDefault(require("react"));

var _FieldLabel = require("../FieldLabel");

var _Input = require("../Input");

var _PanelBody = require("../PanelBody");

var _PanelHeader = require("../PanelHeader");

var _PanelDocs = _interopRequireDefault(require("./Panel.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var textAlignOptions = ["center", "left", "right"];
var textAlignMap = {
  center: "center",
  left: "left",
  right: "right"
};

var insetSizeMap = _PanelBody.insetSizes.reduce(function (all, size) {
  all[size] = size;
  return all;
}, {}); // eslint-disable-next-line import/no-default-export


var _default = {
  title: "Core/Content Display/Panel",
  component: _.Panel,
  parameters: {
    docs: {
      page: _PanelDocs["default"]
    }
  },
  argTypes: {
    inset: {
      mapping: insetSizeMap,
      control: {
        type: "select",
        options: _PanelBody.insetSizes,
        labels: insetSizeMap
      }
    },
    textAlign: {
      mapping: textAlignMap,
      control: {
        type: "select",
        options: textAlignOptions,
        labels: textAlignMap
      }
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse(args) {
  return /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "This is a panel"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, args, "Hello world!"));
};

exports.BasicUse = BasicUse;
BasicUse.args = {
  inset: "xl"
};
BasicUse.storyName = "basic use";

var NoHeader = function NoHeader() {
  return /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, null, "Hello world!"));
};

exports.NoHeader = NoHeader;
NoHeader.storyName = "no header";

var Stacking = function Stacking() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "This is a panel"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, null, "Hello world!")), /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "This is another panel"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, null, "Hello world!")), /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "Yet another panel!"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, null, "Hello world again!")));
};

exports.Stacking = Stacking;
Stacking.storyName = "stacking";

var TextAlignment = function TextAlignment(args) {
  return /*#__PURE__*/_react["default"].createElement(_.Panel, null, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "This is a panel"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, args, "Hello world!"));
};

exports.TextAlignment = TextAlignment;
TextAlignment.args = {
  textAlign: "left"
};
TextAlignment.storyName = "text alignment";

var LightBackground = function LightBackground() {
  return /*#__PURE__*/_react["default"].createElement(_.Panel, {
    background: "light"
  }, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "This is a panel"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, null, "Hello world!"));
};

exports.LightBackground = LightBackground;
LightBackground.storyName = "light background";

var LightBackgroundWithFormElements = function LightBackgroundWithFormElements() {
  return /*#__PURE__*/_react["default"].createElement(_.Panel, {
    background: "light"
  }, /*#__PURE__*/_react["default"].createElement(_PanelHeader.PanelHeader, null, "This is a panel"), /*#__PURE__*/_react["default"].createElement(_PanelBody.PanelBody, null, /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    htmlFor: "input-1",
    label: "Input 1"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "input-1"
  })), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    htmlFor: "input-2",
    label: "Input 2"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "input-2"
  })), /*#__PURE__*/_react["default"].createElement(_FieldLabel.FieldLabel, {
    htmlFor: "input-3",
    label: "Input 3"
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    id: "input-3"
  }))));
};

exports.LightBackgroundWithFormElements = LightBackgroundWithFormElements;
LightBackgroundWithFormElements.storyName = "light background with form elements";