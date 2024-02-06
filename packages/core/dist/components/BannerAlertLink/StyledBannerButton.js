"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBannerButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../Button");

var _BannerAlertLinkStyling = require("./BannerAlertLinkStyling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledBannerButton = (0, _styledComponents["default"])(_Button.Button).attrs(function (props) {
  return _objectSpread({
    variant: "quaternary"
  }, props);
}).withConfig({
  displayName: "StyledBannerButton",
  componentId: "sc-1rvmyhs-0"
})(["", " ", " > *:not(:last-of-type){margin-right:0;}"], _BannerAlertLinkStyling.bannerAlertLinkStyling, _Button.StyledButtonContent);
exports.StyledBannerButton = StyledBannerButton;
StyledBannerButton.displayName = "StyledBannerButton";