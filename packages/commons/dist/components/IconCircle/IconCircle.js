"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconCircle = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconCore = require("@braze/beacon-core");

var _StyledIconCircle = require("./StyledIconCircle");

var _excluded = ["className", "intent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getIconByIntent = function getIconByIntent(intent) {
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

var IconCircle = function IconCircle(_ref) {
  var className = _ref.className,
      _ref$intent = _ref.intent,
      intent = _ref$intent === void 0 ? "info" : _ref$intent,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_StyledIconCircle.StyledIconCircle, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-icon-circle", className]),
    intent: intent
  }), /*#__PURE__*/_react["default"].createElement(_beaconCore.Icon, {
    size: "1x",
    name: getIconByIntent(intent)
  }));
};

exports.IconCircle = IconCircle;
IconCircle.displayName = "IconCircle";