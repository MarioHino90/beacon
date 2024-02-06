"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpecs = exports.getBoxCss = void 0;

var _beaconStyling = require("@braze/beacon-styling");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Calculates the specs for spacing
 *
 * @param header the css property that is being calculated for
 * @param specs the spacing information
 * @param props the props containing `theme`
 *
 * @return the calculated specs
 */
var getSpecs = function getSpecs(header, specs) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof specs === "string") {
    return _defineProperty({}, header, (0, _beaconStyling.spacingSelector)(props, specs));
  }

  if (_typeof(specs) === "object") {
    var _ref5;

    if (specs.horizontal && specs.vertical) {
      var _ref2;

      return _ref2 = {}, _defineProperty(_ref2, "".concat(header, "Left"), (0, _beaconStyling.spacingSelector)(props, specs.horizontal)), _defineProperty(_ref2, "".concat(header, "Right"), (0, _beaconStyling.spacingSelector)(props, specs.horizontal)), _defineProperty(_ref2, "".concat(header, "Top"), (0, _beaconStyling.spacingSelector)(props, specs.vertical)), _defineProperty(_ref2, "".concat(header, "Bottom"), (0, _beaconStyling.spacingSelector)(props, specs.vertical)), _ref2;
    }

    if (specs.horizontal) {
      var _ref3;

      return _ref3 = {}, _defineProperty(_ref3, "".concat(header, "Left"), (0, _beaconStyling.spacingSelector)(props, specs.horizontal)), _defineProperty(_ref3, "".concat(header, "Right"), (0, _beaconStyling.spacingSelector)(props, specs.horizontal)), _defineProperty(_ref3, "".concat(header, "Top"), specs.top && (0, _beaconStyling.spacingSelector)(props, specs.top)), _defineProperty(_ref3, "".concat(header, "Bottom"), specs.bottom && (0, _beaconStyling.spacingSelector)(props, specs.bottom)), _ref3;
    }

    if (specs.vertical) {
      var _ref4;

      return _ref4 = {}, _defineProperty(_ref4, "".concat(header, "Left"), specs.left && (0, _beaconStyling.spacingSelector)(props, specs.left)), _defineProperty(_ref4, "".concat(header, "Right"), specs.right && (0, _beaconStyling.spacingSelector)(props, specs.right)), _defineProperty(_ref4, "".concat(header, "Top"), (0, _beaconStyling.spacingSelector)(props, specs.vertical)), _defineProperty(_ref4, "".concat(header, "Bottom"), (0, _beaconStyling.spacingSelector)(props, specs.vertical)), _ref4;
    }

    return _ref5 = {}, _defineProperty(_ref5, "".concat(header, "Left"), specs.left && (0, _beaconStyling.spacingSelector)(props, specs.left)), _defineProperty(_ref5, "".concat(header, "Right"), specs.right && (0, _beaconStyling.spacingSelector)(props, specs.right)), _defineProperty(_ref5, "".concat(header, "Top"), specs.top && (0, _beaconStyling.spacingSelector)(props, specs.top)), _defineProperty(_ref5, "".concat(header, "Bottom"), specs.bottom && (0, _beaconStyling.spacingSelector)(props, specs.bottom)), _ref5;
  }

  return {};
};
/**
 * Creates box styling for a component using token styles
 *
 * @param margin the styling options for margin
 * @param padding the styling options for padding
 * @param props the props containing `theme`
 *
 * @return the styles as CSSProperties
 */


exports.getSpecs = getSpecs;

var getBoxCss = function getBoxCss(margin, padding, props) {
  var marginStyle = getSpecs("margin", margin, props);
  var paddingStyle = getSpecs("padding", padding, props);
  return _objectSpread(_objectSpread({}, marginStyle), paddingStyle);
};

exports.getBoxCss = getBoxCss;