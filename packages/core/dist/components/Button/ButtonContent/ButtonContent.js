"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _LoadedWithIcon = require("../LoadedWithIcon");

var _LoadingIconWithGradient = require("../LoadingIconWithGradient");

var _StyledButtonContent = require("./StyledButtonContent");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonContent = function ButtonContent(_ref) {
  var children = _ref.children,
      loadingMessage = _ref.loadingMessage,
      loadingState = _ref.loadingState,
      intent = _ref.intent,
      size = _ref.size,
      variant = _ref.variant;
  // keep track of whether it's the first render of the component
  // we use this to ensure that the opacity is set to 1 when the
  // component first appears onscreen
  var firstRender = (0, _react.useRef)(true); // when the loading state is changed, then it's no longer the
  // first render so set it to false

  (0, _react.useEffect)(function () {
    if (loadingState && loadingState !== "idle") {
      firstRender.current = false;
    }
  }, [loadingState]); // when it's loading, display loading icon

  if (loadingState === "loading") {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_LoadingIconWithGradient.LoadingIconWithGradient, {
      intent: intent,
      variant: variant,
      size: size
    }), loadingMessage);
  } // when loading state is errored out, display the error icon


  if (loadingState === "error") {
    return /*#__PURE__*/_react["default"].createElement(_LoadedWithIcon.LoadedWithIcon, {
      name: "times"
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loadingState === "success" && /*#__PURE__*/_react["default"].createElement(_LoadedWithIcon.LoadedWithIcon, {
    name: "check",
    isAnimated: true
  }), /*#__PURE__*/_react["default"].createElement(_StyledButtonContent.StyledButtonContent, {
    isAnimated: !firstRender.current && loadingState === "idle",
    firstRender: firstRender.current
  }, _react["default"].Children.map(children, function (child) {
    return typeof child === "string" ? /*#__PURE__*/_react["default"].createElement("span", null, child) : child;
  })));
};

exports.ButtonContent = ButtonContent;