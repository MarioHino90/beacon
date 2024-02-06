"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopperRenderer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _StyledPopper = require("../StyledPopper");

var _PopperContext = require("../PopperContext");

var _usePopperPlacement2 = require("../usePopperPlacement");

var _useOutsideClick = require("../useOutsideClick");

var _useScrollListener = require("../useScrollListener");

var _excluded = ["children", "className", "popperStyle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopperRenderer = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _targetRef$current, _refToUse$current;

  var children = _ref.children,
      className = _ref.className,
      popperStyle = _ref.popperStyle,
      props = _objectWithoutProperties(_ref, _excluded);

  var refIfNoRefPassed = (0, _react.useRef)(null);
  var refToUse = ref || refIfNoRefPassed; // get desired props from context

  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      _usePopperContext$tip = _usePopperContext.tipVariant,
      tipVariant = _usePopperContext$tip === void 0 ? "dark" : _usePopperContext$tip,
      zIndex = _usePopperContext.zIndex,
      targetRef = _usePopperContext.targetRef,
      interactive = _usePopperContext.interactive,
      noArrow = _usePopperContext.noArrow;
  /**
   * placement state management
   */


  var _usePopperPlacement = (0, _usePopperPlacement2.usePopperPlacement)(ref),
      activePlacement = _usePopperPlacement.activePlacement,
      left = _usePopperPlacement.left,
      top = _usePopperPlacement.top,
      handlePlacementUpdate = _usePopperPlacement.handlePlacementUpdate;

  var targetDimensions = targetRef === null || targetRef === void 0 ? void 0 : (_targetRef$current = targetRef.current) === null || _targetRef$current === void 0 ? void 0 : _targetRef$current.getBoundingClientRect();
  var popperDimensions = refToUse === null || refToUse === void 0 ? void 0 : (_refToUse$current = refToUse.current) === null || _refToUse$current === void 0 ? void 0 : _refToUse$current.getBoundingClientRect();
  /**
   * outside click handler
   */

  (0, _useOutsideClick.useOutsideClick)(ref);
  /**
   * scroll listener
   */

  (0, _useScrollListener.useScrollListener)(handlePlacementUpdate);
  /**
   * update the placement after each render.
   * note that this won't trigger a re-render if the measurements haven't changed.
   */

  (0, _react.useLayoutEffect)(function () {
    handlePlacementUpdate();
  });
  return /*#__PURE__*/_react["default"].createElement(_StyledPopper.StyledPopper, _extends({}, props, {
    className: (0, _classnames["default"])("bcl-popper", className),
    ref: ref,
    left: left,
    top: top,
    placement: activePlacement,
    tipVariant: tipVariant,
    zIndex: zIndex,
    interactive: interactive,
    noArrow: noArrow,
    style: popperStyle,
    targetDimensions: targetDimensions,
    popperDimensions: popperDimensions
  }), typeof children === "function" ? children({
    activePlacement: activePlacement,
    targetDimensions: targetDimensions,
    popperDimensions: popperDimensions
  }) : children);
});
exports.PopperRenderer = PopperRenderer;
PopperRenderer.displayName = "PopperRenderer";