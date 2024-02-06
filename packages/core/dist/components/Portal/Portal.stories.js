"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Unmount = exports.BasicUse = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BodyText = require("../BodyText");

var _Heading = require("../Heading");

var _Button = require("../Button");

var _PortalDocs = _interopRequireDefault(require("./Portal.docs.mdx"));

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
  title: "Core/Portal",
  component: _.Portal,
  parameters: {
    docs: {
      page: _PortalDocs["default"]
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Heading.Heading, {
    level: 2
  }, "Portal"), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, null, "See bottom of page for the rendered component"), /*#__PURE__*/_react["default"].createElement(_.Portal, null, "A ", /*#__PURE__*/_react["default"].createElement("code", null, "Portal"), " is a helper wrapper for", " ", /*#__PURE__*/_react["default"].createElement("code", null, "React.createPortal"), ". This portal is rendered at the bottom of the page."));
};

exports.BasicUse = BasicUse;
BasicUse.storyName = "basic use";

var Unmount = function Unmount() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Heading.Heading, {
    level: 2
  }, "Portal"), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, null, "See bottom of page for the rendered component"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, "Click to Toggle Portal"), isOpen ? /*#__PURE__*/_react["default"].createElement(_.Portal, null, "A ", /*#__PURE__*/_react["default"].createElement("code", null, "Portal"), " is a helper wrapper for", " ", /*#__PURE__*/_react["default"].createElement("code", null, "React.createPortal"), ". This portal is rendered at the bottom of the page.") : null));
};

exports.Unmount = Unmount;
Unmount.storyName = "unmount";