"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerAlertLink = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../Icon");

var _IntentContext = require("../BannerAlert/IntentContext");

var _StyledBannerButton = require("./StyledBannerButton");

var _StyledBannerLink = require("./StyledBannerLink");

var _StyledCaretWrapper = require("./StyledCaretWrapper");

var _excluded = ["intent", "children", "className", "onClick", "as", "caret"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BannerAlertLink = function BannerAlertLink(_ref) {
  var intentOverride = _ref.intent,
      children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? "button" : _ref$as,
      caret = _ref.caret,
      props = _objectWithoutProperties(_ref, _excluded);

  var intentContext = (0, _react.useContext)(_IntentContext.IntentContext);
  var intent = intentOverride || intentContext;
  var caretName = "angle-".concat(caret);
  return as === "a" ? /*#__PURE__*/_react["default"].createElement(_StyledBannerLink.StyledBannerLink, _extends({}, props, {
    className: (0, _classnames["default"])("bcl-banner-alert-link", _classnames["default"]),
    onClick: onClick,
    intent: intent
  }), children, caret ? /*#__PURE__*/_react["default"].createElement(_StyledCaretWrapper.StyledCaretWrapper, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: caretName
  })) : null) : /*#__PURE__*/_react["default"].createElement(_StyledBannerButton.StyledBannerButton, _extends({
    onClick: onClick,
    intent: intent
  }, props, {
    className: (0, _classnames["default"])("bcl-banner-alert-link", _classnames["default"])
  }), children, caret ? /*#__PURE__*/_react["default"].createElement(_StyledCaretWrapper.StyledCaretWrapper, null, /*#__PURE__*/_react["default"].createElement(_Icon.Icon, {
    name: caretName
  })) : null);
};

exports.BannerAlertLink = BannerAlertLink;
BannerAlertLink.displayName = "BannerAlertLink";