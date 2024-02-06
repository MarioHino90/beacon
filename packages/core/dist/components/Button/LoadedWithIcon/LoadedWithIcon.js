"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadedWithIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../Icon");

var _StyledLoadedWithIcon = require("./StyledLoadedWithIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoadedWithIcon = function LoadedWithIcon(_ref) {
  var isAnimated = _ref.isAnimated,
      name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement(_StyledLoadedWithIcon.StyledLoadedWithIcon, {
    isAnimated: isAnimated
  }, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: name
  }));
};

exports.LoadedWithIcon = LoadedWithIcon;