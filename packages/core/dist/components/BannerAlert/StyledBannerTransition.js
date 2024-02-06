"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBannerTransition = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * We have to transition on max-height to have the height of the banner at 0 AND
 * make the transition look good.
 */
var closeCss = (0, _styledComponents.css)(["opacity:0;visibility:hidden;max-height:0;transition:opacity 0.5s ease-in-out,visibility 0.2s ease 0.6s,max-height 0.2s ease-out 0.6s;"]);

var StyledBannerTransition = _styledComponents["default"].div.withConfig({
  displayName: "StyledBannerTransition",
  componentId: "sc-179mdjp-0"
})(["transition:opacity 0.5s ease-in-out;opacity:1;max-height:1000px;", ""], function (_ref) {
  var isOpen = _ref.isOpen;
  return !isOpen && closeCss;
});

exports.StyledBannerTransition = StyledBannerTransition;