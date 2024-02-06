"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopperContext = exports.placementTypes = exports.defaultValue = exports.PopperContextProvider = exports.PopperContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _LevelsContext = require("../../LevelsContext");

var _excluded = ["children", "closeOnClickOutside", "defaultPlacement", "distance", "ignoreCloseOnClickOutsideClassName", "isIgnoreCloseOnClickOutsideEnabled", "placement", "skidding", "triggers", "untriggers", "zIndex"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var placementTypes = ["auto", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
exports.placementTypes = placementTypes;

var doNothing = function doNothing() {
  return null;
}; // this ups coverage slightly


doNothing();
var defaultValue = {
  onOpen: doNothing,
  onClose: doNothing
};
exports.defaultValue = defaultValue;
var PopperContext = /*#__PURE__*/(0, _react.createContext)(defaultValue);
exports.PopperContext = PopperContext;

var usePopperContext = function usePopperContext() {
  return (0, _react.useContext)(PopperContext);
};

exports.usePopperContext = usePopperContext;

var PopperContextProvider = function PopperContextProvider(_ref) {
  var children = _ref.children,
      _ref$closeOnClickOuts = _ref.closeOnClickOutside,
      closeOnClickOutside = _ref$closeOnClickOuts === void 0 ? true : _ref$closeOnClickOuts,
      _ref$defaultPlacement = _ref.defaultPlacement,
      defaultPlacement = _ref$defaultPlacement === void 0 ? "bottom" : _ref$defaultPlacement,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 10 : _ref$distance,
      _ref$ignoreCloseOnCli = _ref.ignoreCloseOnClickOutsideClassName,
      ignoreCloseOnClickOutsideClassName = _ref$ignoreCloseOnCli === void 0 ? "bcl-popper-ignore-click" : _ref$ignoreCloseOnCli,
      _ref$isIgnoreCloseOnC = _ref.isIgnoreCloseOnClickOutsideEnabled,
      isIgnoreCloseOnClickOutsideEnabled = _ref$isIgnoreCloseOnC === void 0 ? true : _ref$isIgnoreCloseOnC,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? "auto" : _ref$placement,
      _ref$skidding = _ref.skidding,
      skidding = _ref$skidding === void 0 ? 0 : _ref$skidding,
      _ref$triggers = _ref.triggers,
      triggers = _ref$triggers === void 0 ? ["mouseenter", "focus"] : _ref$triggers,
      _ref$untriggers = _ref.untriggers,
      untriggers = _ref$untriggers === void 0 ? ["mouseleave", "blur"] : _ref$untriggers,
      zIndexProp = _ref.zIndex,
      props = _objectWithoutProperties(_ref, _excluded);

  var baseIndex = (0, _react.useContext)(_LevelsContext.LevelsContext);
  var zIndex = zIndexProp === undefined ? baseIndex || 1031 : zIndexProp;
  return /*#__PURE__*/_react["default"].createElement(PopperContext.Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      closeOnClickOutside: closeOnClickOutside,
      defaultPlacement: defaultPlacement,
      distance: distance,
      ignoreCloseOnClickOutsideClassName: ignoreCloseOnClickOutsideClassName,
      isIgnoreCloseOnClickOutsideEnabled: isIgnoreCloseOnClickOutsideEnabled,
      placement: placement,
      skidding: skidding,
      triggers: triggers,
      untriggers: untriggers,
      zIndex: zIndex
    })
  }, children);
};

exports.PopperContextProvider = PopperContextProvider;