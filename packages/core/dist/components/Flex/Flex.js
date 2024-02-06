"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _StyledFlex = require("./StyledFlex");

var _excluded = ["className", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Flex = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  _react["default"].useEffect(function () {
    if (!style) {
      return;
    }

    var isSpacingPresent = Object.keys(style).some(function (key) {
      return key.includes("margin") || key.includes("padding");
    });

    if (isSpacingPresent && process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn("WARNING: It looks like you supplied a 'margin' and/or 'padding' attribute to the 'Flex' component. To ensure that margins and padding are applied according to design guidelines, please use the 'FlexBox' component instead.");
    }
  }, [style]);

  return /*#__PURE__*/_react["default"].createElement(_StyledFlex.StyledFlex, _extends({}, props, {
    className: (0, _classnames["default"])(["bcl-flex", className]),
    ref: ref,
    style: style
  }));
});

exports.Flex = Flex;
Flex.displayName = "Flex";