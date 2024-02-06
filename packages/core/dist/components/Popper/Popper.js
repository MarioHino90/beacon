"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popper = void 0;

var _react = _interopRequireDefault(require("react"));

var _Portal = require("../Portal");

var _PopperContext = require("./PopperContext");

var _PopperManager = require("./PopperManager");

var _excluded = ["children", "className", "componentName", "id", "target", "targetRef", "popperStyle", "popperStyledCss", "portalRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Popper = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$componentName = _ref.componentName,
      componentName = _ref$componentName === void 0 ? "Popper" : _ref$componentName,
      id = _ref.id,
      target = _ref.target,
      targetRef = _ref.targetRef,
      popperStyle = _ref.popperStyle,
      popperStyledCss = _ref.popperStyledCss,
      portalRef = _ref.portalRef,
      props = _objectWithoutProperties(_ref, _excluded);

  // if no `target` AND `targetRef` defined, fail
  if (!target && !targetRef) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("ERROR: You must specify a 'target' or 'targetRef' prop for the '".concat(componentName, "' component."));
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_Portal.Portal, {
    node: portalRef
  }, /*#__PURE__*/_react["default"].createElement(_PopperContext.PopperContextProvider, _extends({}, props, {
    portalRef: portalRef,
    target: target,
    targetRef: targetRef
  }), /*#__PURE__*/_react["default"].createElement(_PopperManager.PopperManager, {
    className: className,
    id: id,
    popperStyle: popperStyle,
    popperStyledCss: popperStyledCss,
    ref: ref
  }, children)));
});

exports.Popper = Popper;
Popper.displayName = "Popper";