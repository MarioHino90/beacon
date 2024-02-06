"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithDistance = exports.UsingAriaLabel = exports.NoAriaLabelWithCompAsChild = exports.NoAriaLabel = exports.MutedUse = exports.DisabledUse = exports.BasicUse = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Popper = require("../Popper");

var _IconButtonDocs = _interopRequireDefault(require("./IconButton.docs.mdx"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// eslint-disable-next-line import/no-default-export
var _default = {
  title: "Core/Primitives/IconButton",
  component: _.IconButton,
  parameters: {
    docs: {
      page: _IconButtonDocs["default"]
    }
  }
};
exports["default"] = _default;

var BasicUse = function BasicUse() {
  var label = (0, _addonKnobs.text)("Tooltip label", "Label");
  var placement = (0, _addonKnobs.select)("Tooltip placement", _Popper.placementTypes, "bottom");

  var _React$useReducer = _react["default"].useReducer(function (clicks) {
    return [].concat(_toConsumableArray(clicks), ["click"]);
  }, []),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      clicks = _React$useReducer2[0],
      addClick = _React$useReducer2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: addClick,
    muted: (0, _addonKnobs["boolean"])("Muted", false),
    size: (0, _addonKnobs.select)("Icon Size", ["lg", "sm"], undefined),
    disabled: (0, _addonKnobs["boolean"])("Disabled", false),
    "aria-label": label,
    placement: placement
  }, label), /*#__PURE__*/_react["default"].createElement("ul", {
    id: "clicks"
  }, clicks.map(function (click, i) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, click);
  })));
};

exports.BasicUse = BasicUse;
BasicUse.storyName = "basic use";

var MutedUse = function MutedUse() {
  var label = (0, _addonKnobs.text)("Tooltip label", "Label");
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: (0, _addonActions.action)("Muted click"),
    muted: true,
    "aria-label": label
  }, label);
};

exports.MutedUse = MutedUse;
MutedUse.storyName = "muted use";

var DisabledUse = function DisabledUse() {
  var label = (0, _addonKnobs.text)("Tooltip label", "Label");
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: (0, _addonActions.action)("You should not see this"),
    disabled: true,
    "aria-label": label
  }, label);
};

exports.DisabledUse = DisabledUse;
DisabledUse.storyName = "disabled use";

var WithDistance = function WithDistance() {
  var label = (0, _addonKnobs.text)("Tooltip label", "Label");
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: (0, _addonActions.action)("Click"),
    "aria-label": label,
    distance: (0, _addonKnobs.number)("Distance", -5)
  }, label);
};

exports.WithDistance = WithDistance;
WithDistance.storyName = "with distance";

var UsingAriaLabel = function UsingAriaLabel() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: (0, _addonActions.action)("Click"),
    "aria-label": "a helpful aria-label"
  }, (0, _addonKnobs.text)("Tooltip label", "Label"));
};

exports.UsingAriaLabel = UsingAriaLabel;
UsingAriaLabel.storyName = "using aria label";

var NoAriaLabel = function NoAriaLabel() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: (0, _addonActions.action)("Click")
  }, (0, _addonKnobs.text)("Tooltip label", "Label"));
};

exports.NoAriaLabel = NoAriaLabel;
NoAriaLabel.storyName = "no aria label";

var NoAriaLabelWithCompAsChild = function NoAriaLabelWithCompAsChild() {
  return /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    name: (0, _addonKnobs.text)("Icon", "cog"),
    onClick: (0, _addonActions.action)("Click")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "inner-div"
  }, (0, _addonKnobs.text)("Tooltip label", "Label")));
};

exports.NoAriaLabelWithCompAsChild = NoAriaLabelWithCompAsChild;
NoAriaLabelWithCompAsChild.storyName = "no aria label + component as child";