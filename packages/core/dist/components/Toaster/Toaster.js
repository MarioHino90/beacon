"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeToast = exports.Toaster = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactToastify = require("react-toastify");

var _Toast = require("./Toast");

var _StyledToaster = require("./StyledToaster");

var _ToastCloseButton = require("./ToastCloseButton");

var _excluded = ["autoClose", "className", "id", "limit"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var makeToast = function makeToast(intent, content, options) {
  switch (intent) {
    case "danger":
      return _reactToastify.toast.error( /*#__PURE__*/_react["default"].createElement(_Toast.Toast, {
        intent: intent
      }, content), options);

    case "success":
      return _reactToastify.toast.success( /*#__PURE__*/_react["default"].createElement(_Toast.Toast, {
        intent: intent
      }, content), options);

    case "warning":
      return _reactToastify.toast.warn( /*#__PURE__*/_react["default"].createElement(_Toast.Toast, {
        intent: intent
      }, content), options);

    case "info":
    default:
      return _reactToastify.toast.info( /*#__PURE__*/_react["default"].createElement(_Toast.Toast, {
        intent: intent
      }, content), options);
  }
};

exports.makeToast = makeToast;

var Toaster = function Toaster(_ref) {
  var _ref$autoClose = _ref.autoClose,
      autoClose = _ref$autoClose === void 0 ? 5000 : _ref$autoClose,
      className = _ref.className,
      id = _ref.id,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 3 : _ref$limit,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_StyledToaster.StyledToaster, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-toaster", className]),
    closeOnClick: false,
    containerId: id,
    draggable: false,
    enableMultiContainer: true,
    hideProgressBar: true,
    closeButton: _ToastCloseButton.ToastCloseButton,
    newestOnTop: true,
    limit: limit,
    autoClose: autoClose,
    transition: _reactToastify.Slide
  }));
};

exports.Toaster = Toaster;
Toaster.displayName = "Toaster";