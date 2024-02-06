"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _StyledIcon = require("./StyledIcon");

var _brazeIcons = require("./braze-icons");

var _excluded = ["className", "name", "size", "color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO: parcel out these icons to specific components if the need arises
// This `as` chain is just so we can force library.add to accept our custom components
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas, _freeRegularSvgIcons.far, _freeBrandsSvgIcons.fab, _brazeIcons.brazeIcons);

var Icon = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "lg" : _ref$size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({}, props, {
    getColor: color,
    ref: ref,
    className: (0, _classnames["default"])(["bcl-Icon", "bcl-icon", className])
  }), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: name,
    size: size
  }));
});

exports.Icon = Icon;
Icon.displayName = "Icon";