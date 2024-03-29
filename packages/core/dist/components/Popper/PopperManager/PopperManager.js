"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopperManager = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopperRenderer = require("../PopperRenderer");

var _usePopperEvents = require("../usePopperEvents");

var _PopperContext = require("../PopperContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PopperManager = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  // create a ref for the popper
  var newRef = (0, _react.useRef)(null);
  var popperRef = ref || newRef;
  /**
   * open/close event listeners per triggers
   */

  (0, _usePopperEvents.usePopperEvents)(popperRef); // get desired props from context

  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      isOpen = _usePopperContext.isOpen;

  return isOpen ? /*#__PURE__*/_react["default"].createElement(_PopperRenderer.PopperRenderer, _extends({}, props, {
    ref: popperRef
  })) : null;
});
exports.PopperManager = PopperManager;
PopperManager.displayName = "PopperManager";