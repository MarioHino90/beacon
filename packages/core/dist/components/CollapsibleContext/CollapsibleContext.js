"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsibleContextProvider = exports.CollapsibleContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _noop = _interopRequireDefault(require("lodash/noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CollapsibleContext = /*#__PURE__*/(0, _react.createContext)({
  isOpen: false,
  toggle: _noop["default"]
});
exports.CollapsibleContext = CollapsibleContext;

var CollapsibleContextProvider = function CollapsibleContextProvider(_ref) {
  var children = _ref.children,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? _noop["default"] : _ref$toggle;
  var value = (0, _react.useMemo)(function () {
    return {
      isOpen: isOpen,
      toggle: toggle
    };
  }, [isOpen, toggle]);
  return /*#__PURE__*/_react["default"].createElement(CollapsibleContext.Provider, {
    value: value
  }, children);
};

exports.CollapsibleContextProvider = CollapsibleContextProvider;