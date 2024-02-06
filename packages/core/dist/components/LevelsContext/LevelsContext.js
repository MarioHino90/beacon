"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLevelsContext = exports.LevelsContextProvider = exports.LevelsContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @fileoverview handles providing context for zIndexing
 *
 * the LevelsContextProvider handles calculating and providing the z indices of
 * it's children, NOT the component that renders it
 *
 */
var LevelsContext = /*#__PURE__*/(0, _react.createContext)(undefined);
/**
 * calculate the context for children components
 *
 * @param step the amount to "step" forward by
 * @param base the "base" z index if you are on level 1
 *
 */

exports.LevelsContext = LevelsContext;

var useLevelsContext = function useLevelsContext(step, base) {
  var prevLevel = (0, _react.useContext)(LevelsContext);

  if (!prevLevel) {
    return step + base;
  }

  return prevLevel + step;
};

exports.useLevelsContext = useLevelsContext;

var LevelsContextProvider = function LevelsContextProvider(_ref) {
  var step = _ref.step,
      base = _ref.base,
      levelOverride = _ref.level,
      children = _ref.children;
  var level = useLevelsContext(step, base);
  return /*#__PURE__*/_react["default"].createElement(LevelsContext.Provider, {
    value: levelOverride || level
  }, children);
};

exports.LevelsContextProvider = LevelsContextProvider;