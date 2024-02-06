"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignItemsCss = getAlignItemsCss;
exports.getFlexCss = void 0;
exports.getFlexDirectionCss = getFlexDirectionCss;
exports.getFlexDisplayCss = getFlexDisplayCss;
exports.getFlexWrapCss = getFlexWrapCss;
exports.getJustifyContentCss = getJustifyContentCss;
exports.getTextAlignCss = getTextAlignCss;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getAlignItemsCss(alignItems) {
  return {
    alignItems: alignItems
  };
}

function getFlexDirectionCss(flexDirection) {
  return {
    flexDirection: flexDirection
  };
}

function getFlexWrapCss(flexWrap) {
  return {
    flexWrap: flexWrap
  };
}

function getJustifyContentCss(justifyContent) {
  return {
    justifyContent: justifyContent
  };
}

function getTextAlignCss(textAlign) {
  return {
    textAlign: textAlign
  };
}

function getFlexDisplayCss() {
  var inline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    display: inline ? "inline-flex" : "flex"
  };
}

var getFlexCss = function getFlexCss(_ref) {
  var alignItems = _ref.alignItems,
      direction = _ref.direction,
      justifyContent = _ref.justifyContent,
      inline = _ref.inline,
      textAlign = _ref.textAlign,
      wrap = _ref.wrap;
  var displayStyle = getFlexDisplayCss(inline);
  var alignItemsStyle = getAlignItemsCss(alignItems);
  var directionStyle = getFlexDirectionCss(direction);
  var justifyContentStyle = getJustifyContentCss(justifyContent);
  var textAlignStyle = getTextAlignCss(textAlign);
  var wrapStyle = getFlexWrapCss(wrap);
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, displayStyle), alignItemsStyle), directionStyle), justifyContentStyle), textAlignStyle), wrapStyle);
};

exports.getFlexCss = getFlexCss;