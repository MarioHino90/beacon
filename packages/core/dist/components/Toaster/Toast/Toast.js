"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Flex = require("../../Flex");

var _Icon = require("../../Icon");

var _StyledToast = require("./StyledToast");

var _excluded = ["children", "className", "intent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var mapIntentToIcon = function mapIntentToIcon(intent) {
  switch (intent) {
    case "danger":
      return "times";

    case "success":
      return "check";

    case "warning":
      return "exclamation";

    case "info":
    default:
      return "info";
  }
};

var Toast = function Toast(_ref) {
  var children = _ref.children,
      className = _ref.className,
      intent = _ref.intent,
      props = _objectWithoutProperties(_ref, _excluded);

  var name = mapIntentToIcon(intent);
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "center",
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_StyledToast.StyledToast, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-toast", className]),
    intent: intent
  }), name && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: name
  }), children));
};

exports.Toast = Toast;
Toast.displayName = "Toast";