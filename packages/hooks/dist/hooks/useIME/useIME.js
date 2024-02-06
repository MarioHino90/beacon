"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIME = useIME;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Handle both standard character input and IME character input transparently for any input element
 *
 * This can be used for both inputs and textareas.
 *
 * @example
 * const imeProps = useIME<HTMLInputElement>({ onChange: userSuppliedOnChange, value: userSuppliedValue, ref });
 * return (
 *   <input {...props} {...imeProps} />
 * )
 */
function useIME(_ref) {
  var userOnChange = _ref.onChange,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      userRef = _ref.ref;
  var valueString = value === undefined ? defaultValue || "" : value;
  var composing = (0, _react.useRef)(false);
  var cursor = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(valueString),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var inputRef = (0, _react.useRef)();
  var ref = userRef || inputRef; // these next 2 refs are solely to ensure we can use these values without triggering the effect to update value
  // unless the user explicitly changes the value passed in.

  var onChangeRef = (0, _react.useRef)(userOnChange);
  var currentInputRef = (0, _react.useRef)(ref.current); // store the last change event object. This is needed because
  // input method editors trigger "compositionend" after "change"
  // and getting a new "change" event by dispatching on the native
  // input does not trigger a new change event. Creating a new
  // SyntheticEvent requires using undocumented APIs.
  // Fortunately, since the change event does not store any state
  // except for the target, which is the input element, we can
  // safely "re-trigger" it by passing it to the onChange handler
  // the user passed in.

  var fakedChangeEvent = (0, _react.useRef)(); // ensure this is always up-to-date in the useEffect below

  onChangeRef.current = userOnChange; // ensure this is always up-to-date in the useEffect below

  currentInputRef.current = ref.current;
  (0, _react.useEffect)(function () {
    setText(valueString);

    if (currentInputRef.current) {
      // force the input to have the new value
      currentInputRef.current.value = valueString; // force the input to persist selection

      try {
        currentInputRef.current.setSelectionRange(cursor.current, cursor.current);
      } catch (err) {
        // Browsers such as safari support `setSelectionRange` for all
        // input types while others like chrome do not.
        if (!(err instanceof DOMException) || err.name !== "InvalidStateError") {
          throw err;
        }
      }

      if (fakedChangeEvent.current) {
        var _onChangeRef$current;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, fakedChangeEvent.current);
      }
    }
  }, [valueString]);
  var onChange = (0, _react.useCallback)(function (event) {
    setText(event.target.value);
    cursor.current = event.target.selectionStart;

    if (!composing.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userOnChange === null || userOnChange === void 0 ? void 0 : userOnChange(event);
    } else {
      fakedChangeEvent.current = event;
      event.persist();
    }
  }, [userOnChange]);
  var onCompositionStart = (0, _react.useCallback)(function () {
    composing.current = true;
  }, []);
  var onCompositionEnd = (0, _react.useCallback)(function () {
    composing.current = false;

    if (fakedChangeEvent.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userOnChange === null || userOnChange === void 0 ? void 0 : userOnChange(fakedChangeEvent.current);
    }
  }, [userOnChange]);
  return {
    value: text,
    defaultValue: defaultValue,
    ref: ref,
    onCompositionEnd: onCompositionEnd,
    onChange: onChange,
    onCompositionStart: onCompositionStart
  };
}