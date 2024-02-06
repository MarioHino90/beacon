"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = exports.InlineInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _InlineInputEditMode = require("./InlineInputEditMode");

var _InlineInputViewMode = require("./InlineInputViewMode");

var _excluded = ["children", "disabled", "invalid", "onChange", "onSaveClick", "onCancelClick", "onClearClick", "placeholder", "vSize", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isEditing: false,
  prevValue: "",
  transitionState: "waiting"
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "SET_EDIT_MODE":
      return _objectSpread(_objectSpread({}, state), {}, {
        isEditing: action.value
      });

    case "SET_PREV_VALUE":
      return _objectSpread(_objectSpread({}, state), {}, {
        prevValue: action.value
      });

    case "SAVE_ACTION":
      return _objectSpread(_objectSpread({}, state), {}, {
        prevValue: action.value,
        isEditing: false
      });

    case "CANCEL_ACTION":
      return _objectSpread(_objectSpread({}, state), {}, {
        transitionState: "canceling"
      });

    case "CANCEL_COMPLETE_ACTION":
      return _objectSpread(_objectSpread({}, state), {}, {
        transitionState: "waiting",
        isEditing: false
      });

    case "CLEAR_ACTION":
      return _objectSpread(_objectSpread({}, state), {}, {
        transitionState: "clearing"
      });

    case "CLEAR_COMPLETE_ACTION":
      return _objectSpread(_objectSpread({}, state), {}, {
        transitionState: "waiting"
      });

    default:
      return state;
  }
};

exports.reducer = reducer;

var InlineInput = function InlineInput(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      invalid = _ref.invalid,
      onChange = _ref.onChange,
      onSaveClick = _ref.onSaveClick,
      onCancelClick = _ref.onCancelClick,
      onClearClick = _ref.onClearClick,
      placeholder = _ref.placeholder,
      _ref$vSize = _ref.vSize,
      vSize = _ref$vSize === void 0 ? "md" : _ref$vSize,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  // create refs for focus and synthetic event generation
  var inputRef = (0, _react.useRef)(null);
  var saveButtonRef = (0, _react.useRef)(null);
  var cancelButtonRef = (0, _react.useRef)(null); // create internal state

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isEditing = _useReducer2$.isEditing,
      prevValue = _useReducer2$.prevValue,
      transitionState = _useReducer2$.transitionState,
      dispatch = _useReducer2[1];
  /**
   * function that synthetically invokes a DOM change event
   * that can be used by `onChange` handlers using the standard
   * 'event' pattern
   *
   * The core reason this function exists is to avoid having to
   * create an `onChange` function that is called by just the
   * current 'value' parameter. This desire is supported by the
   * following points:
   * - Calling `onChange` with just the new value is inconsistent
   *   behavior with all other input fields, similar to how `Select`
   *   works and potentially a cause of headaches/confusion in practice
   * - A component that calls `onChange` with just the updated value
   *   does not integrate as nicely with Formik since the latter relies
   *   on other information in the event object (e.g. `name` to
   *   determine which field in state the input maps to) and requires
   *   workarounds like using setFieldValue, which is suboptimal imo
   */


  var makeSyntheticChangeEvent = (0, _react.useCallback)(function (action) {
    var input = inputRef.current; // if input is not defined, then stop

    if (!input) {
      return;
    } // create synthetic input event


    var inputEvent = new Event("input", {
      bubbles: true
    }); // dispatch synthetic event using current controlled value of the input field

    input.dispatchEvent(inputEvent); // fire the onChange prop, if it exists
    // TODO: not a fan of going through 'unknown',
    // there might be better way to do this

    onChange === null || onChange === void 0 ? void 0 : onChange(inputEvent, action);
  }, [onChange]);
  /**
   * function that synthetically invokes a DOM click event
   * that can be used by `click` handlers using the standard
   * 'event' pattern
   *
   * We want to create these events in the cases where keyboard
   * shortcuts simulate the actions of clicking buttons
   */

  var makeSyntheticClickEvent = (0, _react.useCallback)(function (button) {
    // if input is not defined, then stop
    if (!button) {
      return;
    } // create synthetic click event


    var clickEvent = new Event("click", {
      bubbles: true
    }); // dispatch synthetic event using the given button

    button.dispatchEvent(clickEvent);
  }, []);
  /**
   * on clear click, reset tempValue to empty string
   */

  var handleClear = (0, _react.useCallback)(function (event) {
    var _inputRef$current;

    // call 'onClearClick' prop if defined
    onClearClick === null || onClearClick === void 0 ? void 0 : onClearClick(event); // update state to indicate that the clear action has been invoked

    dispatch({
      type: "CLEAR_ACTION"
    }); // focus user back into the input field

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, [onClearClick]);
  /**
   * on enable editing click, set isEditing to true and
   * set tempValue equal to user supplied value, if appl.
   */

  var handleClickToEdit = (0, _react.useCallback)(function () {
    // if component is disabled, then bail
    if (disabled) {
      return;
    } // update the state to enable editing


    dispatch({
      type: "SET_EDIT_MODE",
      value: true
    });
  }, [disabled]);
  /**
   * on enable editing key event, set isEditing to true
   * and set tempValue equal to user supplies value, if appl.
   * ONLY applies to "space" or "enter" keys
   */

  var handleKeyDownToEdit = (0, _react.useCallback)(function (event) {
    // if key is not space or enter, then abort
    if (event.key !== " " && event.key !== "Enter" && event.keyCode !== 32 && event.keyCode !== 13) {
      return;
    } // prevent default so we don't get undesired space in the input field via propagation


    event.preventDefault(); // enable edit mode

    dispatch({
      type: "SET_EDIT_MODE",
      value: true
    });
  }, []);
  /**
   * handle cancel click
   */

  var handleCancelClick = (0, _react.useCallback)(function (event) {
    // attempt to call 'onCancelClick' with the event
    onCancelClick === null || onCancelClick === void 0 ? void 0 : onCancelClick(event); // update state to indicate that the cancel action has been invoked

    dispatch({
      type: "CANCEL_ACTION"
    });
  }, [onCancelClick]);
  /**
   * Create and fire a synthetic change event when user clicks
   * on save and call onChange with that event to update state
   */

  var handleSaveClick = (0, _react.useCallback)(function (event) {
    // fire a synthetic change event with "save" action
    makeSyntheticChangeEvent("save"); // attempt to call 'onSaveClick' with the event

    onSaveClick === null || onSaveClick === void 0 ? void 0 : onSaveClick(event); // update state with a new 'value' prop as our baseline

    dispatch({
      type: "SAVE_ACTION",
      value: value
    });
  }, [makeSyntheticChangeEvent, onSaveClick, value]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    // if invalid, then bail
    if (invalid) {
      return;
    }

    if (event.key === "Enter") {
      // fire a synthetic save click event
      makeSyntheticClickEvent(saveButtonRef.current);
    }

    if (event.key === "Escape") {
      // fire a synthetic cancel click event
      makeSyntheticClickEvent(cancelButtonRef.current);
    }
  }, [invalid, makeSyntheticClickEvent]);
  /**
   * when switched into edit mode, focus on input box
   */

  (0, _react.useEffect)(function () {
    if (isEditing) {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
    }
  }, [isEditing]);
  /**
   * when 'disabled' prop is changed to be true,
   * then automatically switch to view mode
   */

  (0, _react.useEffect)(function () {
    if (disabled) {
      dispatch({
        type: "SET_EDIT_MODE",
        value: false
      });
    }
  }, [disabled]);
  /**
   * when 'invalid' prop is changed to true,
   * then automatically switch to edit mode UNLESS disabled
   */

  (0, _react.useEffect)(function () {
    // if component is disabled, then bail
    if (disabled) {
      return;
    } // otherwise, if component is invalid, switch to edit mode
    // since we should allow user to simply move on


    if (invalid && !isEditing) {
      dispatch({
        type: "SET_EDIT_MODE",
        value: true
      });
    }
  }, [invalid, disabled, isEditing]);
  /**
   * when switching into edit mode, set 'prevValue' to equal prop 'value'
   *
   * NOTE: do NOT include 'value' since we don't want to update 'prevValue'
   * every time 'value' changes
   */

  (0, _react.useEffect)(function () {
    if (isEditing) {
      dispatch({
        type: "SET_PREV_VALUE",
        value: value
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isEditing]);
  /**
   * when 'isCanceling' is true, make synthetic change event using
   * 'prevValue' as input field value
   */

  (0, _react.useEffect)(function () {
    if (transitionState === "canceling") {
      // if component is canceling the input change, then
      // make a synthetic change event
      makeSyntheticChangeEvent("cancel"); // update state to complete cancel action

      dispatch({
        type: "CANCEL_COMPLETE_ACTION"
      });
    }
  }, [transitionState, makeSyntheticChangeEvent]);
  /**
   * when 'isClearing' is true, make synthetic change event using
   * an empty string as input field value
   */

  (0, _react.useEffect)(function () {
    if (transitionState === "clearing") {
      // if component is clearing the input, then
      // make a synthetic change event
      makeSyntheticChangeEvent("clear"); // update state to complete clear action

      dispatch({
        type: "CLEAR_COMPLETE_ACTION"
      });
    }
  }, [transitionState, makeSyntheticChangeEvent]);

  if (!isEditing && !invalid) {
    return /*#__PURE__*/_react["default"].createElement(_InlineInputViewMode.InlineInputViewMode, {
      disabled: disabled,
      onClick: handleClickToEdit,
      onKeyDownCapture: handleKeyDownToEdit,
      placeholder: placeholder,
      vSize: vSize,
      value: value
    }, children);
  }

  return /*#__PURE__*/_react["default"].createElement(_InlineInputEditMode.InlineInputEditMode, _extends({}, props, {
    disabled: disabled,
    inputRef: inputRef,
    saveButtonRef: saveButtonRef,
    cancelButtonRef: cancelButtonRef,
    placeholder: placeholder,
    invalid: invalid,
    onCancelClick: handleCancelClick,
    onChange: onChange,
    onClearClick: handleClear,
    onSaveClick: handleSaveClick,
    onKeyDown: handleKeyDown,
    value: transitionState === "canceling" ? prevValue : transitionState === "clearing" ? "" : value,
    vSize: vSize
  }));
};

exports.InlineInput = InlineInput;
InlineInput.displayName = "InlineInput";