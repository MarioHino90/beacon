"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextarea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Input = require("../Input");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styledTextarea = (0, _styledComponents["default"])(_Input.Input);

var getMinHeight = function getMinHeight(_ref) {
  var bclSize = _ref.bclSize,
      vSize = _ref.vSize;
  var combinedSize = vSize !== null && vSize !== void 0 ? vSize : bclSize === "md" ? "xl" : "lg";

  switch (combinedSize) {
    case "lg":
      return "60px";

    case "xl":
      return "120px";

    case "md":
    default:
      return "40px";
  }
};

var StyledTextarea = styledTextarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  resize: vertical;\n  padding: 9px 12px 5px;\n  min-height: ", ";\n  line-height: normal;\n\n  &:focus:not(:disabled),\n  &:active:not(:disabled) {\n    padding: 8px 11px 4px;\n  }\n"])), getMinHeight);
exports.StyledTextarea = StyledTextarea;