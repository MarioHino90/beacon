"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonLoader = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _excluded = ["className", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getVariantCss = function getVariantCss(_ref) {
  var variant = _ref.variant;

  switch (variant) {
    case "checkbox":
      return (0, _styledComponents.css)(["height:18px;width:18px;"]);

    case "text":
      return (0, _styledComponents.css)(["height:14px;width:100%;"]);

    case "image":
      return (0, _styledComponents.css)(["height:26px;width:26px;"]);

    case "image-round":
      return (0, _styledComponents.css)(["height:26px;width:26px;border-radius:100%;"]);

    default:
      return (0, _styledComponents.css)(["height:100%;width:100%;"]);
  }
};

var pulse = (0, _styledComponents.keyframes)(["0%{background-position:0% 0%}100%{background-position:-135% 0%}"]);

var SkeletonLoader = _styledComponents["default"].div.attrs(function (_ref2) {
  var className = _ref2.className,
      variant = _ref2.variant,
      props = _objectWithoutProperties(_ref2, _excluded);

  return _objectSpread(_objectSpread({}, props), {}, {
    variant: variant,
    className: (0, _classnames["default"])(["bcl-skeleton-loader", variant ? "bcl-skeleton-loader-".concat(variant) : "", className])
  });
}).withConfig({
  displayName: "SkeletonLoader",
  componentId: "sc-1h52kqz-0"
})(["border-radius:", ";background:linear-gradient( -90deg,", " 0%,", " 50%,", " 100% );background-size:400% 400%;animation:", " 1.2s ease-in-out infinite;", ""], (0, _beaconStyling.getBorderRadius)("sm"), (0, _beaconStyling.getColor)("gray", 100), (0, _beaconStyling.getColor)("gray", 50), (0, _beaconStyling.getColor)("gray", 100), pulse, getVariantCss);

exports.SkeletonLoader = SkeletonLoader;