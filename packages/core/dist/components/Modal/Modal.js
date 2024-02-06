"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewFocusIndex = exports.ModalCloseButton = exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CloseButton = require("../CloseButton");

var _Portal = require("../Portal");

var _LevelsContext = require("../LevelsContext");

var _ModalContext = require("../ModalContext");

var _ModalBackdrop = require("./ModalBackdrop");

var _ModalContent = require("./ModalContent");

var _ModalDialog = require("./ModalDialog");

var _StyledModal = require("./StyledModal");

var _useModalLevel = require("./useModalLevel");

var _excluded = ["autoFocus", "className", "children", "isOpen", "keyboard", "node", "size", "toggle", "zIndex"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];

function getFocusableChildren(ref) {
  var _ref$current;

  return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelectorAll(focusableElements.join(", "));
}

function getFocusedChild(ref) {
  var currentFocus;
  var focusableChildren = getFocusableChildren(ref);

  if (typeof document !== "undefined") {
    currentFocus = document.activeElement;
  } else {
    // we can't test this with Cypress, so ignore it

    /* istanbul ignore next */
    currentFocus = focusableChildren === null || focusableChildren === void 0 ? void 0 : focusableChildren[0];
  }

  return currentFocus;
}

function setFocus(ref) {
  var _ref$current2;

  if (typeof ((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.focus) === "function") {
    ref.current.focus();
  }
}
/**
 * gets the index of the new focusable item to focus on
 *
 * @param currentFocus index of the currently focused item
 * @param totalFocusable number of total focusable items
 * @param isShifted indicates if the shift key is pressed
 *
 * @returns the index of the item to now focus on
 */


var getNewFocusIndex = function getNewFocusIndex(currentFocus, totalFocusable, isShifted) {
  if (isShifted) {
    // if the shift key is pressed, and at beginning of list,
    // wrap to the end of the list
    if (currentFocus === 0) {
      return totalFocusable - 1;
    } // if the shift key is pressed and not at the beginning of list,
    // go back one


    return currentFocus - 1;
  } // if not at the end of the list, go forward one


  if (currentFocus < totalFocusable - 1) {
    return currentFocus + 1;
  } // otherwise, wrap to the beginning of the list


  return 0;
};

exports.getNewFocusIndex = getNewFocusIndex;
var ModalCloseButton = (0, _styledComponents["default"])(_CloseButton.CloseButton).withConfig({
  displayName: "Modal__ModalCloseButton",
  componentId: "sc-bbma82-0"
})(["position:absolute;"]);
exports.ModalCloseButton = ModalCloseButton;

var Modal = function Modal(_ref) {
  var _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
      className = _ref.className,
      children = _ref.children,
      isOpen = _ref.isOpen,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      node = _ref.node,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "sm" : _ref$size,
      toggle = _ref.toggle,
      zIndex = _ref.zIndex,
      props = _objectWithoutProperties(_ref, _excluded);

  // refs here
  var wrapperRef = _react["default"].useRef(null);

  var contentRef = _react["default"].useRef(null); // event handlers here


  var handleEscape = function handleEscape(event) {
    if (isOpen && keyboard && event.keyCode === 27 && toggle) {
      event.preventDefault();
      event.stopPropagation();
      toggle(event);
    }
  };

  var handleTab = function handleTab(event) {
    // if not a tab event, return out
    if (event.keyCode !== 9 || !keyboard) {
      return;
    } // get focusable children


    var focusableChildren = getFocusableChildren(wrapperRef);

    if (!focusableChildren) {
      return;
    }

    var totalFocusable = focusableChildren.length;

    if (totalFocusable === 0) {
      return;
    } // get the current focused child and index


    var currentFocus = getFocusedChild(wrapperRef);
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i++) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    event.preventDefault();
    var newFocus = getNewFocusIndex(focusedIndex, totalFocusable, event.shiftKey);
    focusableChildren[newFocus].focus();
  }; // hooks here


  _react["default"].useEffect(function () {
    if (autoFocus && isOpen) {
      setFocus(contentRef);
    }
  }, [autoFocus, isOpen]);

  _react["default"].useEffect(function () {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return function () {
      if (isOpen) {
        // on unmount, restore scrolling on the body
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  var calcZIndex = (0, _useModalLevel.useModalLevel)(zIndex);
  return /*#__PURE__*/_react["default"].createElement(_Portal.Portal, {
    node: node
  }, isOpen && /*#__PURE__*/_react["default"].createElement(_LevelsContext.LevelsContextProvider, {
    step: _useModalLevel.MODAL_LEVEL_TICK,
    base: _useModalLevel.BASE_Z_INDEX,
    level: zIndex ? zIndex + 2 * _useModalLevel.MODAL_LEVEL_TICK : undefined
  }, /*#__PURE__*/_react["default"].createElement(_ModalContext.ModalContextProvider, {
    size: size
  }, /*#__PURE__*/_react["default"].createElement(_StyledModal.StyledModal, _extends({}, props, {
    isOpen: isOpen,
    className: (0, _classnames["default"])(["bcl-modal", className]),
    onKeyUp: handleEscape,
    onKeyDown: handleTab,
    ref: wrapperRef
  }), /*#__PURE__*/_react["default"].createElement(_ModalBackdrop.ModalBackdrop, {
    zIndex: calcZIndex - _useModalLevel.MODAL_LEVEL_TICK
  }), /*#__PURE__*/_react["default"].createElement(_ModalDialog.ModalDialog, {
    isOpen: isOpen,
    zIndex: calcZIndex
  }, /*#__PURE__*/_react["default"].createElement(_ModalContent.ModalContent, {
    ref: contentRef,
    tabIndex: 0,
    isOpen: isOpen,
    toggle: toggle,
    size: size
  }, toggle && /*#__PURE__*/_react["default"].createElement(ModalCloseButton, {
    className: "close-icon",
    onClick: toggle
  }), children))))));
};

exports.Modal = Modal;
Modal.displayName = "Modal";