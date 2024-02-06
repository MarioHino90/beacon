"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _beaconCore = require("@braze/beacon-core");

var _AlertModalIntentContext = require("../AlertModalIntentContext");

var _excluded = ["children", "className", "intent", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AlertModal = function AlertModal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      intent = _ref.intent,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_beaconCore.Modal, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-alert-modal", className]),
    size: size
  }), /*#__PURE__*/_react["default"].createElement(_AlertModalIntentContext.AlertModalIntentContext.Provider, {
    value: intent
  }, children));
};

exports.AlertModal = AlertModal;
AlertModal.displayName = "AlertModal";