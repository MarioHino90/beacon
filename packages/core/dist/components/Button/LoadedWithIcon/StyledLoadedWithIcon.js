"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLoadedWithIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icon = require("../../Icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var scale = (0, _styledComponents.keyframes)(["0%{transform:scale(10);}50%{transform:scale(0.2);}70%{transform:scale(1.2);}90%{transform:scale(0.7);}100%{transform:scale(1);}"]);

var StyledLoadedWithIcon = _styledComponents["default"].span.withConfig({
  displayName: "StyledLoadedWithIcon",
  componentId: "sc-1nnalu4-0"
})(["position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;display:flex;justify-content:center;align-items:center;", "{", " i{transform-origin:center center;}}"], _Icon.StyledIcon, function (_ref) {
  var isAnimated = _ref.isAnimated;
  return isAnimated && (0, _styledComponents.css)(["animation:", " 1s linear;"], scale);
});

exports.StyledLoadedWithIcon = StyledLoadedWithIcon;