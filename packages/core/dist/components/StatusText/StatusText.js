"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusText = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconStyling = require("@braze/beacon-styling");

var _Icon = require("../Icon");

var _BodyText = require("../BodyText");

var _StyledStatusText = require("./StyledStatusText");

var _excluded = ["className", "children", "displayIcon", "status"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getIconColor(status) {
  switch (status) {
    case "danger":
      return (0, _beaconStyling.getIntentColor)("danger", 500);

    case "success":
      return (0, _beaconStyling.getIntentColor)("success", 500);

    default:
      return null;
  }
}

function getIconName(status) {
  switch (status) {
    case "danger":
      return "exclamation-triangle";

    case "success":
      return "check-circle";

    default:
      return null;
  }
}

var StatusText = function StatusText(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$displayIcon = _ref.displayIcon,
      displayIcon = _ref$displayIcon === void 0 ? true : _ref$displayIcon,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? "danger" : _ref$status,
      props = _objectWithoutProperties(_ref, _excluded);

  var iconColor = getIconColor(status);
  var iconName = getIconName(status);
  return /*#__PURE__*/_react["default"].createElement(_StyledStatusText.StyledStatusText, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-status-text", className])
  }), displayIcon && iconColor && iconName && /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    color: iconColor,
    name: iconName,
    size: "sm"
  }), /*#__PURE__*/_react["default"].createElement(_BodyText.BodyText, {
    variant: status
  }, children));
};

exports.StatusText = StatusText;