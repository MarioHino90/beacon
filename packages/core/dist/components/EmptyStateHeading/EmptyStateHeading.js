"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStateHeading = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _Box = require("../Box");

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getAttrs = function getAttrs(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return _objectSpread(_objectSpread({}, props), {}, {
    className: (0, _classnames["default"])(["bcl-empty-state-heading", className])
  });
};

var EmptyStateHeading = (0, _styledComponents["default"])(_Box.Box).attrs(getAttrs).withConfig({
  displayName: "EmptyStateHeading",
  componentId: "sc-7g8qeg-0"
})(["padding-top:", ";font-family:", ";font-size:", ";font-weight:", ";color:", ";max-width:400px;text-align:center;"], (0, _beaconStyling.getSpacing)("lg"), (0, _beaconStyling.getFontFamily)("base"), (0, _beaconStyling.getFontSize)("heading", 4), (0, _beaconStyling.getFontWeight)("bold"), (0, _beaconStyling.getColor)("gray", 900));
exports.EmptyStateHeading = EmptyStateHeading;
EmptyStateHeading.displayName = "EmptyStateHeading";