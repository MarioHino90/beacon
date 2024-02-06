"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMenu = exports.Menu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTransitionGroup = require("react-transition-group");

var _Popper = require("../Popper");

var _StyledMenu = require("./StyledMenu");

var _useMenuA11y = require("./useMenuA11y");

var _excluded = ["children", "className", "closeOnClickInside", "id", "isOpen", "hideTopMargin", "onClose", "onOpen", "popperClassName", "popperId", "popperStyledCss", "size", "style", "styledCss", "target", "targetRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A function that abstracts the open/close logic of a menu component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the menu as its first element and the ref object to be passed to both the target and the menu
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
var useMenu = _Popper.usePopper;
exports.useMenu = useMenu;
var duration = 300;
var defaultStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0
};
var transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};

var Menu = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      closeOnClickInside = _ref.closeOnClickInside,
      id = _ref.id,
      isOpen = _ref.isOpen,
      hideTopMargin = _ref.hideTopMargin,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      popperClassName = _ref.popperClassName,
      popperId = _ref.popperId,
      popperStyledCss = _ref.popperStyledCss,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "lg" : _ref$size,
      style = _ref.style,
      styledCss = _ref.styledCss,
      target = _ref.target,
      targetRef = _ref.targetRef,
      props = _objectWithoutProperties(_ref, _excluded);

  // create a ref for the menu
  var menuRef = (0, _react.useRef)(null); // use the menu a11y hook to manage a11y behavior

  var activeDescendantId = (0, _useMenuA11y.useMenuA11y)(menuRef, {
    isOpen: isOpen,
    onClose: onClose,
    onOpen: onOpen,
    target: target,
    targetRef: targetRef
  });
  return /*#__PURE__*/_react["default"].createElement(_Popper.Popper, _extends({
    triggers: ["click"],
    untriggers: ["click"]
  }, props, {
    ref: ref,
    className: popperClassName,
    id: popperId,
    isOpen: isOpen,
    interactive: true,
    noArrow: true,
    popperStyledCss: _StyledMenu.popperOverrides,
    target: target,
    targetRef: targetRef,
    onClose: onClose,
    onOpen: onOpen,
    style: hideTopMargin ? {
      borderTop: 0
    } : undefined
  }), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
    "in": isOpen,
    timeout: duration,
    appear: true
  }, function (state) {
    return /*#__PURE__*/_react["default"].createElement(_StyledMenu.StyledMenu, {
      className: (0, _classnames["default"])(["bcl-menu", className]),
      id: id,
      style: _objectSpread(_objectSpread(_objectSpread({}, style), defaultStyle), transitionStyles[state]),
      styledCss: styledCss,
      ref: menuRef,
      tabIndex: -1,
      "aria-labelledby": props["aria-labelledby"],
      "aria-activedescendant": activeDescendantId,
      onClick: closeOnClickInside ? onClose : undefined,
      size: size,
      hideTopMargin: hideTopMargin
    }, children);
  }));
});

exports.Menu = Menu;
Menu.displayName = "Menu";