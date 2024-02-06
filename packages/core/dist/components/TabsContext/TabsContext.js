"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContextProvider = exports.TabsContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _noop = _interopRequireDefault(require("lodash/noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @fileoverview context and a context provider for tabs info
 */
var TabsContext = /*#__PURE__*/(0, _react.createContext)({
  handleChange: _noop["default"],
  handleKeyPress: _noop["default"]
});
exports.TabsContext = TabsContext;

var TabsContextProvider = function TabsContextProvider(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange;

  var handleKeyPress = function handleKeyPress(id, _ref2) {
    var key = _ref2.key,
        charCode = _ref2.charCode;

    // if 'Space' or 'Enter'
    if (key === " " || charCode === 13) {
      onChange(id);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(TabsContext.Provider, {
    value: {
      handleChange: onChange,
      handleKeyPress: handleKeyPress
    }
  }, children);
};

exports.TabsContextProvider = TabsContextProvider;