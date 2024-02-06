"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMenuA11y = void 0;

var _react = require("react");

var _Popper = require("../../Popper");

var _getKey = require("../getKey");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
var menuOpenKeyTypes = ["arrowDown", "arrowUp"];
var targetIgnoreKeyTypes = [].concat(menuOpenKeyTypes, ["home", "end", "letter", "esc"]);

var useMenuA11y = function useMenuA11y(menuRef, _ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      target = _ref.target,
      targetRef = _ref.targetRef;

  // set a small state for the focus target
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      openFocusTarget = _useState2[0],
      setOpenFocusTarget = _useState2[1]; // set a small state for the letter focus target


  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      letterFocusTarget = _useState4[0],
      setLetterFocusTarget = _useState4[1]; // set a small state for the active descendant id


  var _useState5 = (0, _react.useState)(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      activeDescendantId = _useState6[0],
      setActiveDescendantId = _useState6[1]; // side effects for the key behavior on the target


  (0, _react.useEffect)(function () {
    // get target element for comparison
    var element = (0, _Popper.getElement)({
      target: target,
      targetRef: targetRef
    }); // only do this if the target element is defined, otherwise bail

    if (!element) {
      return;
    } // listen to keyboard events on the menu


    var targetEventListener = function targetEventListener(event) {
      // map keycodes to variable for easy reference
      var keyType = (0, _getKey.getKey)(event); // if key type is not defined or is one we want to ignore, then bail

      if (!keyType || !targetIgnoreKeyTypes.includes(keyType)) {
        return;
      } // create some variables to make this logic easier to think through


      var homeAndClosed = keyType === "home" && !isOpen;
      var endAndClosed = keyType === "end" && !isOpen; // prevent default behavior to avoid page scrolling unintentionally
      // UNLESS user pressed home/end and the menu is closed

      if (!homeAndClosed && !endAndClosed) {
        event.preventDefault();
      } // only open when key is up/down arrow, home, or end


      if (menuOpenKeyTypes.includes(keyType)) {
        onOpen();
      } // if arrow down, indicate that we should focus on the first element


      if (keyType === "arrowDown") {
        setOpenFocusTarget("first");
      } // if arrow up, indicate that we should focus on the last element
      else if (keyType === "arrowUp") {
        setOpenFocusTarget("last");
      } // if home, indicate that we should focus on the first element
      else if (keyType === "home" && isOpen) {
        setOpenFocusTarget("first");
      } // if end, indicate that we should focus on the last element
      else if (keyType === "end" && isOpen) {
        setOpenFocusTarget("last");
      } // if a letter, indicate that we should focus on the corresponding element
      else if (keyType === "letter") {
        setLetterFocusTarget(event.key);
      } // if esc, close the menu
      else if (keyType === "esc") {
        onClose();
      }
    }; // add event listener to the target element


    element.addEventListener("keydown", targetEventListener); // make sure to cleanup when unmounting

    return function () {
      element.removeEventListener("keydown", targetEventListener);
    };
  }, [isOpen, onClose, onOpen, target, targetRef]); // clean up open focus target when menu is closed

  (0, _react.useEffect)(function () {
    if (!isOpen) {
      setOpenFocusTarget(null);
    }
  }, [isOpen, setOpenFocusTarget]);
  /**
   * Function to get all elements within the menu component
   * @returns an array where the first element is the array of elements inside the menu
   *          and the second element is the menu node (or both null)
   */

  var getMenuElements = (0, _react.useCallback)(function () {
    // map menuRef.current to node to keep track
    var node = menuRef.current; // only do this if the menu is open AND menuRef.current is defined, otherwise bail

    if (!isOpen || !node) {
      return [null, null];
    } // get all the elements inside menu


    var elem = Array.from(node.querySelectorAll(focusableElements.join(", "))) // filter out disabled elements, if any
    .filter(function (el) {
      return !el.hasAttribute("disabled");
    });
    return [elem, node];
  }, [isOpen, menuRef]);
  /**
   * Function to focus on a descendant, update the aria-activedescendent,
   * and optionally reset focus target
   * @param descendants array of HTML Elements inside the menu
   * @param descendantIndex indicates specific descendant to focus on
   * @param resetFocusTarget indicates whether the focus target should be reset back to null
   */

  var focusOnDescendantByIndex = (0, _react.useCallback)(function (descendants, descendantIndex) {
    var resetFocusTarget = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // get desired descendant
    var descendant = descendantIndex === "first" ? // if index is 'first', get first descendant
    descendants[0] : descendantIndex === "last" ? // if index is 'last', get last descendant
    descendants[descendants.length - 1] : // otherwise, get descendant indicated by its index
    descendants[descendantIndex]; // set active descendant id

    setActiveDescendantId(descendant.id); // reset the focus target to 'null', if desired

    if (resetFocusTarget) {
      setOpenFocusTarget(null);
    }

    return descendant.focus();
  }, []);
  /**
   * Function to focus on a descendant, update the aria-activedescendent,
   * and optionally reset focus target
   * @param letter indicates first letter to search for in aria-labels
   * @param resetFocusTarget indicates whether the focus target should be reset back to null
   */

  var focusOnDescendantByLetter = (0, _react.useCallback)(function (letter) {
    var resetFocusTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // get menu elements
    var _getMenuElements = getMenuElements(),
        _getMenuElements2 = _slicedToArray(_getMenuElements, 1),
        elem = _getMenuElements2[0]; // if elements not defined, bail


    if (!elem) {
      return;
    } // get values matching user input


    var matches = elem // filter to just the elements with labels starting with that key
    .filter(function (e) {
      var _e$getAttribute;

      return ((_e$getAttribute = e.getAttribute("aria-label")) === null || _e$getAttribute === void 0 ? void 0 : _e$getAttribute[0]) === letter.toLowerCase();
    }); // next, check if the current focused element is among them and get its index

    var currIndex = matches.findIndex(function (m) {
      return m === document.activeElement;
    }); // if curr index not found, then just focus on the first one
    // otherwise, get the next one and focus on that

    var descendant = currIndex === -1 ? matches.shift() : matches[(currIndex + 1) % matches.length]; // reset the letter focus target to 'null', if desired

    if (resetFocusTarget) {
      setLetterFocusTarget(null);
    } // if descendant not defined, bail


    if (!descendant) {
      return;
    } // set active descendant id


    setActiveDescendantId(descendant.id); // otherwise, get the next one and focus on that

    return descendant.focus();
  }, [getMenuElements]); // side effects for menu element selection behavior when user is focused on target

  (0, _react.useEffect)(function () {
    // get menu elements
    var _getMenuElements3 = getMenuElements(),
        _getMenuElements4 = _slicedToArray(_getMenuElements3, 1),
        elem = _getMenuElements4[0]; // if elements not defined, bail


    if (!elem) {
      return;
    } // if focus target is 'first' focus on the first element and set focus target to 'null'


    if (openFocusTarget === "first") {
      focusOnDescendantByIndex(elem, "first", true);
    } // if focus target is 'last' focus on the last element and set focus target to 'null'


    if (openFocusTarget === "last") {
      focusOnDescendantByIndex(elem, "last", true);
    }
  }, [focusOnDescendantByIndex, getMenuElements, openFocusTarget]); // side effects for letter key behavior while user is focused on target

  (0, _react.useEffect)(function () {
    // get menu elements
    var _getMenuElements5 = getMenuElements(),
        _getMenuElements6 = _slicedToArray(_getMenuElements5, 1),
        elem = _getMenuElements6[0]; // if elements not defined, bail


    if (!elem) {
      return;
    } // if a letter focus target is defined AND menu is open,
    // then focus on the first descendant beginning with the letter focus target


    if (letterFocusTarget && isOpen) {
      focusOnDescendantByLetter(letterFocusTarget, true);
    }
  }, [focusOnDescendantByLetter, getMenuElements, isOpen, letterFocusTarget]); // side effects for key behavior within the menu

  (0, _react.useEffect)(function () {
    // get menu elements and the menu node
    var _getMenuElements7 = getMenuElements(),
        _getMenuElements8 = _slicedToArray(_getMenuElements7, 2),
        elem = _getMenuElements8[0],
        node = _getMenuElements8[1]; // if neither the elements nor the node is defined, bail


    if (!elem || !node) {
      return;
    } // listen to keyboard events on the menu


    var menuEventListener = function menuEventListener(event) {
      // map keycodes to variable for easy reference
      var keyType = (0, _getKey.getKey)(event); // get index of the child that is currently focused

      var activeElemIndex = elem.findIndex(function (e) {
        return e === document.activeElement;
      }); // prevent default behavior and propagation to avoid page from doing things (e.g. scrolling) unintentionally

      if (keyType !== "enter") {
        event.preventDefault();
        event.stopPropagation();
      } // if arrow down, shift focus to next element in elem


      if (keyType === "arrowDown") {
        return focusOnDescendantByIndex(elem, (activeElemIndex + 1) % elem.length);
      } // if arrow up, shift focus to previous element in elem


      if (keyType === "arrowUp") {
        return focusOnDescendantByIndex(elem, activeElemIndex === 0 ? elem.length - 1 : (activeElemIndex - 1) % elem.length);
      } // if home key, shift focus to first element in elem


      if (keyType === "home") {
        return focusOnDescendantByIndex(elem, "first");
      } // if arrow up OR end key, shift focus to last element in elem


      if (keyType === "end") {
        return focusOnDescendantByIndex(elem, "last");
      } // set focus on the menu button


      if (keyType === "enter") {
        // get target element for comparison
        var element = (0, _Popper.getElement)({
          target: target,
          targetRef: targetRef
        });
        return element === null || element === void 0 ? void 0 : element.focus();
      } // close menu and set focus on the menu button


      if (keyType === "esc") {
        // get target element for comparison
        var _element = (0, _Popper.getElement)({
          target: target,
          targetRef: targetRef
        });

        onClose();
        return _element === null || _element === void 0 ? void 0 : _element.focus();
      } // if user types a letter, then focus on the next button starting with that key, if any


      if (keyType === "letter") {
        return focusOnDescendantByLetter(event.key);
      }
    }; // add event listener to the menu


    node.addEventListener("keydown", menuEventListener); // make sure to cleanup when unmounting

    return function () {
      node.removeEventListener("keydown", menuEventListener);
    };
  }, [focusOnDescendantByIndex, focusOnDescendantByLetter, getMenuElements, isOpen, menuRef, onClose, openFocusTarget, target, targetRef]);
  return activeDescendantId;
};

exports.useMenuA11y = useMenuA11y;