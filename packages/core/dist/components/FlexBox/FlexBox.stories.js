"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Wrap = exports.TextAlignment = exports.JustifyContent = exports.Inline = exports.Direction = exports.CustomStyling = exports.CombinedProps = exports.BasicUse = exports.AsAnotherElement = exports.AlignItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _BodyText = require("../BodyText");

var _Box = require("../Box");

var _LoremIpsum = require("../LoremIpsum");

var _FlexBoxDocs = _interopRequireDefault(require("./FlexBox.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Layout/FlexBox",
  component: _.FlexBox,
  parameters: {
    docs: {
      page: _FlexBoxDocs["default"]
    }
  },
  argTypes: {
    justifyContent: {
      options: ["center", "flexStart", "flexEnd", "spaceBetween", "spaceEvenly", "spaceAround"],
      mapping: {
        flexStart: "flex-start",
        flexEnd: "flex-end",
        spaceBetween: "space-between",
        spaceEvenly: "space-evenly",
        spaceAround: "space-around"
      },
      control: {
        type: "select",
        labels: {
          flexStart: "flex-start",
          flexEnd: "flex-end",
          spaceBetween: "space-between",
          spaceEvenly: "space-evenly",
          spaceAround: "space-around"
        }
      }
    },
    alignItems: {
      options: ["stretch", "flexStart", "flexEnd", "center", "baseline"],
      mapping: {
        stretch: "stretch",
        flexStart: "flex-start",
        flexEnd: "flex-end",
        center: "center",
        baseline: "baseline"
      },
      control: {
        type: "select",
        labels: {
          stretch: "stretch",
          flexStart: "flex-start",
          flexEnd: "flex-end",
          center: "center",
          baseline: "baseline"
        }
      }
    },
    direction: {
      options: ["column", "columnReverse", "row", "rowReverse"],
      mapping: {
        column: "column",
        columnReverse: "column-reverse",
        row: "row",
        rowReverse: "row-reverse"
      },
      control: {
        type: "select",
        labels: {
          column: "column",
          columnReverse: "column-reverse",
          row: "row",
          rowReverse: "row-reverse"
        }
      }
    },
    textAlign: {
      options: ["center", "left", "right", "justify"],
      mapping: {
        center: "center",
        left: "left",
        right: "right",
        justify: "justify"
      },
      control: {
        type: "select",
        labels: {
          center: "center",
          left: "left",
          right: "right",
          justify: "justify"
        }
      }
    },
    wrap: {
      options: ["wrap", "nowrap", "wrapReverse"],
      mapping: {
        wrap: "wrap",
        nowrap: "nowrap",
        wrapReverse: "wrap-reverse"
      },
      control: {
        type: "select",
        labels: {
          wrap: "wrap",
          nowrap: "nowrap",
          wrapReverse: "wrap-reverse"
        }
      }
    },
    as: {
      type: "text"
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse(args) {
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "wrapper-display",
    style: {
      display: "inline-block",
      border: "1px solid",
      borderColor: "#008294"
    }
  }, args), /*#__PURE__*/_react["default"].createElement(_.FlexBox, {
    boxMargin: "md",
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test")));
};

exports.BasicUse = BasicUse;
BasicUse.args = {};
BasicUse.storyName = "basic use";

var JustifyContent = function JustifyContent(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wrapper-display",
    style: {
      display: "inline-block",
      border: "1px solid",
      borderColor: "#008294",
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    boxMargin: {
      left: "sm",
      right: "lg",
      top: "xxl",
      bottom: "xs"
    }
  }, args, {
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test")));
};

exports.JustifyContent = JustifyContent;
JustifyContent.args = {
  justifyContent: "center"
};
JustifyContent.storyName = "justify content";

var AlignItems = function AlignItems(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wrapper-display",
    style: {
      display: "inline-block",
      border: "1px solid",
      borderColor: "#008294"
    }
  }, /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    boxMargin: {
      horizontal: "md",
      top: "xxl",
      bottom: "xs"
    },
    boxPadding: {
      vertical: "sm",
      left: "xxxl",
      right: "lg"
    },
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }, args), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test")));
};

exports.AlignItems = AlignItems;
AlignItems.args = {
  alignItems: "center"
};
AlignItems.storyName = "align items";

var Direction = function Direction(args) {
  return /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }, args), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test"));
};

exports.Direction = Direction;
Direction.args = {
  direction: "column"
};
Direction.storyName = "direction";

var Inline = function Inline(args) {
  return /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    inline: true,
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }, args), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test"));
};

exports.Inline = Inline;
Inline.storyName = "inline";

var TextAlignment = function TextAlignment(_ref) {
  var _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? "center" : _ref$textAlign;
  return /*#__PURE__*/_react["default"].createElement(_.FlexBox, {
    textAlign: textAlign,
    style: {
      background: "pink",
      minHeight: "200px"
    },
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test"));
};

exports.TextAlignment = TextAlignment;
TextAlignment.storyName = "text alignment";

var Wrap = function Wrap(_ref2) {
  var _ref2$wrap = _ref2.wrap,
      wrap = _ref2$wrap === void 0 ? "wrap" : _ref2$wrap;
  return /*#__PURE__*/_react["default"].createElement(_.FlexBox, {
    wrap: wrap,
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, null)));
};

exports.Wrap = Wrap;
Wrap.storyName = "wrap";

var CombinedProps = function CombinedProps(args) {
  return /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    style: {
      background: "pink",
      minHeight: "200px"
    }
  }, args), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hi"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Hello"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, "Test"), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    boxPadding: "sm",
    boxMargin: "sm",
    style: {
      border: "1px solid black"
    }
  }, /*#__PURE__*/_react["default"].createElement(_LoremIpsum.LoremIpsum, null)));
};

exports.CombinedProps = CombinedProps;
CombinedProps.args = {
  justifyContent: "center",
  alignItems: "center",
  direction: "column",
  wrap: "wrap",
  inline: false,
  textAlign: "right"
};
CombinedProps.storyName = "combined props";

var AsAnotherElement = function AsAnotherElement(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wrapper-display",
    style: {
      display: "inline-block",
      border: "1px solid",
      borderColor: "#008294"
    }
  }, /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    boxMargin: "md",
    boxPadding: "xl",
    style: {
      border: "1px solid",
      borderColor: "#D32F4C"
    },
    as: "section"
  }, args), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, null, "I need spacing!")));
};

exports.AsAnotherElement = AsAnotherElement;
AsAnotherElement.storyName = "as another element";

var CustomStyling = function CustomStyling(args) {
  var styledCss = (0, _styledComponents.css)(["border:1px solid;border-color:#d32f4c;background-color:palegoldenrod;"]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wrapper-display",
    style: {
      display: "inline-block",
      border: "1px solid",
      borderColor: "#008294"
    }
  }, /*#__PURE__*/_react["default"].createElement(_.FlexBox, _extends({
    boxMargin: "md",
    boxPadding: "xl",
    styledCss: styledCss
  }, args), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, null, "This has custom styling via styled components")));
};

exports.CustomStyling = CustomStyling;
CustomStyling.storyName = "custom styling";