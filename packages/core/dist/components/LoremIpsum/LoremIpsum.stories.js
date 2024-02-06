"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SecondaryUse = exports.BasicUse = void 0;

var _react = _interopRequireDefault(require("react"));

var _LoremIpsumDocs = _interopRequireDefault(require("./LoremIpsum.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Text/LoremIpsum",
  component: _.LoremIpsum,
  parameters: {
    docs: {
      page: _LoremIpsumDocs["default"]
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse() {
  return /*#__PURE__*/_react["default"].createElement(_.LoremIpsum, null);
};

exports.BasicUse = BasicUse;
BasicUse.storyName = "basic use";

var SecondaryUse = function SecondaryUse(args) {
  return /*#__PURE__*/_react["default"].createElement(_.LoremIpsum, args);
};

exports.SecondaryUse = SecondaryUse;
SecondaryUse.args = {
  paragraphs: 2
};
SecondaryUse.storyName = "secondary use";