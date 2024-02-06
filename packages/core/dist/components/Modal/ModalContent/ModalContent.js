"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = void 0;
exports.findHighest = findHighest;
exports.isNodeFound = isNodeFound;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _StyledModalContent = require("./StyledModalContent");

var _excluded = ["className", "isOpen", "outsideClickIgnoreClass", "toggle", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound( // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17

  /* istanbul ignore next */


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */


function findHighest( // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * React hook that creates event bindings that listen to whether the area outside
 * of that encompassed by the 'ref' is clicked on. If a user clicks on the outside
 * area, then the 'callbackFn' argument will be invoked.
 * @param ref HTML element to compare click event to and see if it was outside of
 * @param callbackFn function to call if outside area clicked
 */


function useOnClickOutside(ref, callbackFn) {
  var ignoreClassName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "bcl-ignore-click-outside";

  _react["default"].useEffect(function initUseOnClickOutside() {
    function outsideClickListener(event) {
      if (findHighest(event.target, ref.current, ignoreClassName) !== document) {
        return;
      }

      callbackFn();
    }

    document.addEventListener("mousedown", outsideClickListener);
    document.addEventListener("touchstart", outsideClickListener);
    return function cleanupUseOnClickOutside() {
      document.removeEventListener("mousedown", outsideClickListener);
      document.removeEventListener("touchstart", outsideClickListener);
    };
  }, [ref, callbackFn, ignoreClassName]);
}

var ModalContent = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      isOpen = _ref.isOpen,
      _ref$outsideClickIgno = _ref.outsideClickIgnoreClass,
      outsideClickIgnoreClass = _ref$outsideClickIgno === void 0 ? "bcl-ignore-click-outside" : _ref$outsideClickIgno,
      toggle = _ref.toggle,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, _excluded);

  // create handler for outside clicks
  var handleClickOutside = function handleClickOutside() {
    if (isOpen && toggle) {
      toggle();
    }
  }; // listen to outside clicks and toggle if open


  useOnClickOutside(ref, handleClickOutside, outsideClickIgnoreClass);
  return /*#__PURE__*/_react["default"].createElement(_StyledModalContent.StyledModalContent, _extends({}, props, {
    ref: ref,
    size: size,
    className: (0, _classnames["default"])(["bcl-modal-content", "bcl-modal-content-".concat(size), className])
  }));
});

exports.ModalContent = ModalContent;
ModalContent.displayName = "ModalContent";