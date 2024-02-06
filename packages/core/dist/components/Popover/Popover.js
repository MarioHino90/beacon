"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopover = exports.Popover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CloseButton = require("../CloseButton");

var _Popper = require("../Popper");

var _StyledPopover = require("./StyledPopover");

var _excluded = ["className", "children", "id", "isCloseEnabled", "onClose", "triggers", "untriggers", "placement", "noArrow", "popperClassName", "popperId", "style", "styledCss", "targetRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A function that abstracts the open/close logic of a popover component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the popover as its first element and the ref object to be passed to both the target and the popover
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
var usePopover = _Popper.usePopper;
exports.usePopover = usePopover;

var Popover = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      isCloseEnabled = _ref.isCloseEnabled,
      onClose = _ref.onClose,
      _ref$triggers = _ref.triggers,
      triggers = _ref$triggers === void 0 ? ["click"] : _ref$triggers,
      _ref$untriggers = _ref.untriggers,
      untriggers = _ref$untriggers === void 0 ? ["click"] : _ref$untriggers,
      placement = _ref.placement,
      noArrow = _ref.noArrow,
      popperClassName = _ref.popperClassName,
      popperId = _ref.popperId,
      style = _ref.style,
      styledCss = _ref.styledCss,
      targetRef = _ref.targetRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var refIfNoRefPassed = (0, _react.useRef)(null);
  var refToUse = ref || refIfNoRefPassed;
  return /*#__PURE__*/_react["default"].createElement(_Popper.Popper, _extends({}, props, {
    className: popperClassName,
    id: popperId,
    placement: placement,
    onClose: onClose,
    tipVariant: "light",
    triggers: triggers,
    untriggers: untriggers,
    noArrow: noArrow,
    ref: refToUse,
    targetRef: targetRef
  }), function (_ref2) {
    var activePlacement = _ref2.activePlacement,
        targetDimensions = _ref2.targetDimensions,
        popperDimensions = _ref2.popperDimensions;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_StyledPopover.StyledPopover, {
      className: className,
      id: id,
      noArrow: noArrow,
      placement: activePlacement,
      style: style,
      styledCss: styledCss,
      targetDimensions: targetDimensions,
      popperDimensions: popperDimensions
    }, children), isCloseEnabled && /*#__PURE__*/_react["default"].createElement(_CloseButton.CloseButton, {
      onClick: onClose
    }));
  });
});

exports.Popover = Popover;
Popover.displayName = "Popover";