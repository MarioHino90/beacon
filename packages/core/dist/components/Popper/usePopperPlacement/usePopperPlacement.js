"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopperPlacement = void 0;

var _react = require("react");

var _PopperContext = require("../PopperContext");

var _utils = require("../utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  left: 0,
  top: 0,
  activePlacement: "bottom"
};

var reducer = function reducer(state, action) {
  if (action.left !== state.left || action.top !== state.top || action.activePlacement !== state.activePlacement) {
    return _objectSpread(_objectSpread({}, state), {}, {
      top: action.top,
      left: action.left,
      activePlacement: action.activePlacement
    });
  } else {
    return state;
  }
};

var usePopperPlacement = function usePopperPlacement(popperRef) {
  // state for coordinate placement
  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      activePlacement = _useReducer2$.activePlacement,
      left = _useReducer2$.left,
      top = _useReducer2$.top,
      dispatch = _useReducer2[1]; // get popper context


  var _usePopperContext = (0, _PopperContext.usePopperContext)(),
      defaultPlacement = _usePopperContext.defaultPlacement,
      distance = _usePopperContext.distance,
      interactive = _usePopperContext.interactive,
      placement = _usePopperContext.placement,
      portalRef = _usePopperContext.portalRef,
      skidding = _usePopperContext.skidding,
      target = _usePopperContext.target,
      targetRef = _usePopperContext.targetRef;
  /**
   * Function that gets popper coordinates and updates state
   */


  var handlePlacementUpdate = (0, _react.useCallback)(function () {
    // get element from targetRef or target
    var element = (0, _utils.getElement)({
      targetRef: targetRef,
      target: target
    }); // calculate what the placement of the popper should be relative to target

    var _makePopperPlacement = (0, _utils.makePopperPlacement)(element, popperRef, {
      defaultPlacement: defaultPlacement,
      distance: distance,
      interactive: interactive,
      placement: placement,
      portalRef: portalRef,
      skidding: skidding
    }),
        activePlacement = _makePopperPlacement.activePlacement,
        left = _makePopperPlacement.left,
        top = _makePopperPlacement.top; // only update placement state if the coordinates have changed


    dispatch({
      left: left,
      top: top,
      activePlacement: activePlacement
    });
  }, [defaultPlacement, distance, interactive, placement, popperRef, portalRef, skidding, target, targetRef]);
  return {
    left: left,
    top: top,
    handlePlacementUpdate: handlePlacementUpdate,
    activePlacement: activePlacement
  };
};

exports.usePopperPlacement = usePopperPlacement;