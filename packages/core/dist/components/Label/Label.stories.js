"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BasicUse = void 0;

var _react = _interopRequireDefault(require("react"));

var _LabelDocs = _interopRequireDefault(require("./Label.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Text/Label",
  component: _.Label,
  parameters: {
    docs: {
      page: _LabelDocs["default"]
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse() {
  return /*#__PURE__*/_react["default"].createElement(_.Label, null, "This is a basic label");
};

exports.BasicUse = BasicUse;
BasicUse.storyName = "basic use";